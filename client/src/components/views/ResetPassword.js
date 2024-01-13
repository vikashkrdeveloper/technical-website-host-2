import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import Loader from "../partials/Loader";
const ResetPassword = () => {
  const navigate = useNavigate();
  const [getdata, setdata] = useState({ userid: "", password: "" });
  const [IsLoadingRequest, setIsLoadingRequest] = useState(false);
  const changedata = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setdata({ ...getdata, [name]: value });
  };

  const datasubmit = async (event) => {
    event.preventDefault();
    setIsLoadingRequest(true);
    if (getdata.userid >= 0 && getdata.userid <= 9999999999) {
      try {
        const { userid, password } = getdata;
        const res = await fetch(`/forget/password/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userid, password }),
        });

        if (res.status === 200) {
          toast.success("Password Reset Sucessfully");
          setIsLoadingRequest(false)
          navigate('/participant/login')
        } else if (res.status === 500) {
          toast.error("All field require");
          setIsLoadingRequest(false)

        } else if (res.status === 408) {
          toast.error("Invalid userid");
          setIsLoadingRequest(false)

        } else if (res.status === 403) {
          toast.error("Some technical issue");
          setIsLoadingRequest(false)

        }
      } catch (error) {
        toast.error("some technical issue" + error);
        setIsLoadingRequest(false)

      }
    } else {
      toast.error("Alphabet not Allow user name only number");
      setIsLoadingRequest(false)

    }
  };

  if (IsLoadingRequest) {
    return <Loader message="Processing.." />
  }
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[#161f2f] flex justify-center items-center">
        <div className=" w-[350px] h-[400px] bg-[#efefef] rounded-[10px]  border-[2px]">
          <div className=" w-[100%] h-[50px] flex justify-center items-center  ">
            <h1 className="text-[22px] font-[700]">Reset Password</h1>
          </div>
          <form onSubmit={datasubmit} className=" w-[100%] h-[350px]   ">
            <div className=" w-[100%] h-[50px] flex justify-center items-center  mt-4">
              <input
                type="text"
                name="userid"
                value={getdata.userid}
                onChange={changedata}
                placeholder="Enter your event id : "
                required
                maxLength={10}
                className="p-[10px] border-[1px] rounded-[5px] outline-[#bb2470] w-[90%] h-[100%]"
              />
            </div>
            <div className=" w-[100%] h-[50px] flex justify-center items-center  mt-2">
              <input
                type="password"
                name="password"
                value={getdata.password}
                onChange={changedata}
                placeholder="Enter your new password : "
                required
                className="p-[10px] border-[1px] rounded-[5px] outline-[#bb2470] w-[90%] h-[100%]"
              />
            </div>
            <div className=" w-[100%] h-[20px] flex justify-end items-center mt-[20px]"></div>
            <div className=" w-[100%] h-[100px] flex justify-center items-center mt-[20px]">
              <button
                type="submit"
                className=" p-[10px] border-2 w-[150px] rounded-[25px] bg-[#2c76c1] text-[#fff] font-[700]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
