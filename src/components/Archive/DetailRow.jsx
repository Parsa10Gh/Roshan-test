import { CiTextAlignRight } from "react-icons/ci";
import { LuClock5 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { changeIsText } from "../../slices/archiveSlices";

const DetailRow = ({ file }) => {
  const dispatch = useDispatch();
  const isText = useSelector((state) => state.archive.isText);

  return (
    <tr>
      <td colSpan={6}>
        <div
          dir="rtl"
          className={`p-4 h-80 rounded-xl border-2 ${
            file.filename.endsWith(".mp4")
              ? "border-[#118AD3]"
              : file.filename.endsWith(".m4a") ||
                file.filename.endsWith(".wav")
              ? "border-[#40C6B8]"
              : "border-[#FF1654]"
          }`}
        >
          {/* Tabs */}
          <ul className="flex items-center">
            <li className="pl-2 h-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeIsText(true));
                }}
                className={`flex items-center px-1 pb-3 ${
                  isText && "border-b-black border-b-2"
                } h-full`}
              >
                <CiTextAlignRight className="text-base" />
                <span className="px-2">متن ساده</span>
              </button>
            </li>
            <li className="px-2 h-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeIsText(false));
                }}
                className={`flex items-center px-1 pb-3 ${
                  !isText && "border-b-black border-b-2"
                } h-full`}
              >
                <LuClock5 className="text-base" />
                <span className="px-2">متن زمان‌بندی شده</span>
              </button>
            </li>
          </ul>

          {/* Content */}
          {isText ? (
            <div className="h-4/6 pt-4 pb-4">
              <p className="h-full overflow-auto text-base/8 text-justify px-4 overflow-x-hidden">
                {file.segments.map((seg) => seg.text).join(" ")}
              </p>
            </div>
          ) : (
            <ul className="h-4/6 overflow-auto">
              {file.segments.map((t, index) => (
                <li
                  key={index}
                  dir="rtl"
                  className={`flex p-4 rounded-full ${
                    index % 2 ? "bg-[#F2F2F2]" : "bg-white"
                  }`}
                >
                  <span className="px-2 ">
                    {t.start.split(":").slice(1, 3).join(":").split(".")[0]}
                  </span>
                  <span className="px-2 ">
                    {t.end.split(":").slice(1, 3).join(":").split(".")[0]}
                  </span>
                  <p className="px-2">{t.text}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Audio */}
          <audio
            className="justify-self-center mt-8 h-8 w-6/12"
            src={file.url}
            controls
          ></audio>
        </div>
      </td>
    </tr>
  );
};

export default DetailRow;
