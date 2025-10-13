import {
  LuClock5,
  LuCopy,
  LuDownload,
  LuLink,
  LuRefreshCw,
} from "react-icons/lu";
import { useState } from "react";
import { CiTextAlignRight } from "react-icons/ci";

const LinkTab = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [timedText, setTimedText] = useState(null);
  const [isText, setIsText] = useState(true);

  const handleSubmit = () => {
    fetch("https://harf.roshan-ai.ir/api/transcribe_files/", {
      method: "POST",
      headers: {
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ media_urls: [url] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data[0]?.segments) {
          const fullText = data[0].segments.map((seg) => seg.text).join(" ");
          setResult(fullText);
          setTimedText(data[0].segments);
        } else {
          console.log("Unexpected response:", data);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setResult('error');
      });
    console.log(result);
    console.log(timedText);
  };

  return (
    <div
      className={`w-full h-[470px] justify-items-center content-center border-2 rounded-lg overflow-scroll -mt-0.5 border-[#FF1654]`}
    >
      {result == null ? (
        <div>
          <div className="flex rounded-full border-[#FF1654] border-[1px] py-1.5 px-4">
            <button
              onClick={handleSubmit}
              className="w-fit bg-[#FF1654] p-1.5 rounded-full text-white hover:bg-[#9a0e33] transition-colors duration-500"
            >
              <LuLink className="text-xl" />
            </button>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              type="text"
              className="w-full px-2 outline-none"
            />
          </div>
          <p dir="rtl" className="text-center py-2 text-[#626262]">
            نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد <br /> و دکمه
            را فشار دهید
          </p>
        </div>
      ) : (
        <div className="text-sm px-4">
          <div className="flex justify-between border-b-[1px] border-[#c5c0c0]">
            <div className="flex items-center py-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setResult(null);
                }}
                className="flex items-center bg-[#118AD3] px-3 py-1.5 rounded-full text-white"
              >
                <span className="px-2 mb-1">شروع دوباره</span>
                <LuRefreshCw className="text-base" />
              </button>
              <p className="p-2 rounded-full ml-4 hover:cursor-pointer transition-all duration-300 hover:bg-slate-200">
                <LuCopy className="text-base text-[#626262]" />
              </p>
              <p className="p-2 rounded-full  ml-4 hover:cursor-pointer transition-all duration-300 hover:bg-slate-200">
                <LuDownload className="text-base text-[#626262] hover:cursor-pointer hover:bg-slate-200" />
              </p>
            </div>

            <ul className="flex items-center">
              <li className="px-2 h-full">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsText(false);
                  }}
                  className={`flex items-center px-1 ${
                    !isText && "border-b-black border-b-2"
                  } h-full`}
                >
                  <span className="px-2">متن زمان‌بندی شده</span>
                  <LuClock5 className="text-base" />
                </button>
              </li>
              <li className="pl-2 h-full">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsText(true);
                  }}
                  className={`flex items-center px-1 ${
                    isText && "border-b-black border-b-2"
                  } h-full`}
                >
                  <span className="px-2">متن ساده</span>
                  <CiTextAlignRight className="text-base" />
                </button>
              </li>
            </ul>
          </div>
          {isText ? (
            <p dir="rtl" className="py-4 text-[16px]">
              {result}
            </p>
          ) : (
            <ul>
              {timedText.map((t, index) => (
                <li
                  key={index}
                  dir="rtl"
                  className={`flex p-4 rounded-full ${
                    index % 2 ? "bg-[#F2F2F2]" : "bg-white"
                  }`}
                >
                  <span className="px-2 ">{t.start.split(":").slice(1, 3).join(":").split(".")[0]}</span>
                  <span className="px-2 ">{t.end.split(":").slice(1, 3).join(":").split(".")[0]}</span>
                  <p className="px-2 ">{t.text}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkTab;
