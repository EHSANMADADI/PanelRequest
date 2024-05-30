import React from 'react'

export default function ManageRequest() {
    return (
        <div dir='rtl'>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                نام ونام خانوادگی
                            </th>
                            <th scope="col" className="px-6 py-3">
                                تاریخ شروع مرخصی
                            </th>
                            <th scope="col" className="px-6 py-3">
                            تاریخ پایان مرخصی

                            </th>
                            <th scope="col" className="px-6 py-3">
                                ساعت شروع مرخصی
                            </th>
                            <th scope="col" className="px-6 py-3">
                               ساعت پایان مرخصی
                            </th>
                            <th scope="col" className="px-6 py-3">
                               
                            </th>
                            <th scope="col" className="px-6 py-3">
                               
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                مهران بهبهانی دلشاد
                            </th>
                            <td className="px-6 py-4">
                               1403-11-10
                            </td>
                            <td className="px-4 py-4">
                            1403-11-15
                            </td>
                            <td className="px-6 py-4">
                              7:20
                            </td>
                            <td className="px-6 py-4 text-right">
                                10:30
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 text-white bg-blue-700 text-xs rounded-3xl'>تایید درخواست</button>
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 rounded-3xl text-white bg-red-700 text-xs'>رد درخواست</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                ایلیا لسانی
                            </th>
                            <td className="px-6 py-4">
                               1403-11-10
                            </td>
                            <td className="px-4 py-4">
                            1403-11-15
                            </td>
                            <td className="px-6 py-4">
                              7:20
                            </td>
                            <td className="px-6 py-4 text-right">
                                10:30
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 text-white bg-blue-700 text-xs rounded-3xl'>تایید درخواست</button>
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 rounded-3xl text-white bg-red-700 text-xs'>رد درخواست</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               مهدی رضایی
                            </th>
                            <td className="px-6 py-4">
                               1403-11-10
                            </td>
                            <td className="px-4 py-4">
                            1403-11-15
                            </td>
                            <td className="px-6 py-4">
                              7:20
                            </td>
                            <td className="px-6 py-4 text-right">
                                10:30
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 text-white bg-blue-700 text-xs rounded-3xl'>تایید درخواست</button>
                            </td>
                            <td className="px-1 py-1">
                              <button className='px-5 py-2 rounded-3xl text-white bg-red-700 text-xs'>رد درخواست</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
