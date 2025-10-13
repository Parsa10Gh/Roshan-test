import { LuFolder, LuMic } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <div className="w-40 bg-gradient-to-b text-white from-[#00B5A0] to-[#00C69B] rounded-l-xl">
      <div className="flex h-fit py-12 justify-center">
        <h1 className="text-xl font-bold px-3 mt-1">آوا</h1>
        <img src="Icon.png" className="w-5" alt="Icon" />
      </div>
      <ul className="flex-col justify-items-center h-fit py-28">
        <li
          className={`px-1 lg:px-2 py-2 my-6 rounded-xl ${
            location.pathname.startsWith("/speech") ? "bg-[#02816E]" : ""
          }`}
        >
          <Link to="/" className="flex">
            <span className="w-full px-2">تبدیل گفتار</span>
            <LuMic className="text-2xl" />
          </Link>
        </li>
        <li
          className={`px-1 lg:px-3 py-2 my-6 rounded-xl ${
            location.pathname === "/archive" ? "bg-[#02816E]" : ""
          }`}
        >
          {" "}
          <Link to="/archive" className="flex">
            <span className="px-6">آرشیو</span>
            <LuFolder className="text-2xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
