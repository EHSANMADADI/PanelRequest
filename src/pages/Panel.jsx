import React, { useState,useEffect } from 'react'
import Menu from '../component/Menu'
import { PiSmileyStickerDuotone } from "react-icons/pi"
export default function Panel() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const Token = sessionStorage.getItem('Token');
    if (Token) {
      setShow(true);
    }
  }, []);
  console.log(show);
  return (
    <div>
      {
        show ? (<div className='bg-gray-200 h-full'>
          <div className='bg-gray-200 pt-8'>
            <div className='flex bg-white w-3/4 mx-auto justify-center rounded-3xl'>
              <h1 className='font-bold text-blue-950 p-5 sm:text-4xl text-2xl m-1 sm:m-3'>پنل ثبت درخواست ها</h1>
            </div>
          </div>
          <div className='xl:w-2/3 lg:w-5/6 sm:w-full mx-auto overflow-auto'>
            <Menu/>
          </div>
        </div>) : (<div className='flex h-screen justify-center items-center font-black text-8xl text-purple-700'>لاگین کن زرنگ<PiSmileyStickerDuotone/></div>)
      }
    </div>

  )
}
