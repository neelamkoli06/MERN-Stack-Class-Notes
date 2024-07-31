import React from 'react'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
       <h1 className='text-center my-4'>Admin Panel</h1>
       <Outlet/>
    </div>
  )
}

export default Admin
