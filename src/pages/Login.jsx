import React from 'react'
import LoginInput from '../component/LoginInput'
import Group from '../images/Group.png'
export default function Login() {
  return (
    <div className='flex overflow-hidden '>

      <div className='w-2/3 h-screen bg-gradient '>
        <img className='absolute -top-1/3 right-1/2 overflow-hidden h-auto ' src={Group} />
        <div><h1 className='m-32 text-8xl text-white opacity-90 gradient-opacity'>JTD</h1></div>
        <div className='flex justify-center'>
          <h2 className='text-white text-5xl'>به سامانه مدیریت حضور <span className='font-black'>،</span> غیاب خوش آمدین</h2>
        </div>
        <img className='absolute  -bottom-1/3 -left-32 ' src={Group} />
      </div>
      <div className='w-1/3 bg-white h-screen'>
        <LoginInput register={false} />
      </div>

    </div>
  )
}
