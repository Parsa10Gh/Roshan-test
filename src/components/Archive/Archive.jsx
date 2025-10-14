import {
  LuClock5,
  LuCloudUpload,
  LuCopy,
  LuDownload,
  LuLink,
  LuMic,
  LuTrash2,
} from "react-icons/lu";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { CiTextAlignRight } from "react-icons/ci";
import { FaRegFileWord } from "react-icons/fa";
import Header from "../Header/Header";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setFilesList,
  changeCurrentPage,
  setOpenDetailId,
  setSavedIndex,
  setItemsPerPage,
  changeIsText,
} from "../../slices/archiveSlices";

const Archive = () => {
  const dispatch = useDispatch();
  const filesList = useSelector((state) => state.archive.filesList);
  const currentPage = useSelector((state) => state.archive.currentPage);
  const openDetailId = useSelector((state) => state.archive.openDetailId);
  const savedIndex = useSelector((state) => state.archive.savedIndex);
  const itemsPerPage = useSelector((state) => state.archive.itemsPerPage);
  const isText = useSelector((state) => state.archive.isText);

  useEffect(() => {
    fetch("https://harf.roshan-ai.ir/api/requests/", {
      headers: {
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const filesArray = Array.isArray(data)
          ? data
          : Array.isArray(data.results)
          ? data.results
          : [];

        dispatch(setFilesList(filesArray));
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  }, [dispatch]);

  const totalPages = Math.ceil(filesList.length / 8);

  const handleDelete = (id) => {
    if (!window.confirm("آیا از حذف این فایل مطمئن هستید؟")) return;

    fetch(`https://harf.roshan-ai.ir/api/requests/${id}/`, {
      method: "DELETE",
      headers: {
        Authorization: "Token a85d08400c622b50b18b61e239b9903645297196",
      },
    })
      .then((res) => {
        if (res.ok) {
          const updated = filesList.filter((file) => file.id !== id);
          dispatch(setFilesList(updated));
        } else {
          return res
            .text()
            .then((text) => console.error("Failed to delete:", text));
        }
      })
      .catch((err) => console.log("Network error:", err));
  };
  const handleRowClick = (index, fileId) => {
    if (openDetailId === fileId) {
      dispatch(setOpenDetailId(null));
      dispatch(setItemsPerPage(8));
      const restoredPage = Math.ceil((savedIndex + 1) / 8);
      dispatch(changeCurrentPage(restoredPage));
      return;
    }

    dispatch(setSavedIndex(index));
    dispatch(setOpenDetailId(fileId));
    dispatch(setItemsPerPage(4));

    const newPage = Math.ceil((index + 1) / 4);
    dispatch(changeCurrentPage(newPage));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filesToRender = filesList.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    dispatch(changeCurrentPage(newPage));
    dispatch(setItemsPerPage(8));
    dispatch(setOpenDetailId(null));
  };

  return (
    <div className="w-full py-7 px-2 lg:px-6 overflow-hidden">
      <Header />
      <div className="lg:px- xl:px-20">
        <h1 className="text-right text-2xl text-[#00BA9F] py-2">آرشیو من</h1>
        <table dir="" className="min-w-full h-fit mt-6 text-sm">
          <thead className="text-black">
            <tr>
              <th className="font-normal text-sm text-center pb-4"></th>
              <th className="font-normal text-sm text-center pb-4">مدت زمان</th>
              <th className="font-normal text-sm text-center pb-4">نوع فایل</th>
              <th className="font-normal text-sm text-center pb-4">
                تاریخ بارگذاری
              </th>
              <th className="font-normal text-sm text-right pb-4 pr-8">
                نام فایل
              </th>
              <th className="font-normal text-sm text-right pb-4 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {filesToRender.map((file, indexInPage) => {
              const index = startIndex + indexInPage;
              return (
                <React.Fragment key={file.id}>
                  <tr className="hover:shadow-md rounded-full ">
                    <td className="text-center text-xl text-[#8F8F8F] px-4 py-5 flex justify-between ">
                      <i
                        className="hover:bg-[#DC3545] hover:text-white hover:cursor-pointer transition-all duration-300 p-1 rounded-full"
                        onClick={() => handleDelete(file.id)}
                      >
                        <LuTrash2 />
                      </i>
                      <i
                        className="hover:text-[#00BA9F] hover:cursor-pointer transition-all duration-300 p-1"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            file.segments.map((seg) => seg.text).join(" ")
                          );
                        }}
                      >
                        <LuCopy />
                      </i>
                      <i className="hover:cursor-pointer transition-all duration-300 p-1">
                        <FaRegFileWord />
                      </i>
                      <a
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        href={file.url}
                        className="hover:text-[#00BA9F] hover:cursor-pointer transition-all duration-300 p-1"
                      >
                        <LuDownload />
                      </a>
                    </td>
                    <td className="text-center py-2 w-2/12">
                      {file.duration.split(".")[0]}
                    </td>
                    <td className="text-center py-2 w-1/12">
                      .{file.filename.split(".").pop()}
                    </td>
                    <td className="text-center py-2 w-2/12">
                      {file.processed.split("T")[0]}
                    </td>
                    <td
                      onClick={() => handleRowClick(index, file.id)}
                      className="text-right w-5/12 py-2 pr-4 lg:pr-8 hover:cursor-pointer"
                    >
                      <p>{file.filename}</p>
                    </td>
                    <td
                      className={`py-2 rounded-full flex justify-center px-2 mx-2 ${
                        file.filename.endsWith(".mp4")
                          ? "bg-[#118AD3]"
                          : file.filename.endsWith(".m4a") ||
                            file.filename.endsWith(".wav")
                          ? "bg-[#40C6B8]"
                          : "bg-[#FF1654]"
                      }`}
                    >
                      {file.filename.endsWith(".mp4") ? (
                        <LuCloudUpload className="text-lg text-white" />
                      ) : file.filename.endsWith(".m4a") ||
                        file.filename.endsWith(".wav") ? (
                        <LuMic className="text-lg text-white" />
                      ) : (
                        <LuLink className="text-lg text-white" />
                      )}
                    </td>
                  </tr>
                  {openDetailId === file.id && (
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
                                    {
                                      t.start
                                        .split(":")
                                        .slice(1, 3)
                                        .join(":")
                                        .split(".")[0]
                                    }
                                  </span>
                                  <span className="px-2 ">
                                    {
                                      t.end
                                        .split(":")
                                        .slice(1, 3)
                                        .join(":")
                                        .split(".")[0]
                                    }
                                  </span>
                                  <p className="px-2">{t.text}</p>
                                </li>
                              ))}
                            </ul>
                          )}
                          <audio
                            className="justify-self-center mt-8 h-8 w-6/12"
                            src={file.url}
                            controls
                          ></audio>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div
            dir="rtl"
            className="flex justify-center items-center gap-3 mt-6"
          >
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              className={`p-1 py-1 border rounded-full w-fit ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <RxCaretRight />
            </button>

            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 border rounded-full ${
                  currentPage === i + 1
                    ? "bg-[#00BA9F] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              className={`p-1 py-1 border rounded-full w-fit ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-200"
              }`}
            >
              <RxCaretLeft />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
