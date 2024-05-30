import React from 'react'
import Menu from '../component/Menu'

export default function Panel() {
  return (
    <div className='bg-gray-200 h-screen'>
      <div className='bg-gray-200 pt-8'>
        <div className='flex bg-white w-3/4 mx-auto justify-center rounded-3xl'>
          <h1 className='font-bold text-blue-950 p-5 text-4xl m-3'>پنل ثبت درخواست ها</h1>
        </div>
      </div>
      <div className='w-2/3 mx-auto'>
        <Menu />
      </div>
      




    </div>
  )
}
