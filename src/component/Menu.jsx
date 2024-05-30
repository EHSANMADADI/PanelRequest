import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiExit } from "react-icons/bi";
import Request from './Request';
import ManageRequest from './ManageRequest';
import clsx from 'clsx';
import Report from './Report';
export default function Menu() {
    const [req, setReq] = useState(true);
    const [manage, setManage] = useState(false);
    const [report, setReport] = useState(false);
    console.log(req, manage);

    return (
        <>
            <div className='flex justify-between my-5'>
                <div className='bg-white p-2 flex flex-row rounded-3xl'>
                    <Link className='flex' to='/'><span className='font-black mr-1'>خروج</span><span className='text-red-600 text-2xl'><BiExit /></span></Link>

                </div>
                <div className='flex'>
                    <div className={clsx(`text-lg hover:border-b-2 border-gray-950 duration-100 cursor-pointer`,  report &&'border-b border-blue-600')} onClick={() => (setReq(false), setReport(true), setManage(false))}>
                        <span>پنل گزارش ها</span>
                    </div>
                    <div  className={clsx(`text-lg hover:border-b-2 mx-5 border-gray-950 duration-100 cursor-pointer`,  manage &&'border-b border-blue-600')} onClick={() => (setReq(false), setReport(false), setManage(true))}>
                        <span>پنل مدیریت درخواست ها</span>
                    </div>

                    <div  className={clsx(`text-lg hover:border-b-2 border-gray-950 duration-100 cursor-pointer`,  req &&'border-blue-600 border-b')} onClick={() => (setReq(true), setReport(false), setManage(false))}>
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
                    report&&<Report/>
                }

            </div>
        </>

    )
}
