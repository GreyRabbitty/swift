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
                    <div className='flex flex-row gap-5 ml-4 mb-6 border-r-4 border-r-[#023E89]'>
                        <PiStudentFill color='#023E89'
                            size={'38px'}/>
                        <p className='text-[18px] font-bold'>
                            <Link href={'/pages/home'}>
                                Home
                            </Link>

                        </p>
                    </div>
                    <div className='flex flex-row gap-5 ml-4 mb-6'>
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
                    <p className='text-[40px] leading-[30px] font-bold mb-16'>Assignments<span className="bg-blue-100 text-[26px] text-blue-800 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">33</span>
                    </p>
                    <Table/>
                </div>

            </div>

        </div>
    )
}
