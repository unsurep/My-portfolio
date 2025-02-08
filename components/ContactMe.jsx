'use client'

import axios from 'axios';
import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useRouter } from 'next/navigation';


const ContactMe = () => {
    const router=useRouter();

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');
    const [error, setError]=useState(true)
    const [loading, setLoading]=useState(true)

    // form validation

    const submitHandler= async (e)=>{
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            setError ('Error! All fields are required.');

            // set Error timeout
            setTimeout(()=>{
                setError(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, 3000)
            return;
        }
        setLoading(true);
        setError('');

        // this frontend api is configured to all cors
        try {
            const res = await axios.post (`${process.env.NEXT_PUBLIC_ENDPOINT}/register`, {name, email, subject, message},
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials:false // Set to true if using authentication tokens
                }

            );


            if (res.status===201) {
                router.replace('/thankyou')
            }

            else {
                setError('Form Submission Failed. Try again!')
            }
            
        } catch (error) {
            setError ('Server error! Try again!')  
        }

        finally {
            setLoading(false);
        }
    }

        

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-center mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-lg md:text-2xl'>Contact</h3>

        {/* error display */}
        {
            error && <p className='text-red-500 text-sm absolute top-[5.5rem] blink-1'>{error}</p>
        }




        <div className='flex flex-col space-y-4  '>
            <h4 className='text-sm md:text-3xl font-semibold text-center'>
                I have just what you need.{" "}
                <span className='decoration-amber-400 underline'>Lets Talk</span>
            </h4>

            <div className='space-y-1'>
                <div className='flex items-center space-x-3 justify-center'>
                    <FaPhoneAlt className='text-amber-400 animate-pulse text-lg'/>
                    <p className='text-xs md:text-lg'>+23491-466-7394</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <FaEnvelope className='text-amber-400 text-lg animate-pulse'/>
                    <p className='text-xs md:text-lg'>wedevilleg@gmail.com</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <FaMapMarkerAlt className='text-amber-400 text-lg animate-pulse'/>
                    <p className='text-xs md:text-lg'>Rivers State, Nigeria</p>
                </div>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col space-y-3 w-fit mx-auto '>
                <div className='md:flex md:space-x-3  space-y-2'>
                    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='contactInput px-6 py-1 md:px-6 md:py-4' type="text" />

                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='contactInput px-6 py-1 ' type="email" />
                </div>

                <input onChange={(e)=>setSubject(e.target.value)} placeholder='Subject' className='contactInput mx-[1rem] px-6 py-1' type="text" />

                <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='Message' className='contactInput mx-[1rem] px-6 py-2'/>

                <button type='submit' className='bg-amber-400 py-3 relative rounded-md  text-black font-bold items-center justify-center'>{loading ? (<div className='loader mx-auto absolute top-0 left-0'></div>) : 'Submit'}</button>
            </form>


        </div>
    </div>
  )
}

export default ContactMe
