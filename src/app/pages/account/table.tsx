import React from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

export default function Table() {
    return (
        <div className=''>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className='flex flex-row justify-between mb-10'>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by name, class, etc"/>
                    </div>
                    <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Action button</span>
                        Filter
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                        </div>
                    </div>
                </div>

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Homework
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Due Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Paid
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:bord /er-gray-600"/>
                                    <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                </div>
                            </td>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                William Badgett
                            </th>
                            <td className="px-6 py-4">
                                WilliamRBadgett@hotmail.com
                            </td>
                            <td className="px-6 py-4">
                                Essay
                            </td>
                            <td className="px-6 py-4">
                                500-800 Words
                            </td>
                            <td className="px-6 py-4">
                                09/21/23
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-900 mr-2"></div>
                                    Idle
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                                    True
                                </div>
                            </td>
                            <td className="flex items-center px-6 py-4 space-x-3 justify-center">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <BsThreeDotsVertical/>
                                </a>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    )
}
