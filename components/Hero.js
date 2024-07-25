'use client'

import Image from "next/image"
import Link from 'next/link'
import { useState } from 'react'

export default function Hero(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return (
        <section className="bg-navy-blue w-full h-svh flex flex-col justify-center items-center">
            <nav className="hidden lg:flex lg:absolute lg:top-10 lg:right-24">
              <ul className="flex text-lavender-blush text-xl gap-10">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#projects">Projects</Link></li>
                <li><Link href="#experience">Experience</Link></li>
                <li><Link href="#contact">Contact</Link></li>
              </ul>
            </nav>

            <Image 
              src="/MenuIcon.png"
              width={40}
              height={40}
              className="absolute top-10 right-10 lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />

            <Image 
              src="/Logo.png"
              width={50}
              height={50}
              className="absolute top-6 left-10 lg:left-64"
            />

            {isMenuOpen && (
              <div className="relative flex flex-col items-center w-full h-screen bg-navy-blue p-5 rounded-lg shadow-lg lg:hidden">
                <Image 
                    src="/Close.png"
                    width={40}
                    height={40}
                    className="absolute top-10 right-10 lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                />
                <ul className="flex flex-col w-full text-center mt-24 text-lavender-blush text-xl gap-4">
                  <li className="text-2xl"><Link href="/" scroll={true}>Home</Link></li>
                  <li className="text-2xl"><Link href="#projects" scroll={true}>Projects</Link></li>
                  <li className="text-2xl"><Link href="#experience">Experience</Link></li>
                  <li className="text-2xl"><Link href="#contact">Contact</Link></li>
                </ul>
                <div className="flex mt-24 gap-4">
                    <Link href="https://www.linkedin.com/in/ralphstout/"><Image src={'/Linkedin.png'} width={40} height={40} className="m-2"/></Link>
                    <Link href="https://github.com/CodeByRalph"><Image src={'/github.png'} width={40} height={40} className="m-2"/></Link>
                </div>
              </div>

            )}

            <div className="w-4/5 lg:w-1/2">
                <h1 className="text-lavender-blush text-xl lg:text-2xl lg:pb-2">Hello I'm,</h1>
                <h1 className="text-saffron opacity-80 text-5xl lg:text-7xl">Ralph Stout</h1>
                <h1 className="text-lavender-blush text-3xl opacity-60 lg:text-5xl lg:pt-3">a software Engineer</h1>

                <p className="text-lavender-blush pt-3 opacity-70 lg:text-xl lg:w-3/4">
                    I am currently focusing on creating amazing projects while expanding my tech stack!
                </p>
            </div>
        </section>
    )
}