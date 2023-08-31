import React from 'react'
import Table from './table'
import {PiStudentFill} from 'react-icons/pi'
import {PiGearBold} from 'react-icons/pi'
import Link from 'next/link'

export default function page() {
    return (
        <div className='min-h-screen bg-[#FAF8F4] w-full'>
            <div className='flex flex-row w-full'>
                <div className='flex flex-col w-[214px] bg-[#EFEFEF]'>
                    <p className='text-[18px] font-bold mx-auto py-7 mb-7'>
                        <span className='text-[#023E89]'>Swift&nbsp;</span>
                        Study
                    </p>
                    <div className='flex flex-row gap-5 ml-4 mb-6 '>
                        <PiStudentFill color='#023E89'
                            size={'38px'}/>
                        <p className='text-[18px] font-bold'>
                            <Link href={'/pages/home'}>
                                Home
                            </Link>

                        </p>
                    </div>
                    <div className='flex flex-row gap-5 ml-4 mb-6 border-r-4 border-r-[#023E89]'>
                        <PiGearBold color='#023E89'
                            size={'38px'}/>
                        <p className='text-[18px] font-bold'>

                            <Link href={'/pages/account'}>
                                Account
                            </Link>
                        </p>
                    </div>
                </div>
                <div className='w-full p-16'>
                    <p className='text-[40px] leading-[30px] font-bold mb-16'>Account Settings<span className="bg-blue-100 text-[26px] text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">33</span>
                    </p>
                    <form className='w-full'>
                        <div className='w-1/2 grid grid-cols-2 gap-5'>
                            <div className=''>
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
                                    <div className="mt-2.5">
                                        <input type="text" placeholder='Jhon' name="full-name" id="full-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className=' mt-6'>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">School Email</label>
                                    <div className="mt-2.5">
                                        <input type="text" placeholder='JohnDoe@gmail.com' name="email" id="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className=' mt-6'>
                                    <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Billing Address</label>
                                    <div className="mt-2.5">
                                        <input type="text" placeholder='123 Ez Street.' name="subject" id="subject" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className=' mt-6'>
                                    <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Personal Email</label>
                                    <div className="mt-2.5">
                                        <input type="text" placeholder='JohnDoe@notschool..' name="subject" id="subject" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div>
                                    <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Last Name</label>
                                    <div className="mt-2.5">
                                        <input type="text" placeholder='Doe' name="full-name" id="full-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className=' mt-6'>
                                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">School Passcode</label>
                                    <div className="mt-2.5">
                                        <input type="password" placeholder='Jhon' name="email" id="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>
                                <div className=' mt-6'>
                                    <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Billing Card</label>
                                    <div className="mt-2.5">
                                        <input type="password" placeholder='Jhon' name="subject" id="subject" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                </div>

                                <div className="mt-14">
                                    <button type="submit" className="block w-full rounded-md bg-[#023E89] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <>
                        <p className='text-[40px] leading-[30px] font-bold my-8'>Past Orders<span className="bg-blue-100 text-[26px] text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">33</span>
                        </p>
                        <Table/>
                    </>

                </div>

            </div>

        </div>
    )
}
