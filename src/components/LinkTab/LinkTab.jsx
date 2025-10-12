import { LuLink } from "react-icons/lu";

const LinkTab = () => {
  return (
    <div
      className={`w-full h-[470px] justify-items-center content-center border-2 rounded-lg -mt-0.5 border-[#FF1654]`}
    >
      <div>
        <div className="flex rounded-full border-[#FF1654] border-[1px] py-1.5 px-4">
          <p className="w-fit bg-[#FF1654] p-1.5 rounded-full hover:cursor-pointer transition-colors duration-500 hover:bg-[#9a0e33]">
            <LuLink className="text-xl text-white w-fit" />
          </p>
          <input type="text" className="w-full px-2 outline-none" />
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
