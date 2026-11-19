"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const shot = (name) => `./images/projects/${name}.webp`;
const shots = (names) => names.map(shot);

// Projects without `previewUrl` are private/confidential client work: no link is published.
const projectsData = [
  {
    id: 1,
    title: "Delivery TrueLove",
    description:
      "Plataforma de delivery con panel de administración para gestionar negocios, promociones, horarios y calificaciones.",
    images: shots(["truelove-1", "truelove-2", "truelove-3"]),
    tag: ["All", "Web"],
    previewUrl: "https://www.deliverytruelove.com",
  },
  {
    id: 2,
    title: "7Power",
    description:
      "Tienda en línea de audio para auto: autoradios, amplificadores, subwoofers y más, con catálogo por categorías y marcas, favoritos y carrito.",
    images: shots(["7power-1"]),
    tag: ["All", "Web"],
    previewUrl: "https://7power.pe",
  },
  {
    id: 3,
    title: "RyS Total Clean",
    description:
      "Sitio corporativo de limpieza, saneamiento y mantenimiento, con catálogo de productos, blog y solicitud de cotización.",
    images: shots(["rys-1", "rys-2"]),
    phone: shot("rys-2"),
    tag: ["All", "Web"],
    previewUrl: "https://rystotalclean.com",
  },
  {
    id: 4,
    title: "Sistema de ventas para ferretería",
    description:
      "Punto de venta e inventario: dashboard de ventas, comprobantes (boletas, facturas y notas de venta), kardex, créditos y cotizaciones.",
    images: shots(["redentor-1", "redentor-2", "redentor-3"]),
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Ecotrack",
    description:
      "ERP modular para gestión de residuos sólidos: ventas, logística, tesorería, órdenes de trabajo, recursos humanos y flota.",
    images: shots(["ecotrack-1", "ecotrack-2"]),
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "ArequipaGo + CrediGo",
    description:
      "Plataforma de movilidad y financiamiento: panel administrativo (flota, conductores, cuotas, beneficios y fidelización) y app móvil para conductores.",
    images: shots([
      "arequipago-1",
      "arequipago-2",
      "arequipago-3",
      "credigo-1",
      "credigo-2",
      "credigo-3",
      "credigo-4",
    ]),
    phone: shot("credigo-2"),
    tag: ["All", "Web", "Mobile"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="relative z-30">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 ">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
              phone={project.phone}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
