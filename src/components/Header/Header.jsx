import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { MdPersonOutline } from "react-icons/md";
import { RxExit } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { changeExit } from "../../slices/homeSlices";
const Header = () => {
  const isExit = useSelector((state) => state.home.exit);
  const dispatch = useDispatch();

  return (
    <div className="relative w-fit">
      <ul
        className={`w-fit rounded-3xl px-2 absolute mt-1 bg-white border-2 border-[#00BA9F] z-10 ${
          isExit
            ? ""
            : "hover:bg-[#00BA9F] hover:text-white hover:cursor-pointer transition-all duration-500"
        } text-[#00BA9F] border-2 border-[#00BA9F]`}
        onClick={() => dispatch(changeExit())}
      >
        <li className="flex items-center w-fit px-2 py-2">
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
    </div>
  );
};

export default Header;
