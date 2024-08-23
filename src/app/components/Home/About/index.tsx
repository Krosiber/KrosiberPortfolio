"use client"
import { useState } from 'react';
import Image from 'next/image'
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiArduino } from "react-icons/si";
import { GoDotFill } from "react-icons/go";
import { TypewriterEffectSmooth } from '../../ui/typewriter-effect';
interface AboutProps {
  about: string;
  who: string;
  who2: string;
  who3: string;
  who4: string;
  img: string;
}

const About: React.FC<AboutProps> = ({ about, who, who2, who3, who4, img }) => {

  interface Data {
    about: string
    who: string
    who2: string
    who3: string
    who4: string
    img: string
  }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showmessage, setShowmessage] = useState(false)

  const handClick = () => {
    setShowmessage(!showmessage)
  }


  const words = [
    {
      text: "Merhaba",
    },
    {
      text: "Ben",
    },
    {
      text: "Halil",
    },
    {
      text: "Eymen",
    },
    {
      text: "Şahin.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];


  const Skilss = [
    {
      skills: (
        <ul>
          <li className='flex mb-1 hover:text-red-800'><SiTypescript className='mt-1' />TypeScript</li>
          <li className='flex mb-1 hover:text-yellow-300'><IoLogoJavascript className='mt-1' />JavaScript</li>
          <li className='flex mb-1 hover:text-blue-700'><FaHtml5 className='mt-1' />HTML5</li>
          <li className='flex mb-1 hover:text-green-500'><FaCss3Alt className='mt-1' />CSS3</li>
          <li className='flex mb-1 hover:text-orange-700'><FaReact className='mt-1' />React</li>
          <li className='flex mb-1 hover:text-purple-700'><RiNextjsFill className='mt-1' />Nextjs</li>
          <li className='flex mb-1 hover:text-pink-700'><RiTailwindCssFill className='mt-1' />Tailwindcss</li>
          <li className='flex mb-1 hover:text-sky-500'><SiArduino className='mt-1' />Arduino</li>
        </ul>

      )
    }
  ]
  return (
    <div>

      <div className="flex flex-col overflow-hidden" id='hakkimda'>
        <TypewriterEffectSmooth words={words} className='flex justify-center' />

        <div className='flex justify-center mb-[15rem] '>
          <section>
            <div className='mt-36  flex flex-wrap justify-center '>
              <Image src={img} alt='' width={500} height={500} />
              <div className='ml-36 text-gray-200 max-sm:mr-20'>
                <h1 className='text-5xl font-serif'>{about}</h1>
                <br />
                <p className='text-2xl font-mono'>
                  {who} <br />
                  {who2} <br />
                  {who3}<br />
                  {who4}
                </p>
                <br />
                <div>
                  <h1 className='font-semibold text-3xl hover:text-gray-400 '><button onClick={handClick} className='flex'> <GoDotFill className='mt-1' /> Coding Skills</button></h1>
                  <p className='pl-8'>
                    {showmessage && <p>{Skilss[0].skills}</p>}
                  </p>

                </div>

              </div>

            </div>
          </section>

        </div>



      </div>
    </div>
  )
}

export default About
