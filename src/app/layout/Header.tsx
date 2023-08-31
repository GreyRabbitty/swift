import Link from "next/link"

export default function Header() {
    return (<div className=''>
        <div className='flex flex-row justify-between py-4 px-5'>
            <p className='text-[18px] font-bold'>
                <span className='text-[#023E89]'>Swift</span>
                Study
            </p>

            <ul className="flex flex-row gap-10">
                <li className=" text-[14px] text-[#023E89] cursor-pointer">
                    <Link href={'./pages/home'}>Home</Link>
                </li>
                <li className=" text-[14px] text-[#333] cursor-pointer">
                    <Link href={'#contact-form'}>Contact</Link>
                </li>
                <li className=" text-[14px] text-[#333] cursor-pointer">
                    <Link href={'./pages/startProcess'}>Start Process</Link>
                </li>
                <li className=" text-[14px] text-[#333] cursor-pointer">
                    <Link href={'./pages/account'}>Account</Link>
                </li>
            </ul>

            <div className='flex flex-row gap-5'>
                <div className="flex justify-center items-center border rounded-tr-md rounded-bl-md border-[#023E89] bg-white w-[91px] h-[36px] cursor-pointer">Sign In</div>
                <div className="flex justify-center items-center border rounded-tr-md rounded-bl-md border-[#023E89] bg-[#023E89] text-white w-[91px] h-[36px] cursor-pointer">Sign In</div>
            </div>

        </div>
    </div>
    )
    }
