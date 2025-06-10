import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import { usestateContext } from "../Context/ContextProvider";
import { ClipLoader } from "react-spinners";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { LoginMutation, errors_login,} = usestateContext();
  const[loading,setLoading]=useState(false)

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
        valid = false;
        newErrors.email = "email is required";
    }

    if (!password) {
        valid = false;
        newErrors.password = "password is required";
    }

    setErrors(newErrors);
    return valid;
};

const handlesubmit = (e) => {
  e.preventDefault();
  setLoading(true);
  if (validateForm()) {
      const payload = { email, password };
      LoginMutation.mutate(payload);
      setLoading(true);
  } else {
      setLoading(false);
  }
};

 
  return (
    <div className="bg-[url(/images/project2.jpg)] bg-no-repeat bg-cover flex h-screen justify-center items-center ">
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
<form onSubmit={handlesubmit} className="flex flex-col gap-[20px]">
  
    <div className="relative flex items-center">
    <MdOutlineEmail  className="absolute left-[10px]" />
    <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
    </div>
    <div className="relative flex items-center">
    <FaUnlockAlt   className="absolute left-[10px]"  />
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
    </div>

    <div className="relative flex items-center">
        <Link className="absolute right-0 ">Forgot PassWord ?</Link>
    </div>

    <button className="bg-green-600 cursor-pointer text-white p-[7px] rounded-[5px]">
        {loading ? (
            <ClipLoader size={20} color={"#ffffff"} />
          ) : (
            <>Sign In</> 
          )}
    </button>
    {/* <Link to="/register" className="text-right">Register</Link> */}
</form>
      </div>
    </div>
  );
}

export default Login;
