import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import api from './Config/api';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
export default function LoginInput({ register }) {
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)
    ////////
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const setRegister = () => {
        if (userName && newPassword && oldPassword) {
            api.post('/api/Auth/ChangePassword', {
                username: userName,
                currentPassword: oldPassword,
                newPassword: newPassword
            }).then((res) => Swal.fire({
                title: "تغییر رمز با موفقیت انجام شد",
                icon: "success"
            })).catch((err) => console.log(err))
        }
    }
    ////////

    var router = useNavigate();

    const HanddelLogin = () => {
        if (userName && password) {
            setLoad(true);
            api.post('/api/Auth', {
                username: userName,
                password: password
            }).then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    sessionStorage.setItem('Token', response.data.token);
                    sessionStorage.setItem('Name', userName);
                    setLoad(false);
                    router('./panel')
                }
            }).catch((error) => {
                    console.log(error);
                        Swal.fire({
                            title: "نام کاربری یا رمز عبور اشتباه است ",
                            icon: "question"
                        });
                        setLoad(false);
                })
        }
        else {
            Swal.fire({
                title: "نام کاربری یا رمز عبور خود را وارد نمائید",
                icon: "info"
            });

        }
    }
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
                    <form className='flex flex-col items-center w-full my-5' onSubmit={(e) => e.preventDefault()}>
                        <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200'>
                            <span className='text-gray-400 text-2xl m-1'><IoPersonOutline /></span>
                            <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' className='border-none w-full m-1 outline-none' placeholder='نام کاربری' required />
                        </div>
                        {
                            register && (
                                <div className='w-full'>
                                    <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 my-5 '>
                                        <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                        <input value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className='border-none w-full m-1 outline-none' placeholder='رمز عبور فعلی' required />
                                        <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                                    </div>
                                    <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 mb-5 '>
                                        <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                        <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className='border-none m-1 w-full outline-none' placeholder='رمز عبور جدید' required />
                                        <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                                    </div>
                                </div>
                            )
                        }
                        {
                            !register && <div className='w-2/3 mx-auto py-3 px-5 flex items-center border rounded-3xl border-gray-200 my-5'>
                                <span className='text-gray-300 text-2xl m-1'><FaLock /></span>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} className='border-none m-1 w-full outline-none' placeholder='رمز عبور' required />
                                <span className='text-gray-500  border-blue-300 border-dashed rounded-full z-50' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}</span>
                            </div>
                        }
                        {
                            register && <button onClick={setRegister} className='rounded-3xl py-3 px-5 bg-blue-500 text-white text-2xl w-2/3 mx-auto hover:bg-blue-700 mb-3'>

                                ثبت


                            </button>
                        }
                        {
                            !register && !load && <button className='rounded-3xl py-3 px-5 bg-blue-500 text-white text-2xl w-2/3 mx-auto hover:bg-blue-700 mb-3' onClick={HanddelLogin}>
                                ورود</button>
                        }
                        {
                            load && <button type="button" className='rounded-3xl py-3 px-5 bg-blue-500 text-white text-2xl w-2/3 mx-auto hover:bg-blue-700 mb-3' disabled>
                                صبر کنید...
                            </button>
                        }
                        {
                            !register && <Link to="/Register"><span className='text-gray-500 text-lg hover:border-b-2 cursor-pointer  p-2'>تغییر پسورد</span></Link>
                        }

                    </form>
                </div>
            </div>
        </div>

    )
}
