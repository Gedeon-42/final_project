import { Lock, User2 } from 'lucide-react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaAngleRight, FaLock, FaUser, FaUserAlt } from 'react-icons/fa'

function Setting() {
  return (
   <div className="flex gap-[40px] p-[20px] h-[100%] justify-between bg-white">
       <div className="admin-content1">
           <div className="settings-header">
               <FaUser  className='text-gray-700'/>
               <div className="settings-header-desc">
                   <h6>System Admin</h6>
                   <p>admin@gmail.com</p>
               </div>
               <BsThreeDotsVertical />
           </div>
           <div className="settings-login">
               <div className="last-login">
                   <h6>Last Login</h6>
                   <p>Oct 2, 2024 4:50 PM</p>
               </div>
               <div className="last-login">
                   <h6>Login IP</h6>
                   <p>Oct 2, 2024 4:50 PM</p>
               </div>
           </div>
   
           <div className="personal-information">
               <div className="personel-info-desc">
                   <div className="settings-icon">
                       <p>
                           <User2 />
                           Personal Information
                       </p>
                   </div>
                   <FaAngleRight />
               </div>
           </div>
       </div>
       <div className="admin-content2">
           <div className="admin-content2-header">
               <h1>Personal Information</h1>
               <p>basic information</p>
           </div>
           <div className="admin-content2-desc">
               <div>
                   <h6>Full Name</h6>
                   <p>Sytem Admin</p>
               </div>
               <FaAngleRight />
           </div>
   
           <div className="admin-content2-desc">
               <div>
                   
                   <h6>Phone Number</h6>
                   <p>0780749799</p>
               </div>
               <FaAngleRight />
           </div>
   
           <div className="admin-content2-desc">
               <div>
                   <h6>Email</h6>
                   <p>admin@gmail.com</p>
               </div>
               <Lock />
           </div>
       </div>
   </div>
  )
}

export default Setting