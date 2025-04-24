import React from 'react'
import SupplierNav from './SupplierNav'
import SupplierSide from './SupplierSide'
import { Outlet } from 'react-router-dom'

function SupplierLayout() {
  return (
    <div >
      <SupplierNav/>
      <SupplierSide/>
      <div className='ml-[200px]'>
 
      <Outlet/>
      </div>
     
    </div>
  )
}

export default SupplierLayout