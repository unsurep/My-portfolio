'use client'

import axios from 'axios';
import React, { useState } from 'react'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import portfolioData from '@/data/portfolioData';

const ContactMe = () => {
    const { header, callToAction } = portfolioData;
    const { contactLinks, availability } = header;

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [subject, setSubject]=useState('');
    const [message, setMessage]=useState('');
    const [loading, setLoading]=useState(false);

    const submitHandler= async (e)=>{
        e.preventDefault();

        if (!name || !email || !subject || !message) {
            toast.error('Error! All fields are required.');
            return;
        }
        setLoading(true);

        try {
            const res = await axios.post (`${process.env.NEXT_PUBLIC_ENDPOINT}/register`, {name, email, subject, message},
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials:false
                }

            );


            if (res.status===201) {
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                toast.success('Message sent successfully! I will reply soon.');
            }

            else {
                toast.error('Form submission failed. Try again!');
            }
            
        } 
        
        catch (error) {
            toast.error('Server error! Try again!');
        }

        finally {
            setLoading(false);
        }
    }

    const renderIcon = (type) => {
      switch (type) {
        case 'Email':
          return <FaEnvelope className='text-amber-400 text-lg animate-pulse'/>;
        case 'Phone':
          return <FaPhoneAlt className='text-amber-400 text-lg animate-pulse'/>;
        default:
          return <FaMapMarkerAlt className='text-amber-400 text-lg animate-pulse'/>;
      }
    };

  return (
    <div className='min-h-screen flex relative flex-col text-center md:text-left max-w-6xl px-6 md:px-10 justify-center mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[16px] text-gray-500 text-base md:text-2xl'>Contact</h3>

        <ToastContainer position="top-center" autoClose={4000} theme="dark"/>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full mt-24'>
            <div className='flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur shadow-lg shadow-black/30'>
                <h4 className='text-lg md:text-3xl font-semibold text-gray-100'>
                    {callToAction.message}
                </h4>
                <p className='text-sm text-gray-300/90 leading-relaxed'>
                    {callToAction.subtext}
                </p>
                <div className='flex items-center gap-2 rounded-full border border-[#F7AB0A]/40 px-4 py-2 text-xs uppercase tracking-[3px] text-[#F7AB0A] w-fit'>
                    <span className='h-2 w-2 rounded-full bg-emerald-400 animate-pulse'/>
                    {availability.status} · {availability.note}
                </div>
                <div className='space-y-3 pt-2'>
                    {contactLinks.map((link) => (
                        <a key={link.type} href={link.href} target={link.type === 'Location' ? '_blank' : undefined} rel='noreferrer' className='flex items-center gap-3 text-sm md:text-base text-gray-200 hover:text-[#F7AB0A] transition'>
                            {renderIcon(link.type)}
                            <span>{link.label}</span>
                        </a>
                    ))}
                </div>
                <div className='flex flex-wrap gap-3 pt-4'>
                    <a href={callToAction.primary.href} target='_blank' rel='noreferrer' className='rounded-full bg-[#F7AB0A] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-black transition hover:bg-[#f9ba31]'>
                        {callToAction.primary.label}
                    </a>
                    <a href={callToAction.secondary.href} className='rounded-full border border-[#F7AB0A]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#F7AB0A] transition hover:bg-[#F7AB0A]/10'>
                        {callToAction.secondary.label}
                    </a>
                </div>
            </div>

            <form onSubmit={submitHandler} className='flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur shadow-lg shadow-black/40'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='contactInput px-4 py-3 md:px-6 md:py-4' type="text" />

                    <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' className='contactInput px-4 py-3 md:px-6 md:py-4' type="email" />
                </div>

                <input value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Subject' className='contactInput px-4 py-3 md:px-6 md:py-4' type="text" />

                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message' className='contactInput px-4 py-3 md:px-6 md:py-4 min-h-[160px]'/>

                <button type='submit' className='bg-amber-400 py-3 relative rounded-full text-black font-bold uppercase tracking-[3px] flex items-center justify-center'>
                    {loading ? (<div className='loader mx-auto absolute inset-0 m-auto'></div>) : 'Submit'}
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe
