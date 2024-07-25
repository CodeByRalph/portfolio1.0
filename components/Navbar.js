'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function Navbar() {
  const [navbar, SetNavbar] = useState(false)

  return (
    <div>
      <nav className="hidden lg:flex lg:absolute lg:top-10 lg:right-24">
          <ul className="flex text-lavender-blush text-xl gap-10">
            <li>Home</li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button onClick={SetNavbar(!navbar)}>
          {navbar ? (<Image src={"/MenuIcon.png"} width={40} height={40} className="absolute top-10 right-10 lg:hidden"/>) : (<Image src={"/MenuIcon.png"} width={40} height={40} className="absolute top-10 right-10 lg:hidden"/>)}
        </button>
    </div>
  )
}
