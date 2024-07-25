import React from 'react'
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaDev } from "react-icons/fa";
interface FooterData {
  title: string;
  WebDeveloper: string;
  SosyalMedya: string;
  Email: string;
  gmail: string;

}
const Footer: React.FC<FooterData> = ({ title, WebDeveloper,SosyalMedya, Email, gmail }) => {
  return (
    <footer>
  <div className='border-t border-[#383838] my-12 py-8 text-gray-200'>
    <div className='flex flex-col items-center space-y-8'>
      <div className='text-center'>
        <h1 className='text-2xl mb-2'>{title}</h1>
        <span className='text-lg flex items-center justify-center'>
          <FaDev className='mr-2' />{WebDeveloper}
        </span>
      </div>
      
      <div className='text-center'>
        <h1 className='text-2xl mb-4'>{SosyalMedya}</h1>
        <span className='flex justify-center gap-4'>
          <Link href="https://www.instagram.com/krosiber/">
            <FaInstagram className='w-6 h-6 hover:text-gray-400' />
          </Link>
          <Link href="https://github.com/Krosiber">
            <FaGithub className='w-6 h-6 hover:text-gray-400' />
          </Link>
        </span>
      </div>
      
      <div className='text-center'>
        <h1 className='text-xl flex items-center justify-center mb-2'>
          <CgMail className='w-5 h-5 mr-2' />{Email}
        </h1>
        <span className='text-sm'>{gmail}</span>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer
