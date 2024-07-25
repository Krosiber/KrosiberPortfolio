"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll';


interface NavbarProps {
  Anasayfa: string;
  Hakkımda: string;
  Projelerim: string;
  logo: string;
}

const Header: React.FC<NavbarProps> = ({ Anasayfa, Hakkımda, Projelerim, logo }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <header>
      <div className=' bg-opacity-70 backdrop-filter backdrop-blur-lg h-auto w-full fixed top-0 border-b border-[#383838] z-20 ' >
        <nav className='flex items-center justify-between px-4'>
          <div className='flex items-center'>
            <ScrollLink to="Anasayfa"  smooth={true} duration={500}>
              <button><Image src={logo} width={100} height={100} alt='logo' /></button>
            </ScrollLink>
          </div>
          {/* Desktop Menu */}
          <div className='hidden md:flex flex-1 justify-center text-gray-200'>
            <ul className='flex text-xl'>
              <ScrollLink to="Anasayfa"  smooth={true} duration={500}>
                <button><li className='pr-4'>{Anasayfa}</li></button>
              </ScrollLink>
              <ScrollLink to="hakkimda" smooth={true} duration={500}>
                <button><li className='pr-4'>{Hakkımda}</li></button>
              </ScrollLink>
              <ScrollLink to="projelerim" smooth={true} duration={500}>
                <button><li>{Projelerim}</li></button>
              </ScrollLink>
            </ul>
          </div>
          
          {/* Mobile Hamburger Menu */}
          <div className='md:hidden'>
            <button className='text-white' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Items */}
        {mobileMenuOpen && (
          <div className='md:hidden text-gray-200'>
            <ul className='flex flex-col items-center text-center px-4 py-2'>
              <ScrollLink to="Anasayfa" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                <button><li className='pb-2'>{Anasayfa}</li></button>
              </ScrollLink>
              <ScrollLink to="hakkimda" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                <button><li className='pb-2'>{Hakkımda}</li></button>
              </ScrollLink>
              <ScrollLink to="projelerim" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                <button><li className='pb-2'>{Projelerim}</li></button>
              </ScrollLink>
            </ul>
          </div>
        )}
      </div>
    </header>
   )
}

export default Header