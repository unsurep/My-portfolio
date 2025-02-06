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
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(false)

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
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

        {/* error display */}
        {
            error && <p className='text-red-800 text-2xl absolute top-[21rem] blink-1'>{error}</p>
        }




        <div className='flex flex-col space-y-4 pt-[11rem]'>
            <h4 className='text-base md:text-3xl font-semibold text-center'>
                I have just what you need.{" "}
                <span className='decoration-amber-400 underline'>Lets Talk</span>
            </h4>

            <div className='space-y-1'>
                <div className='flex items-center space-x-3 justify-center'>
                    <FaPhoneAlt className='text-amber-400 animate-pulse text-2xl'/>
                    <p className='text-sm md:text-lg'>+23491-466-7394</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <FaEnvelope className='text-amber-400 text-2xl animate-pulse'/>
                    <p className='text-sm md:text-lg'>wedevilleg@gmail.com</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                    <FaMapMarkerAlt className='text-amber-400 text-2xl animate-pulse'/>
                    <p className='text-sm md:text-lg'>Rivers State, Nigeria</p>
                </div>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col space-y-5 w-fit mx-auto '>
                <div className='md:flex md:space-x-3  space-y-0'>
                    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='contactInput px-6 py-2 md:px-6 md:py-4' type="text" />

                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='contactInput px-6 py-2 ' type="email" />
                </div>

                <input onChange={(e)=>setSubject(e.target.value)} placeholder='Subject' className='contactInput mx-[1rem] px-6 py-2' type="text" />

                <textarea onChange={(e)=>setMessage(e.target.value)} placeholder='Message' className='contactInput mx-[1rem] px-6 py-3'/>

                <button type='submit' className='bg-amber-400 py-5 rounded-md text-black font-bold'>{loading ? 'Loading...' : 'Submit'}</button>
            </form>


        </div>
    </div>
  )
}

export default ContactMe
