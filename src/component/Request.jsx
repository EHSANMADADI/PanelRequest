import React, { useState } from 'react'
import DatePicker from "react-multi-date-picker";
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';
import { IoMdTime } from "react-icons/io";
import api from '../component/Config/api'
import Swal from 'sweetalert2'
export default function Request() {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [timeExit, setTimeExit] = useState('');
    const [dateExit, setDateExit] = useState('');
    const Name = sessionStorage.getItem('Name')
    const SaveEntry = () => {
        const [hrs, mins] = time.split(":");
        console.log(hrs, mins);
        console.log(time,date);

        if (time !== '' && date !== '') {
            api.post('/api/Auth/Vorood', {
                username: Name,
                year: date.year,
                month: date.month.number,
                day: date.day,
                hour: hrs,
                minute: mins,
                second: 0
            }).then((res) => Swal.fire({
                title: "زمان و تاریخ ورود ثبت شد",
                icon: "success"
            })).catch((err) => console.log(err))
        }
        else {
            Swal.fire({
                title: "زمان و تاریخ ورود  را وارد نمایید",
                icon: "warning"
            })
        }

    }
    const SaveExite = () => {
        const [hrs, mins] = timeExit.split(":");
        console.log(hrs, mins);
        if (timeExit !== '' && dateExit !== '') {
            api.post('/api/Auth/khoroj', {
                username: Name,
                year: dateExit.year,
                month: dateExit.month.number,
                day: dateExit.day,
                hour: hrs,
                minute: mins,
                second: 0
            }).then((res) => Swal.fire({
                title: "زمان و تاریخ خروج ثبت شد",
                icon: "success"
            })).catch((err) => console.log(err))
        }
        else {
            Swal.fire({
                title: "زمان و تاریخ خروج  را وارد نمایید",
                icon: "warning"
            })
        }

    }

    return (
        <div className='flex xl:flex-row xl:justify-between  flex-col items-center'>
            <div className='bg-gray-100 p-5 w-2/3 mb-10 xl:w-1/3 rounded-3xl shadow-2xl'>
                <div className='border-b-2 text-center mb-5'>
                    <h1 className='text-lg font-bold mx-10 my-2 '>فرم ثبت زمان مرخصی </h1>
                </div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان شروع</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        <input type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان شروع' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ شروع</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex items-center  border-none rounded-3xl bg-white' dir='rtl'>
                        <span className='m-2'><IoMdTime /></span>
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
                        <span className='m-2'><IoMdTime /></span>
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
                            calendar={persian} locale={persian_fa} placeholder='تاریخ پایان مرخصي خود را انتخاب کنید' />
                    </div>
                    <button className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
            </div>
            <div className='bg-gray-100 p-5 w-2/3 xl:w-1/3 rounded-3xl shadow-2xl'>
                <div className='border-b-2 text-center mb-5'>
                    <h1 className='text-lg font-bold mx-10 my-2 '>فرم ثبت زمان ورود و خروج</h1>
                </div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان ورود</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                       
                        <input value={time} onChange={(e) => setTime(e.target.value)} type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان ورود' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ ورود</label>
                    </div>

                    <div className='w-full items-center mx-auto py-3 px-5 flex  border-none rounded-3xl bg-white' dir='rtl'>
                        <span className='m-2'><IoMdTime /></span>
                        <DatePicker value={date} onChange={setDate} style={{
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
                    <button onClick={SaveEntry} className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
                <div className='border my-5'></div>
                <div dir='rtl'>
                    <div className='mb-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> زمان خروج</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex   rounded-3xl border-none bg-white shadow-2xl shadow-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        <input value={timeExit} onChange={(e) => setTimeExit(e.target.value)} type='time' id='input_time_in' className='border-none w-full m-1 outline-none' placeholder='زمان خروج' />
                    </div>

                    <div className='my-3 px-4'>
                        <label form='input_time_in' className='text-blue-900 text-lg'> تاریخ خروج</label>
                    </div>

                    <div className='w-full mx-auto py-3 px-5 flex items-center  border-none rounded-3xl bg-white' dir='rtl'>
                        {/* <span className='text-gray-400 text-2xl m-1'><MdAccessTime /></span> */}
                        {/* <input type='date' id='input_date_in' className='border-none w-full m-1 outline-none' placeholder='تاریخ خروج' /> */}
                        <span className='m-2'><IoMdTime /></span>
                        <DatePicker value={dateExit} onChange={setDateExit} style={{
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
                    <button onClick={SaveExite} className='px-10 mt-4 py-2 rounded-full bg-blue-600 text-base text-white'>ثبت</button>
                </div>
            </div>


        </div>
    )
}
