import React from 'react'

export default function Report() {
    return (
        <div className='flex mt-10' dir='rtl'>
            <div className='w-1/3'>
                <h3 className='text-2xl'>لیست کارمندان:</h3>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-2 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                نام ونام خانوادگی
                            </th>
                            <th scope="col" className="px-6 py-3">
                                نوع همکاری

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input type="radio" value="active" />

                            </th>
                            <td className="px-6 py-4">
                                ایلیا لسانی
                            </td>
                            <td className="px-6 py-4">
                               سرباز
                            </td>

                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input type="radio" value="active" />

                            </th>
                            <td className="px-6 py-4">
                                 مهدی رضایی
                            </td>
                            <td className="px-6 py-4">
                               سرباز
                            </td>

                        </tr>

                    </tbody>
                </table>

            </div>

        </div>
    )
}
