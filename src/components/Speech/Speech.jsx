import { LuMic } from "react-icons/lu";
const Speech = () => {
  return (
    <div className="w-full h-[470px] justify-items-center content-center border-2 rounded-lg -mt-0.5 border-[#00BA9F]">
      <div>
        <p className="w-fit mx-auto bg-[#00BA9F] p-3 rounded-full hover:cursor-pointer transition-colors duration-500 hover:bg-[#019780]">
          <LuMic className="text-3xl text-white w-fit" />
        </p>
        <p dir="rtl" className="text-center py-2 text-[#626262]">
          برای شروع به صحبت، دکمه را فشار دهید
          <br />
          متن پیاده شده آن، در اینجا ظاهر شود
        </p>
      </div>
    </div>
  );
};

export default Speech;
