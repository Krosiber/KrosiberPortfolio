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
      <div className='border-t border-[#383838] mb-36 my-36 py-24 text-gray-200 flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-40'>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl'>{title}</h1>
            <br />
            <span className='text-xl flex'> <FaDev className='mt-1.5 mr-2' />{WebDeveloper}</span>
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl mb-4'>{SosyalMedya}</h1>
            <span className='flex justify-center gap-2'>
              <Link href="https://www.instagram.com/krosiber/"><FaInstagram className='w-5 h-5 hover:text-gray-400' /></Link>
              <Link href="https://github.com/Krosiber"><FaGithub className='w-5 h-5 hover:text-gray-400' /></Link>
            </span>

          </div>

          <div className='text-2xl md:justify-start mt-3'>
            <h1 className='flex items-center'>
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
