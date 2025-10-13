import { Link, Outlet, useLocation } from "react-router-dom";
import { LuChevronDown, LuMic, LuCloudUpload, LuLink } from "react-icons/lu";
import Header from "../Header/Header";

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-full py-7 px-2 md:px-12">
      <Header />
      <div className="w-fit mx-auto text-center">
        <h2 className="text-2xl md:text-3xl py-6 text-[#00BA9F]">تبدیل گفتار به متن</h2>
        <p dir="rtl" className="text-sm lg:text-md text-[#969696] md:w-[434px] mx-auto">
          آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان فارسی را
          یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
        </p>
      </div>
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto my-10">
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
