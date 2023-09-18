"use client";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import jwtDecode from "jwt-decode";

const Profile = () => {
  const [show, setShow] = useState(false);
  //   const [userInfo, setUserInfo] = useState({});

  const login = localStorage.getItem("loggedIn");

  const data = localStorage.getItem("token");
  const decode = data ? jwtDecode(data) : {};
  // setUserInfo(decode);

  const logout = () => {
    window.location.reload();
    window.location.assign("/");
    localStorage.removeItem("token");
    localStorage.clear();
  };

  return (
    <div>
      {login ? (
        <>
          <CgProfile
            onClick={() => setShow(!show)}
            className=" text-2xl mr-2 md:text-3xl md:mr-4"
          />
        </>
      ) : (
        <>
          <div></div>
        </>
      )}

      {show === true ? (
        <>
          <div className="  text-black  flex flex-col  justify-center  p-3  transition-all ease-in bg-white rounded-3xl shadow-bestChoice absolute right-[4.5rem] top-[5rem]">
            <div className=" text-end">
              <p>{decode.username} : نام کاربری</p>
              <p className=" mb-2"> {decode.email}: ایمیل</p>
            </div>
            <div className=" flex justify-center">
              <button
                onClick={logout}
                className="py-1 px-4  md:px-6 md:text-lg inline-flex justify-center items-center gap-2 rounded-md border-2 border-red-200 font-semibold text-red-500 hover:text-white hover:bg-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                خروج از حساب
              </button>
            </div>
          </div>
          <div  onClick={() => setShow(!show)} className="  h-screen w-[100rem] -z-20 absolute -left-20 "></div>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
