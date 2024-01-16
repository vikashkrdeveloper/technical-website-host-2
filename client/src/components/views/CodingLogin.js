import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Data_Fetch_Api from "../contexts/Data_Fetch_Api";
import Loader from "../partials/Loader";
import MainHeader from "../partials/MainHeader";

const CodingLogin = () => {
  const navigate = useNavigate();
  const [getdata, setdata] = useState({ userid: "", password: "" });
  const [IsLoading, Error] = Data_Fetch_Api('/users/data');
  const [IsLoadingRequest, setIsLoadingRequest] = useState(false);

  const changedata = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setdata({ ...getdata, [name]: value });
  };
  const datasubmit = async (event) => {
    event.preventDefault();
    setIsLoadingRequest(true)
    if (getdata.userid >= 0 && getdata.userid <= 9999999999) {
      try {
        const { userid, password } = getdata;
        const res = await fetch("/coding/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid, password }),
        });

        if (res.status === 200) {
          toast.success("Login Sucessfully");
          setIsLoadingRequest(false)
          navigate("/technical/events/coding/contest/");
        } else if (res.status === 500) {
          toast.error("All field require");
          setIsLoadingRequest(false)

        } else if (res.status === 402) {
          toast.error("Invalid login details");
          setIsLoadingRequest(false)

        } else if (res.status === 403) {
          toast.error("Some technical issue");
          setIsLoadingRequest(false)

        }
      } catch (error) {
        setIsLoadingRequest(false)

      }
    } else {
      toast.error("Alphabet not Allow user name only number");
      setIsLoadingRequest(false)

    }
  };
  if (Error) {
    // navigate('/participant/login')
  } else {
    // navigate('/technical/events/coding/contest/')
  }
  if (IsLoading ) {
    return <Loader message="Please Wait.." />
  }
  if (IsLoadingRequest ) {
    return <Loader message="Processing.." />
  }
  return (
    <>
    <MainHeader/>
      <div className="w-[100%] h-[91.6vh] bg-[#161f2f] flex justify-center items-center">
        <div className=" w-[350px] bg-[#efefef] h-[400px] rounded-[10px]  border-[2px]">
          <div className=" w-[100%] h-[50px] flex justify-center items-center  ">
            <h1 className="text-[22px] font-[700]">Coding Login</h1>
          </div>
          <form onSubmit={datasubmit} className=" w-[100%] h-[350px]   ">
            <div className=" w-[100%] h-[50px] flex justify-center items-center  mt-4">
              <input
                type="text"
                placeholder="Enter your event id : "
                name="userid"
                onChange={changedata}
                value={getdata.userid}
                required
                maxLength={10}
                className="p-[10px] border-[1px] rounded-[5px] outline-[#bb2470] w-[90%] h-[100%] "
              />
            </div>
            <div className=" w-[100%] h-[50px] flex justify-center items-center  mt-2">
              <input
                type="password"
                placeholder="Enter your password : "
                name="password"
                value={getdata.password}
                onChange={changedata}
                required
                className="p-[10px] border-[1px] rounded-[5px] outline-[#bb2470] w-[90%] h-[100%]"
              />
            </div>
            <div className=" w-[100%] h-[20px] flex justify-end items-center mt-[20px]">
              <NavLink
                to=""
                className=" mr-[20px] text-[15px] font-[600] text-[#1b0d1e]"
              >
                Forget Password?
              </NavLink>
            </div>
            <div className=" w-[100%] h-[100px] flex justify-center items-center mt-[20px]">
              <button
                type="submit"
                className=" p-[10px] border-2 w-[150px] rounded-[25px] bg-[#2c76c1] text-[#fff] font-[700]"
              >
                Login
              </button>
            </div>
            {/* <div className=" w-[100%] h-[auto] flex justify-center items-center mt-[20px] gap-1">
              <p className=" text-[15px]">Have an admin account?</p><NavLink  to="/admin/dashboard/login" className='text-[14px] font-[700]'>Admin Login</NavLink>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
};

export default CodingLogin;
