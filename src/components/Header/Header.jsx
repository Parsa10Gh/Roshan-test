import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { changeExit } from "../../slices/homeSlices";
const Header = () => {
  const isExit = useSelector((state) => state.home.exit);
  const dispatch = useDispatch();

  return (
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
  );
};

export default Header;
