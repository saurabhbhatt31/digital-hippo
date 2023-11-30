'use client'
import { toast, useToast } from "@/components/ui/use-toast"

import { Pointer, SendHorizontal } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import FooterIcons from "./ui/FooterIcons"

const Footer = () => {

    const [emailvalue, setEmail] = useState('');
    const headingclass = 'font-sans text-[24px] font-bold leading-6 tracking-tighter';
    const handleArrowClick = () => {
        setEmail('');
    }

    return (
        <>
            <div className="w-full h-fit md:px-64 flex justify-center sm:flex-col sm:items-center md:bg-[#000] py-20 text-white bg-slate-700">
                <div className='md:w-fit px-8 h-fit flex md:flex-row gap-[87px] sm:flex flex-col'>
                    <div className="flex">
                        <ul className='flex flex-col gap-6'>
                            <li className={headingclass} >Exclusive</li>
                            <li className='font-sans text-[20px] font-medium leading-6 tracking-tighter'>Subscribe</li>
                            <li>Get 10% off your first order</li>
                            <li>
                                <div className='flex justify-between items-center p-4 w-[230px] h-16 border border-white rounded-md  '>
                                    <input className="w-full font-normal bg-transparent border-none text-white"
                                        type="text"
                                        placeholder='Enter your email..'
                                        name='email'
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        value={emailvalue}
                                    />
                                    <SendHorizontal onClick={handleArrowClick} className={emailvalue ? 'cursor-pointer' : 'cursor-not-allowed'} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* second tab */}
                    <div className="flex">
                        <ul className='flex flex-col gap-6'>
                            <li className={headingclass}>Suppport </li>
                            <li>
                                <p>10, IInd Floor,
                                    <br />
                                    DDA Building No-5
                                    <br />
                                    District Center Janakpuri
                                    <br />
                                </p>
                            </li>
                            <li className="tracking-wider">hippo.store@gmail.com</li>
                            <li className="tracking-wider">+91-4275553211</li>
                        </ul>
                    </div>
                    {/* third tab */}
                    <div className="flex">
                        <ul className='flex flex-col gap-6'>
                            <li className={headingclass} >Account </li>
                            <li>
                                My Account
                            </li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                        </ul>
                    </div>
                    {/* {fourth tab} */}
                    <div className="flex">
                        <ul className='flex flex-col gap-6'>
                            <li className={headingclass} >Quick Link </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    {/* fifth tab */}
                    <div>
                        <ul className='flex flex-col gap-6'>
                            <li className={headingclass} >Download App </li>
                            <li>
                                <p className="text-xs font-medium text-[#FAFAFA] opacity-70">Save $3 with App New User Only</p>
                            </li>
                            <div className="flex gap-3">
                                <img src='/nav/icons/Qrcode 1.png' alt="" />
                                <div>
                                    <img src='/nav/icons/GogglePlay.png' alt="" />
                                    <img src='/nav/icons/AppStore.png' alt="" className="mt-3" />
                                </div>
                            </div>
                            <FooterIcons/>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer