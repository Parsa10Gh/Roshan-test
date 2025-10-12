import { LuLink } from "react-icons/lu";
import { useState } from "react";

const LinkTab = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://harf.roshan-ai.ir/api/transcribe_files/",
        {
          method: "POST",
          headers: {
            Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ media_urls: [url] }),
        }
      );

      const data = await res.json();
      setResult(data); // store response
      console.log(data);
    } catch (err) {
      console.error(err);
      setResult({ error: "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`w-full h-[470px] justify-items-center content-center border-2 rounded-lg -mt-0.5 border-[#FF1654]`}
    >
      <div>
        <div className="flex rounded-full border-[#FF1654] border-[1px] py-1.5 px-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
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
        {/* <p className="w-fit mx-auto bg-[#FF1654] p-3 rounded-full hover:cursor-pointer transition-colors duration-500 hover:bg-[#930d31]">
          <LuLink className="text-3xl text-white w-fit" />
        </p> */}
        <p dir="rtl" className="text-center py-2 text-[#626262]">
          نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد <br /> و دکمه را
          فشار دهید
        </p>
      </div>
    </div>
  );
};

export default LinkTab;
