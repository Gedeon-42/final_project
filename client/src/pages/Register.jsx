import React, { useState } from 'react'
import { FiLogIn } from "react-icons/fi";
import { MdBusiness, MdOutlineEmail } from "react-icons/md";
import { FaPhone, FaUnlockAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { usestateContext } from '../Context/ContextProvider';

function Register() {
 const [email, setEmail] = useState()
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const[phone,setPhone]=useState()
  const [errors, setErrors] = useState({ email: "", password: "", name: "" });
  const { SignupMutation, errors_login } = usestateContext()
  const [loading, setLoading] = useState(false);
 const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "", name: "" };
    if (!email) {
      valid = false;
      newErrors.email = "email is required";
    }
    if (!name) {
      valid = false;
      newErrors.name = "name is required";
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
      const payload = { email, password, name, phone };
      SignupMutation.mutate(payload);
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  return (
     <div className="bg-[url(/images/project2.jpg)] bg-no-repeat bg-cover flex  justify-center items-center ">
          <div className="bg-white p-8 my-10 flex flex-col rounded shadow-md w-120">
    
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
          <FaUser  className="absolute left-[10px]" />
          <input type="text"  onChange={(e) => setName(e.target.value)} placeholder="Company Name" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
          </div>
        <div className="relative flex items-center">
        <MdOutlineEmail  className="absolute left-[10px]" />
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
        </div>
      
        <div className="relative flex items-center">
        <FaPhone  className="absolute left-[10px]" />
        <input type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
        </div>
        <div className="relative flex items-center">
        <FaUnlockAlt   className="absolute left-[10px]"  />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="bg-gray-300 w-full pl-[30px] pt-[7px] pb-[7px] rounded-[5px] border-[1px] border-[lightgrey]" />
        </div>
        <div className="relative flex items-center">
            <Link className="absolute right-0 ">Forgot PassWord ?</Link>
        </div>
    
        <button className="bg-green-600 text-white p-[7px] rounded-[5px]">Register</button>
        <Link to="/" className="text-right">Sign In</Link>
    </form>
          </div>
        </div>
  )
}

export default Register