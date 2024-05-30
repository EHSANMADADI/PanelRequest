import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
export default function LoginInput({ register }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div dir='rtl'>
            {register && <Link to='/' className='text-3xl text-gray-400  cursor-pointer'><HiOutlineArrowNarrowRight /></Link>}
            <div className='flex  w-full mt-40'>


                <div className='flex flex-col w-full'>
                    <h2 className='text-5xl p-1 my-4  mr-10 font-semibold'>سلام دوباره !</h2>
                    {
                        register && <h5 className='mr-16 text-2xl text-gray-700'>تغییر رمز عبور</h5>
                    }
                    {!register && <h5 className='mr-16 text-3xl'>خوش آمدین</h5>}
                    <form className='flex flex-col items-center w-full my-5'>
                        <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200'>
                            <span className='text-gray-400 text-2xl m-1'><IoPersonOutline /></span>
                            <input type='text' className='border-none w-full m-1 outline-none' placeholder='نام کاربری' />
                        </div>
                        {
                            register && (
                                <div className='w-full'>
                                    <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 my-5 '>
                                        <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                        <input type={showPassword ? 'text' : 'password'} className='border-none w-full m-1 outline-none' placeholder='رمز عبور فعلی' />
                                        <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                                    </div>
                                    <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 mb-5 '>
                                        <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                        <input type={showPassword ? 'text' : 'password'} className='border-none m-1 w-full outline-none' placeholder='رمز عبور جدید' />
                                        <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                                    </div>
                                </div>
                            )
                        }
                        {
                            !register && <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 my-5'>
                                <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                <input type={showPassword ? 'text' : 'password'} className='border-none m-1 w-full outline-none' placeholder='رمز عبور' />
                                <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                            </div>
                        }

                        <button className='rounded-3xl py-3 px-5 bg-blue-500 text-white text-2xl w-2/3 mx-auto hover:bg-blue-700 mb-3'>ورود</button>
                        {
                            !register && <Link to="/Register"><span className='text-gray-500 text-lg hover:border-b-2 cursor-pointer  p-2'>تغییر پسورد</span></Link>
                        }

                    </form>
                </div>
            </div>
        </div>

    )
}
