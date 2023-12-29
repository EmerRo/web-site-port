"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import {Toaster , toast} from 'sonner'

const EmailSection = () => {
  const ref = useRef()
  const formRef = useRef()
  const [error,setError]= useState(false)
  const [success,setSuccess]= useState(false)
 
  
  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f59c9dl', 'template_6zl065p', formRef.current, 'lqv22h9KQXYE6IyOz')
        .then((result) => {
          setSuccess(true)
      }, (error) => {
          setError(true)
      
        });
    };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative z-30"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
        Conectemos
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar,
           ¡Hago todo lo posible para comunicarme contigo!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/EmerRo">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/rodrigo-yarleque-2077b8295/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" ref={formRef}
                onSubmit={sendEmail}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
                Correo
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="email.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="nombre"
              className="text-white block text-sm mb-2 font-medium"
            >
              Nombre
            </label>
            <input
              name="name"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="tu nombre"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Escribe un mensaje"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-[#d97706] text-white font-medium py-2.5 px-5 rounded-lg w-full"
            onClick={()=>{
              
              toast.success("Email enviado con exito!")
        
            
            }}
          >
            Enviar Mensaje
            <Toaster
          theme="dark"
          duration={2000}
          richColors
            
          />
          </button >
       
                   
          
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
