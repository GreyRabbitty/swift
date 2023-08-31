import React from 'react'
import {PiStudentFill} from 'react-icons/pi'
import {ImBooks} from 'react-icons/im'
import Image from 'next/image'

export default function Body() {
    return (
        <div className='flex flex-col gap-40 px-28'>
            <div className='container flex flex-row gap-10 pt-10'>
                <div className='flex flex-col w-6/12 gap-3'>
                    <div className='flex flex-col mb-10'>
                        <p className='text-[80px] text-[#333]'>Don’t stress</p>
                        <p className='text-[80px] text-[#333] font-bold'>Hire The best</p>
                        <p className='text-[80px] text-[#333]'>Study, Swiftly.</p>
                    </div>
                    <p className='text-[24px] text-[rgba(51, 51, 51, 0.77)] font-light leading-[30px] mb-10'>
                        Empowering students with academic support, 
                                                our company offers expertly crafted homework 
                                                solutions tailored to
                        <span className='text-[#023E89]'>enhance learning and success</span>.
                    </p>
                    <div className='grid grid-cols-2 px-4 gap-12 mb-8 '>
                        <div className="flex justify-center items-center border rounded-tr-md rounded-bl-md border-[#023E89] bg-[#023E89] text-white px-10 py-[18px] cursor-pointer">Get Started</div>
                        <div className="flex justify-center items-center border rounded-tr-md rounded-bl-md border-[#023E89] bg-white  px-10 py-[18px] cursor-pointer">Contact Us</div>
                    </div>
                    <div className='flex flex-row gap-10 '>

                        <div className='flex flex-col gap-2 w-1/2 py-5 px-10'>
                            <div className='flex flex-row items-center gap-1'>
                                <PiStudentFill size='38px'
                                    color={'#023E89'}/>
                                <p className='text-[#333] text-[16px] font-bold'>5,000+ Students</p>
                            </div>
                            <p className='text-[14px] font-normal'>trust us for academic excellence.</p>
                        </div>

                        <div className='flex flex-col gap-2 w-1/2 py-5 pl-10'>
                            <div className='flex flex-row items-center gap-1'>
                                <ImBooks size='38px'
                                    color={'#023E89'}/>
                                <p className='text-[#333] text-[16px] font-bold'>30,000+ Students</p>
                            </div>
                            <p className='text-[14px] pr-10 font-normal'>successful student projects and counting </p>
                        </div>


                    </div>

                </div>
                <div className='overflow-x-visible'>
                    <Image src="/assets/dashboard.png"
                        width={842}
                        height={745}
                        alt="Picture of the author"/>
                </div>
            </div>

            <div className='text-[80px] font-normal text-[#333] mb-12'>
                <p>Start packing,</p>
                <p>Here’s our</p>
                <p>Streamlined Process.</p>
            </div>

            <>
                <div className='mt-0 pb-20 border-b-[3px] border-b-[#D9D9D9]'>
                    <div className='flex flex-row px-10 gap-10 relative'>
                        <div className=' w-1/3 '>
                            <Image src="/assets/dash1.png"
                                width={395}
                                height={373}
                                alt="Picture of the author"/>
                        </div>
                        <div className='flex flex-col w-2/3 pt-36 pl-28 pr-36 '>
                            <p className='text-[40px] font-normal mb-6 '>first input your year</p>
                            <p className='text-[24px] text-black opacity-80 font-light leading-[30px] mb-10'>
                                Empowering students with academic support, 
                                                                                                                                                                                                                                                                                                                                                                                            our company offers expertly crafted homework 
                                                                                                                                                                                                                                                                                                                                                                                            solutions tailored to
                                <span className=' text-black opacity-70 font-bold'>&nbsp;
                                                                                                                                                                                                                                                                                                                                                                                                                                         enhance learning and success</span>.
                            </p>
                        </div>
                        <div className='absolute -top-[15%] right-[50%]'>
                            <p className='text-[331px] text-[#023E89] opacity-25'>1</p>
                        </div>
                    </div>
                </div>
                <div className=' -mt-[80px] pb-20 border-b-[3px] border-b-[#D9D9D9]'>
                    <div className='flex flex-row px-10 gap-10 relative'>
                        <div className=' w-1/3 '>
                            <Image src="/assets/dash2.png"
                                width={395}
                                height={373}
                                alt="Picture of the author"/>
                        </div>
                        <div className='flex flex-col w-2/3 pt-36 pl-28 pr-36 '>
                            <p className='text-[40px] font-normal mb-6 '>first input your year</p>
                            <p className='text-[24px] text-black opacity-80 font-light leading-[30px] mb-10'>
                                Empowering students with academic support, 
                                                                                                                                                                                                                                                                                                                                                                                            our company offers expertly crafted homework 
                                                                                                                                                                                                                                                                                                                                                                                            solutions tailored to
                                <span className=' text-black opacity-70 font-bold'>&nbsp;
                                                                                                                                                                                                                                                                                                                                                                                                                                         enhance learning and success</span>.
                            </p>
                        </div>
                        <div className='absolute -top-[15%] right-[50%]'>
                            <p className='text-[331px] text-[#023E89] opacity-25'>2</p>
                        </div>
                    </div>
                </div>
                <div className=' -mt-[80px] pb-20 border-b-[3px] border-b-[#D9D9D9]'>
                    <div className='flex flex-row px-10 gap-10 relative'>
                        <div className=' w-1/3 '>
                            <Image src="/assets/dash3.png"
                                width={395}
                                height={373}
                                alt="Picture of the author"/>
                        </div>
                        <div className='flex flex-col w-2/3 pt-36 pl-28 pr-36 '>
                            <p className='text-[40px] font-normal mb-6 '>first input your year</p>
                            <p className='text-[24px] text-black opacity-80 font-light leading-[30px] mb-10'>
                                Empowering students with academic support, 
                                                                                                                                                                                                                                                                                                                                                                                            our company offers expertly crafted homework 
                                                                                                                                                                                                                                                                                                                                                                                            solutions tailored to
                                <span className=' text-black opacity-70 font-bold'>&nbsp;
                                                                                                                                                                                                                                                                                                                                                                                                                                         enhance learning and success</span>.
                            </p>
                        </div>
                        <div className='absolute -top-[15%] right-[50%]'>
                            <p className='text-[331px] text-[#023E89] opacity-25'>3</p>
                        </div>
                    </div>
                </div>
                <div className=' -mt-[80px] pb-20 border-b-[3px] border-b-[#D9D9D9]'>
                    <div className='flex flex-row px-10 gap-10 relative'>
                        <div className=' w-1/3 '>
                            <Image src="/assets/dash4.png"
                                width={395}
                                height={373}
                                alt="Picture of the author"/>
                        </div>
                        <div className='flex flex-col w-2/3 pt-36 pl-28 pr-36 '>
                            <p className='text-[40px] font-normal mb-6 '>first input your year</p>
                            <p className='text-[24px] text-black opacity-80 font-light leading-[30px] mb-10'>
                                Empowering students with academic support, 
                                                                                                                                                                                                                                                                                                                                                                                            our company offers expertly crafted homework 
                                                                                                                                                                                                                                                                                                                                                                                            solutions tailored to
                                <span className=' text-black opacity-70 font-bold'>&nbsp;
                                                                                                                                                                                                                                                                                                                                                                                                                                         enhance learning and success</span>.
                            </p>
                        </div>
                        <div className='absolute -top-[15%] right-[50%]'>
                            <p className='text-[331px] text-[#023E89] opacity-25'>4</p>
                        </div>
                    </div>
                </div>
            </>

            <div className='flex flex-row -mt-20'>
                <div className='w-6/12'></div>
                <div className='w-6/12'>
                    <p className=' ml-8 text-block text-[80px]'>Get in
                        <span className='text-[#023E89]'>&nbsp;touch</span>
                    </p>
                </div>
            </div>

            <div className='flex flex-row gap-10 -mt-44' id='contact-form'>
                <div className='w-6/12'>
                    <Image src="/assets/dashboard.png"
                        width={501}
                        height={443}
                        alt="Picture of the author"/>
                </div>
                <div className='w-6/12 flex flex-col'>
                    <div className='flex ml-auto mr-auto'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="105" height="16" viewBox="0 0 105 16" fill="none">
                            <g clip-path="url(#clip0_16_3507)">
                                <path d="M78.7218 5.76935C69.6374 4.80208 29.4601 8.95929 21.0681 13.2811C21.0681 13.487 21.1627 13.4993 21.2779 13.487C22.243 13.3841 38.8044 10.2646 50.7971 9.20628C54.6828 8.86329 58.9245 8.60411 62.9237 8.11553C66.9228 7.62685 78.7218 5.76935 78.7218 5.76935Z" fill="#023E89"/>
                                <path d="M104.968 2.12555C104.968 2.12555 105.052 2.16673 104.947 2.37254C104.891 2.40012 104.674 2.53716 104.129 2.78412C103.332 3.27805 71.5563 2.17041 53.189 4.0601L0.255756 8.95824C-0.233688 8.99851 0.129875 8.60839 0.129875 8.60839C6.92539 6.4999 13.8929 4.26593 32.3766 2.72244C45.0486 1.28248 68.6326 -0.101414 73.4559 0.00585608C80.6521 0.00585608 95.9771 1.00699 104.968 2.12555Z" fill="#023E89"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_16_3507">
                                    <rect width="105" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                    <form className='w-3/4 mt-10'>
                        <div>
                            <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full name</label>
                            <div className="mt-2.5">
                                <input type="text" placeholder='Jhon' name="full-name" id="full-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className=' mt-6'>
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div className="mt-2.5">
                                <input type="text" placeholder='Jhon' name="email" id="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className=' mt-6'>
                            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-gray-900">Subject</label>
                            <div className="mt-2.5">
                                <input type="text" placeholder='Jhon' name="subject" id="subject" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                            <div className="mt-2.5">
                                <textarea name="message" id="message"
                                    rows={4}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-[#023E89] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send Message</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>

    )
}
