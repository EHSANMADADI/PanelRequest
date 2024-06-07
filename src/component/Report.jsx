import React from 'react'

export default function Report() {
    return (
        <div className='flex sm:flex-row flex-col sm:mr-0 mr-3 justify-between mt-10 bg-gray-200 h-screen' dir='rtl'>
            <div className='sm:w-1/3 w-full rounded-md'>
                <h3 className='text-2xl'>لیست کارمندان:</h3>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-10 font-bold">
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
                                <input className='big-radio' type="radio" value="active" name='radio_group' />

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
                                <input className='big-radio' type="radio" value="active" name='radio_group' />

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

            <div className='sm:w-3/5 w-full '>
            <h3 className='text-2xl sm:m-0 mt-5'>نام کارمند:</h3>
                <div className="flex flex-col w-full bg-white rounded-lg sm:mt-10 mt-4 font-bold">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="border rounded-lg shadow overflow-hidden dark:border-neutral-700 dark:shadow-gray-900">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">تعداد مرخصی های استفاده شده در یک ماه</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">45</td>
                                           
                                            
                                        </tr>

                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200"> تعداد مرخصی های استفاده شده در یک سال</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">27</td>
                                         
                                            
                                        </tr>

                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">میزان مرخصی ساعتی در یک سال </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">میزان مرخصی ساعتی در یک ماه </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">میزان ساعت کاری در یک سال </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">میزان ساعت کاری در یک ماه </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                                            
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-800 dark:text-neutral-200">تعداد کل مرخصی های باقی مانده در یک سال</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">31</td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
