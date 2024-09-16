"use client"
import React from 'react';
import { ImLocation } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { Mail, Phone } from './mail';

const Contact: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto border border-gray-500 p-6 rounded-lg shadow-md hover:shadow-2xl hover:border-gray-50">
            <div className='flex justify-center m-3'>
                <p className='text-3xl font-mono'>Contact Us</p>
            </div>
            <div className='m-3'>
                <p className='text-sm'>We&#39;d love to hear from you!</p>
                <p className='text-sm'>Please feel free to reach out to us with any questions, comments, or concerns.</p>
            </div>
            <div className='flex justify-center m-3'>
                <p className='text-xl font-mono'>PACFULLY LABELS AND PACKAGING SOLUTIONS PRIVATE LIMITED</p>
            </div>
            <div className='flex justify-center m-3'>
                <div className='w-10 flex justify-center items-center'>
                    <ImLocation />
                </div>
                <p className='text-lg flex-1'>123 Main Street, City, State, ZIP</p>
            </div>
            <div className='flex justify-center m-3'>
                <div className='w-10 flex justify-center items-center'>
                    <IoMdCall />
                </div>
                <a href='tel:+1234567890' className='text-lg flex-1'> <Phone /> </a>
            </div>
            <div className='flex justify-center m-3'>
                <div className='w-10 flex justify-center items-center'>
                    <SiGmail />
                </div>
                <p className='text-lg flex-1'>
                    <a href='mailto:info@example.com'><Mail /></a>
                </p>
            </div>
        </div>
    );
};

export default Contact;