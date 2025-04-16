import React from "react";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center items-center bg-[url(/images/project2.jpg)] bg-no-repeat bg-cover h-screen">
      <div className="bg-white p-8 flex flex-col rounded shadow-md w-96">

<div className="flex flex-col items-center justify-center bg-green-600 p2 w-10 h-10 rounded m-auto text-white font-bold text-2xl mb-4"> 
    <FiLogIn className="text-white text-center text-[20px]"/>
</div>
<div className="flex flex-col gap-[10px] items-center justify-center mb-[20px]">
    <h1 className="text-gray-950 text-2xl"> Sign in With Email</h1>
    <p className="text-[gray] text-[14px] text-center">
        manage and track your minerals result in real time
    </p>

</div>
<form action="" className="flex flex-col gap-[20px]">
    <div className="relative flex items-center">
    <MdOutlineEmail  className="absolute left-[10px]" />
    <input type="text" placeholder="Email" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
    </div>
    <div className="relative flex items-center">
    <FaUnlockAlt   className="absolute left-[10px]"  />
    <input type="text" placeholder="Email" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
    </div>
    <div className="relative flex items-center">
        <Link className="absolute right-0 ">Forgot PassWord ?</Link>
    </div>

    <button className="bg-green-600 text-white p-[7px] rounded-[5px]">Login</button>
    <Link className="text-center">Create Account</Link>
</form>
      </div>
    </div>
  );
}

export default Login;
