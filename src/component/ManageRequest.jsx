import React, { useEffect, useState } from 'react'
import api from './Config/api'
import Swal from 'sweetalert2'
import { ClipLoader } from 'react-spinners';
export default function ManageRequest() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    var updatedItems;
    useEffect(() => {
        console.log('loading:' + loading);
        api.get('/api/Auth/Employesmorkhasia').then((res) =>{setUsers(res.data); setLoading(false)}).catch((err) =>{ console.log(err);setLoading(false)})
    }, [])
    console.log(users);
    const acsept = (id) => {
        setLoading(true)
        api.post(`/api/Auth/ApproveLeaveRequest/${id}`).then((res) =>
            console.log(res), Swal.fire({
                title: " با موفقیت انجام شد ",
                icon: "success"
            }),
            updatedItems = users.filter(item => item.id !== id),
            setUsers(updatedItems),
            setLoading(false)
        )
            .catch((err) => console.log(err))
    }
    const reject = (id) => {
        setLoading(true)
        api.post(`/api/Auth/RejectLeaveRequest/${id}`).then((res) => console.log(res), Swal.fire({
            title: " مرخصی با موفقیت رد شد",
            icon: "success"
        }),
            updatedItems = users.filter(item => item.id !== id),
            setUsers(updatedItems),
            setLoading(false)
        )
            .catch((err) => console.log(err))
    }
    return (

        <div className='bg-gray-200 h-screen' dir='rtl'>
            {loading && <div className='flex w-full justify-center items-center mx-auto'><ClipLoader
                loading={loading}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            /></div>
            }
            {users.length !==0 &&
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">
                                    نام ونام خانوادگی
                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">
                                    تاریخ شروع مرخصی
                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">
                                    تاریخ پایان مرخصی

                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">
                                    ساعت شروع مرخصی
                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">
                                    ساعت پایان مرخصی
                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">

                                </th>
                                <th scope="col" className="lg:px-6 lg:py-3 px-3 py-2">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="lg:px-4 lg:py-3 px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {user.fullName}
                                        </th>
                                        <td className="lg:px-4 lg:py-3 px-2 py-2">
                                            {
                                                user.startDate.split('T')[0]
                                            }
                                        </td>
                                        <td className="lg:px-4 lg:py-3 px-2 py-2">

                                            {
                                                user.endDate.split('T')[0]
                                            }
                                        </td>
                                        <td className="lg:px-4 lg:py-3 px-2 py-2">
                                            {
                                                user.startDate.split('T')[1]
                                            }
                                        </td>
                                        <td className="lg:px-4 lg:py-3 px-2 py-2 text-right">
                                            {
                                                user.endDate.split('T')[1]
                                            }
                                        </td>
                                        <td className="px-1 py-1">
                                            <button onClick={() => acsept(user.id)} className='lg:px-5 py-2 px-3 text-white bg-blue-700 text-xs rounded-3xl'>تایید درخواست</button>
                                        </td>
                                        <td className="px-1 py-1">
                                            <button onClick={() => reject(user.id)} className='lg:px-5 py-2 px-3 rounded-3xl text-white bg-red-700 text-xs'>رد درخواست</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }


        </div>
    )
}
