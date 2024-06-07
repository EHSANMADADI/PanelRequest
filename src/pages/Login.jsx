import React from 'react'
import LoginInput from '../component/LoginInput'
import Group from '../images/Group.png'
export default function Login() {

  return (
    <div className='flex sm:flex-row flex-col-reverse max-h-screen overflow-clip md:justify-center justify-between'>
      <div className='sm:w-2/3 w-full max-h-screen bg-gradient overflow-hidden relative '>
        <img className='absolute -top-1/3 right-20' src={Group} alt='img' />
        <div className='md:block hidden'><h1 className='m-32 text-8xl text-white opacity-90 gradient-opacity'>JTD</h1></div>
        <div className='flex justify-center items-center md:mt-0 mt-72'>
          <h2 className='text-white text-2xl lg:text-5xl text-center'>به سامانه مدیریت حضور <span className='font-black'>،</span> غیاب خوش آمدین</h2>
        </div>
        <img className='absolute  -bottom-1/3 -left-32 overflow-hidden ' src={Group} alt='img' />
      </div>
      <div className='sm:w-1/3 w-full  bg-white h-screen'>
        <LoginInput register={false} />
      </div>
    </div>
  )
}
