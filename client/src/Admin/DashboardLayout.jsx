import React from 'react'
import DashNav from './DashNav'
import { Outlet } from 'react-router-dom'
import DashSidebar from './DashSidebar'

function DashboardLayout() {
  return (
    <div >
<DashNav/>
<DashSidebar/>
<div className='ml-[200px]'>
      <Outlet/>
      </div>  
    </div>
  )
}

export default DashboardLayout