"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import NavLink from './navLink';

const links =[
    {url: '/', title: "Home"},
    {url: "/about", title: "About"},
    {url: "/portfolio", title: "Portfolio"},
    {url: "/contact", title: "Contact"}
]

const SocialMedia = () => {
    return(
    <>
    <div className='flex gap-4'>
    <img src='./github.png' width={34} height={34}/>
    <img src='./linkedin.png' width={34} height={34}/>
    <img src='./dribbble.png' width={34} height={34}/>
    <img src='./facebook.png' width={34} height={34}/>
    {/* <img src='./github.png' width={34} height={34}/> */}
    </div>
    </>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div className='bg-transparent h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
     <div className='hidden md:flex gap-6 text-white font-semibold'>
        {
            links.map((link, index) =>(
               <NavLink link={link} key={index} />
            ))
        }
     </div>

        <div className=''>
            <Link href='/'>
                <img src="./aman-logo-02.png" alt="Logo" className='w-16 h-16' />
            </Link>
        </div>
    
    <div className='hidden md:flex'>
        <SocialMedia />
    </div>

{/* Responsive Menu Part */}
        <div className='md:hidden'>
            
           <button className='z-50 relative' onClick={() => setOpen((prev) => !prev)}>
           <FaBarsStaggered className='text-white text-3xl' />
           </button>

           {/* Menu list */}
           {
            open && (
            <div className='absolute top-0 left-0 w-screen h-screen bg-secondary text-white flex gap-7 flex-col items-center justify-center text-3xl'>
            {
                links.map((link, index) => (
                    <Link href={link.url} key={index}>{link.title}</Link>
                ))
            }
            <SocialMedia />
           </div>)}
        </div>
    </div>
  )
}
