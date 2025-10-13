import { LuCloudUpload, LuCopy, LuDownload, LuTrash2 } from "react-icons/lu";
import Header from "../Header/Header";
import { FaRegFileWord } from "react-icons/fa";

const Archive = () => {
  return (
    <div className="w-full py-7 px-12">
      <Header />
      <div className="px-20">
        <h1 className="text-right text-2xl text-[#00BA9F] py-2">آرشیو من</h1>

        <table dir="" className="min-w-full mt-10 text-sm">
          <thead className="text-black">
            <tr>
              <th className=" font-normal text-sm text-center pb-8"></th>
              <th className=" font-normal text-sm text-center pb-8">مدت زمان</th>
              <th className=" font-normal text-sm text-center pb-8">نوع فایل</th>
              <th className=" font-normal text-sm text-center pb-8">تاریخ بارگذاری</th>
              <th className=" font-normal text-sm text-right pb-8 pr-8">نام فایل</th>
              <th className=" font-normal text-sm text-right pb-8 w-8"></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="">
              <td className="text-center text-xl text-[#8F8F8F] px-4 py-2 flex justify-between">
                <i className="">
                  <LuTrash2 />
                </i>
                <i className="">
                  <LuCopy />
                </i>
                <i className="">
                  <FaRegFileWord />
                </i>
                <i className="">
                  <LuDownload />
                </i>
              </td>
              <td className="text-center  py-2 w-1/12">4:39</td>
              <td className="text-center  py-2 w-1/12">.mp3</td>
              <td className="text-center  py-2 w-2/12">1400/08/16</td>
              <td className="text-right  w-6/12 py-2 pr-8">
                <a>khaterate To</a>
              </td>
              <td className="py-2 rounded-full bg-[#118AD3] flex justify-center">
                <LuCloudUpload className="text-lg text-white" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Archive;
