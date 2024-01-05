"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import about from '../../public/images/about-image.png'

const TAB_DATA=[
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>Django</li>
                <li>Nextjs</li>
                <li>React</li>

            </ul>
        ),
    },
    {
        title: "Education",
        id :"education",
        content: (
            <ul className='list-disc pl-2'>
                 <li>Javascript</li>
                <li>Python</li>
                <li>java</li>
                
            </ul>
        ),
    },
    {
        title:'Certifications',
        id: 'certifications',
        content:(
            <ul className='list-disc pl-2'>
               <li>Sql Server</li>
                <li>Mysql</li>
                <li>MongoDB</li>
            </ul>
        ),

    },
]
const AboutSection = () => {
    const [tab,setTab]=useState('skills')
    const [isPending,startTransition]=useTransition()

    const handleTabChange=(id) =>{
        startTransition(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white' id="about" >
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16' > 
            <Image src={about} width={400} height={400}/>
            <div className='mt-4 md:mt-0 text-lef flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 '> Acerca de mí </h2>

                <p className='text-base lg:text-lg '>
                ¡Hola, soy Rodrigo yarleque! tengo 19 años soy Un entusiasta programador que encuentra belleza en cada línea de código. Mi viaje en el desarrollo de software es un emocionante capítulo de aprendizaje constante y pasión por crear soluciones digitales innovadoras.
                     </p>
                     <div className='flex flex-row justify-start mt-8 z-30'>
                        <TabButton 
                        selecTab={()=> handleTabChange("skills")} 
                        active={tab==="skills"}
                        >
                        {" "}
                        Habilidades{" "}
                        </TabButton>
                        <TabButton 
                        selecTab={()=> handleTabChange("education")} 
                        active={tab==="education"}
                        >
                        {" "}
                        Lenguajes{" "}
                        </TabButton>
                        <TabButton 
                        selecTab={()=> handleTabChange("certifications")} 
                        active={tab==="certifications"}
                        >
                        {" "}
                        Dase de Datos{" "}
                        </TabButton>
                     </div>

                     <div className='mt-8'>{TAB_DATA.find((t) => t.id===tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection