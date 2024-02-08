"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavLink({link}) {
 const pathName = usePathname()
 console.log(pathName)
  return (
    
    <Link className={`${pathName === link.url && "border-b-4 border-secondary text-lg text-secondary font-sans"}`} href={link.url}>{link.title}</Link>
  )
}