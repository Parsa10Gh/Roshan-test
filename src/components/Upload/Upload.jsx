import { LuCloudUpload } from "react-icons/lu";

const Upload = () => {
  return (
    <div
      className={`w-full h-[470px] justify-items-center content-center border-2 rounded-lg -mt-0.5 border-[#118AD3]`}
    >
      <div>
        <p className="w-fit mx-auto bg-[#118AD3] p-3 rounded-full hover:cursor-pointer transition-colors duration-500 hover:bg-[#0b5381]">
          <LuCloudUpload className="text-3xl text-white w-fit" />
        </p>
        <p dir="rtl" className="text-center py-2 text-[#626262]">
          برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید <br/> متن پیاده
          شده آن، در اینجا ظاهر می شود
        </p>
      </div>
    </div>
  );
};

export default Upload;
