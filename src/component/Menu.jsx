import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiExit } from "react-icons/bi";
import Request from './Request';
import ManageRequest from './ManageRequest';
import clix from 'clsx';
import Report from './Report';


export default function Menu() {
    const [req, setReq] = useState(true);
    const [manage, setManage] = useState(false);
    const [report, setReport] = useState(false);
   
  

    console.log(req, manage);
    const logout = () => {
        sessionStorage.removeItem('Name');
        sessionStorage.removeItem('Token');
    }
    return (
        <>
            <div className='flex justify-between my-5 bg-gray-200 md:mr-0 mr-2 '>
                <div className='bg-white p-2 flex flex-row rounded-3xl'>
                    <Link onClick={logout} className='flex' to='/'><span className='font-black mr-1 sm:inline hidden'>خروج</span><span className='text-red-600 sm:text-2xl text-base'><BiExit /></span></Link>

                </div>
                <div className='flex text-center items-center'>
                    <div className={clix(`md:text-lg text-sm hover:border-b-2  duration-100 cursor-pointer md:p-0 pb-2`, report && 'border-b border-blue-600')} onClick={() => (setReq(false), setReport(true), setManage(false))}>
                        <span>پنل گزارش ها</span>
                    </div>
                    <div className={clix(`md:text-lg mx-5 text-sm  duration-100 cursor-pointer md:p-0 pb-2`, manage && 'border-b border-blue-600')} onClick={() => (setReq(false), setReport(false), setManage(true))}>
                        <span>پنل مدیریت درخواست ها</span>
                    </div>

                    <div className={clix(`md:text-lg hover:border-b-2 text-sm  duration-100 cursor-pointer md:p-0 pb-2`, req && 'border-blue-600 border-b')} onClick={() => (setReq(true), setReport(false), setManage(false))}>
                        <span>پنل درخواست ها</span>
                    </div>
                </div>
            </div >
            <div>
              
                {
                    req && <Request />
                }
                {
                    manage && <ManageRequest />
                }
                {
                    report && <Report />
                }

            </div>
        </>

    )
}
