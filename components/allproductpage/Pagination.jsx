import React from "react";
import "./pagination.css";

const Pagination = ({
  totalPosts,
  postPerPage,
  setcurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className=" flex justify-center items-center mb-12">
      <h1 className=" text-center">صفحه پیدا شد</h1>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setcurrentPage(page)}
            className=" w-8 h-8 rounded-md active:bg-green-400 bg-slate-500 dark:bg-white mx-3 text-white dark:text-black cursor-pointer"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
