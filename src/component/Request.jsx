import React from 'react'
import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { IoMdTime } from "react-icons/io";
export default function Request() {
    return (
        <div className='flex justify-between mt-5 max-h-screen'>
            <div className='bg-gray-100 p-5 w-1/3 rounded-3xl shadow-2xl'>
                <div className='border-b-2 text-center mb-5 shadow-2xl'>
                    <h1 className='text-lg font-bold mx-10 my-2 '>فرم ثبت زمان مرخصی </h1>
                </div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان شروع</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        <input type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان شروع' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ شروع</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex items-center  border-none rounded-3xl bg-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        {/* <input type='date' id='input_date_in' className='border-none w-full m-1 outline-none' placeholder='تاریخ شروع' /> */}
                       <span className='m-2'><IoMdTime/></span> 
                        <DatePicker style={{
                              display: 'block',
                              padding: '20px 0px',
                              width: '100%',
                              fontSize: '0.8rem',
                              lineHeight: '1.25rem',
                              background: 'transparent',
                              borderWidth: '0px',
                              borderBottomWidth: '0px',
                              borderColor: 'gray',
                              appearance: 'none',

                         }}
                              containerStyle={{
                                   border: 'none',
                                   width: "100%",
                                   outline: 'none',

                              }}
                              calendar={persian} locale={persian_fa} placeholder='تاریخ شروع مرخصي خود را انتخاب کنید' />
                    </div>
                    <button className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
                <div className='border my-5'></div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان پایان</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        <input type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان پایان' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ پایان</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex items-center  border-none rounded-3xl bg-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        {/* <input type='date' id='input_date_in' className='border-none w-full m-1 outline-none shadow-2xl' placeholder='تاریخ پایان' /> */}
                        <span className='m-2'><IoMdTime/></span> 
                        <DatePicker style={{
                              display: 'block',
                              padding: '20px 0px',
                              width: '100%',
                              fontSize: '0.8rem',
                              lineHeight: '1rem',
                              background: 'transparent',
                              borderWidth: '0px',
                              borderBottomWidth: '0px',
                              borderColor: 'gray',
                              appearance: 'none',

                         }}
                              containerStyle={{
                                   border: 'none',
                                   width: "100%",
                                   outline: 'none',

                              }}
                              calendar={persian} locale={persian_fa} placeholder='تاریخ پایان مرخصي خود را انتخاب کنید'  />
                    </div>
                    <button className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
            </div>
            <div className='bg-gray-100 p-5 w-1/3 rounded-3xl shadow-2xl'>
                <div className='border-b-2 text-center mb-5'>
                    <h1 className='text-lg font-bold mx-10 my-2 '>فرم ثبت زمان ورود و خروج</h1>
                </div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان ورود</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        <input type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان ورود' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ ورود</label>
                    </div>

                    <div className='w-full items-center mx-auto py-3 px-5 flex  border-none rounded-3xl bg-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        {/* <input type='date' id='input_date_in' className='border-none w-full m-1 outline-none' placeholder='تاریخ ورود' /> */}
                        <span className='m-2'><IoMdTime/></span> 
                        <DatePicker style={{
                              display: 'block',
                              padding: '20px 0px',
                              width: '100%',
                              fontSize: '0.8rem',
                              lineHeight: '1.25rem',
                              background: 'transparent',
                              borderWidth: '0px',
                              borderBottomWidth: '0px',
                              borderColor: 'gray',
                              appearance: 'none',

                         }}
                              containerStyle={{
                                   border: 'none',
                                   width: "100%",
                                   outline: 'none',

                              }}
                              calendar={persian} locale={persian_fa} placeholder='تاریخ ورود خود را انتخاب کنید' />
                    </div>
                    <button className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
                <div className='border my-5'></div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان ورود</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        <input type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان ورود' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ خروج</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex items-center  border-none rounded-3xl bg-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        {/* <input type='date' id='input_date_in' className='border-none w-full m-1 outline-none' placeholder='تاریخ خروج' /> */}
                        <span className='m-2'><IoMdTime/></span> 
                        <DatePicker style={{
                              display: 'block',
                              padding: '20px 0px',
                              width: '100%',
                              fontSize: '0.8rem',
                              lineHeight: '1.25rem',
                              background: 'transparent',
                              borderWidth: '0px',
                              borderBottomWidth: '0px',
                              borderColor: 'gray',
                              appearance: 'none',

                         }}
                              containerStyle={{
                                   border: 'none',
                                   width: "100%",
                                   outline: 'none',

                              }}
                              calendar={persian} locale={persian_fa} placeholder='تاریخ خروج خود را انتخاب کنید' />
                    </div>
                    <button className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
            </div>
            

        </div>
    )
}
