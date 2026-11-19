"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import hero from '../../public/images/hero-image.png'
import WhatsAppIcon, { WHATSAPP_URL } from './WhatsAppIcon'


const HeroSection = () => {
 
  return (
  <section className='lg:py-16 '>
    <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className='col-span-8 place-self-center text-center sm:text-left justify-self-start z-30'>
      <h1 className='text-teal-300 mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold '>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
       Emer Rodrigo {""}
        </span>
        <br></br>
        <TypeAnimation 
      sequence={[
        //  La misma subcadena al inicio solo se escribirá una vez, inicialmente 
        'Full Stack',
        1000, //espera 1 segundo antes de reemplazar "Ratones" con "Hámsters"
        'Junior',
        1000,
        'Front-end',
        1000,
        'Back-end',
        1000,
        'Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />


      </h1>
      <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ' >
      Desarrollador full stack junior apasionado por crear productos digitales que resuelven necesidades reales. Explora mis proyectos y descubre mi potencial.
      </p> 
      <div className='flex flex-col sm:flex-row gap-3'>

        <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br bg-cyan-500 shadow-lg shadow-cyan-500/50 ... hover:bg-slate-200 text-black font-bold ' onClick={()=>{
          open("https://drive.google.com/file/d/1ZUC6l8oImtKIVF_qEix8ZSXEbslIc9tc/view?usp=sharing")
        
        }}>Mirar CV</button>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/50 hover:bg-slate-200 text-black font-bold'
        >
          <WhatsAppIcon className='h-6 w-6' />
          WhatsApp
        </a>

       
      </div>
      </div>
      <div className='col-span-4 place-self-center mt-4 lg:mt-0' >
         <div className="rounded-full bg-[#111827] w-[350px] h-[350px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src={hero}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              priority
            />
          </div>
         </div>
      </div>
  </section>
  
  )
}

export default HeroSection