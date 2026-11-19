"use client"
import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import about from '../../public/images/about-image.png'

// Content comes from the CV (public/pdf/CV Rodrigo Yarleque.pdf).
const TAB_DATA=[
    {
        id: "skills",
        label: "Habilidades",
        groups: [
            {
                items: [
                    "Desarrollo Frontend con frameworks de JavaScript",
                    "Desarrollo Backend con JavaScript",
                    "Diseño, consumo e implementación de APIs",
                    "Diseño y gestión de bases de datos",
                    "Control de versiones con Git y GitHub",
                    "Experiencia en desarrollo de servicios SaaS",
                ],
            },
            {
                title: "Perfil",
                items: [
                    "Conocimiento en metodologías ágiles",
                    "Buena resolución de problemas y habilidades analíticas",
                    "Investigador de nuevas tecnologías de desarrollo",
                    "Nivel de inglés intermedio",
                    "Persona autodidacta",
                ],
            },
        ],
    },
    {
        id: "technologies",
        label: "Tecnologías",
        groups: [
            {
                items: [
                    "JavaScript",
                    "React",
                    "Next.js",
                    "Astro",
                    "Tailwind CSS",
                    "Docker",
                    "Firebase",
                ],
            },
        ],
    },
    {
        id: "databases",
        label: "Bases de datos",
        groups: [
            {
                items: ["MySQL", "MongoDB", "PostgreSQL"],
            },
        ],
    },
    {
        id: "education",
        label: "Educación",
        groups: [
            {
                items: [
                    "Técnico en computación e informática, Instituto Superior Hermanos Cárcamo",
                    "Cisco Networking Academy: Python",
                    "Cursos en Platzi, freeCodeCamp y Oracle Academy",
                ],
            },
        ],
    },
]

const TabContent = ({groups}) =>
    groups.map((group,index) => (
        <div key={index} className={index > 0 ? 'mt-4' : ''}>
            {group.title && (
                <h3 className='font-semibold text-white mb-2'>{group.title}</h3>
            )}
            <ul className='list-disc pl-5'>
                {group.items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    ))

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
            <Image src={about} alt="Ilustración de una laptop sobre un escritorio" width={400} height={400}/>
            <div className='mt-4 md:mt-0 text-lef flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4 '> Acerca de mí </h2>

                <p className='text-base lg:text-lg '>
                ¡Hola, soy Emer Rodrigo Yarleque! Desarrollador full stack junior con amplios conocimientos en el desarrollo de aplicaciones web y móviles. Cuento con sólidos conocimientos en JavaScript, React, gestión de bases de datos y control de versiones. Me apasiona implementar buenas prácticas de programación y crear productos digitales de alto valor que resuelvan necesidades reales de los usuarios.
                     </p>
                     <div className='flex flex-row flex-wrap gap-y-2 justify-start mt-8 z-30'>
                        {TAB_DATA.map((item) => (
                            <TabButton
                            key={item.id}
                            selecTab={()=> handleTabChange(item.id)}
                            active={tab===item.id}
                            >
                            {item.label}
                            </TabButton>
                        ))}
                     </div>

                     <div className='mt-8'>
                        <TabContent groups={TAB_DATA.find((t) => t.id===tab).groups} />
                     </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
