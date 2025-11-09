import React from 'react'
import { RiArrowGoBackLine } from "react-icons/ri";
import Link from 'next/link';

const Thankyou = () => {
  return (
    <div className='bg-black h-screen text-white items-center justify-center flex flex-col '>
      <h1 className='text-2xl'>Thank you.</h1>
      <p className='flex items-center justify-center gap-3'>Click 

        <Link href={'/'}>
            <i className='underline animate-pulse decoration-amber-400 cursor-pointer'>here</i>
        </Link>

        to go back <span className='text-2xl text-amber-400 animate-bounce'><RiArrowGoBackLine /></span></p>
    </div>
  )
}

export default Thankyou
