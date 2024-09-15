"use client"
import React from 'react';
// import { ImLocation } from "react-icons/im";

const Contact: React.FC = () => {
    return (
        <div className='h-80 flex-1'>
            <div className='flex justify-center m-3'>
                <p className='text-3xl font-mono'>Contact Us</p>
            </div>
            <div className='m-3'>
                <p className='text-sm'>We'd love to hear from you!</p>
                <p className='text-sm'>Please feel free to reach out to us with any questions, comments, or concerns.</p>
            </div>
            <div className='flex justify-center m-3'>
                <p className='text-xl font-mono'>PACFULLY LABELS AND PACKAGING SOLUTIONS PRIVATE LIMITED</p>
            </div>
            <div className='flex justify-center m-3'>
                {/* <ImLocation /> */}
                <p className='text-xl font-mono'>123 Main Street, City, State, ZIP</p>
            </div>
            <div className='flex justify-center m-3'>
                <p className='text-xl font-mono'>(123) 456-7890</p>
            </div>
            <div className='flex justify-center m-3'>
                <p className='text-xl font-mono'>
                    <a href='mailto:info@example.com'>info@example.com</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;