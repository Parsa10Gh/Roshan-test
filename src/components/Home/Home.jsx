import { Link, Outlet, useLocation } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";
import {
  LuChevronDown,
  LuChevronUp,
  LuMic,
  LuCloudUpload,
  LuLink,
} from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { changeExit } from "../../slices/homeSlices";

const Home = () => {
  const isExit = useSelector((state) => state.home.exit);
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div className="w-full py-7 px-12">
      <ul
        className={`w-fit rounded-3xl px-2 ${
          isExit
            ? ""
            : "hover:bg-[#00BA9F] hover:text-white transition-all duration-500"
        } text-[#00BA9F] border-2 border-[#00BA9F]`}
      >
        <li
          className="flex items-center w-fit px-2 py-2 hover:cursor-pointer"
          onClick={() => dispatch(changeExit())}
        >
          {isExit ? (
            <LuChevronUp className="text-lg self-end" />
          ) : (
            <LuChevronDown className="text-lg self-end" />
          )}

          <span className="text-base pl-2 pr-1">مهمان</span>
          <MdPersonOutline className="text-2xl" />
        </li>
        {isExit && (
          <li className="flex items-center w-full justify-end px-2 py-2 border-t-[1px] border-[#00BA9F] hover:cursor-pointer">
            <span className="text-base pl-2 pr-1">خروج</span>
            <RxExit className="text-2xl" />
          </li>
        )}
      </ul>
      <div className="w-fit mx-auto text-center">
        <h2 className="text-3xl py-6 text-[#00BA9F]">تبدیل گفتار به متن</h2>
        <p dir="rtl" className="text-[#969696] w-[434px] mx-auto">
          آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را
          یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
        </p>
      </div>
      <div className="md:w-3/4 lg:w-1/2 mx-auto my-10">
        <ul className="flex justify-end text-[#969696] px-1">
          <li>
            <Link
              to="link"
              className={`px-6 py-2 rounded-t-md ${
                location.pathname === "/speech/link"
                  ? "bg-[#FF1654] text-white"
                  : ""
              } text-sm flex`}
            >
              <span className="px-2">لینک</span>
              <LuLink className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              to="upload"
              className={`px-6 py-2 rounded-t-md ${
                location.pathname === "/speech/upload"
                  ? "bg-[#118AD3] text-white"
                  : ""
              } text-sm flex`}
            >
              <span className="px-2">بارگذاری فایل</span>
              <LuCloudUpload className="text-xl" />
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className={`px-6 py-2 rounded-t-md ${
                location.pathname === "/speech" ? "bg-[#00BA9F] text-white" : ""
              } text-sm flex`}
            >
              <span className="px-2">ضبط صدا</span>
              <LuMic className="text-xl" />
            </Link>
          </li>
        </ul>
        <Outlet />
        <div className="flex items-center w-fit px-2 py-2 hover:cursor-pointer text-sm">
          <p className="flex items-start w-fit px-4 py-1.5 rounded-full text-center text-[#00BA9F] border-2 border-[#00BA9F] hover:bg-[#00BA9F] hover:text-white transition-all duration-500 hover:cursor-pointer">
            <LuChevronDown className="text-lg self-end" />
            <span className="text-base pl-4">فارسی</span>
          </p>
          <p dir="rtl" className="px-6 text-[#626262]">
            زبان گفتار:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
