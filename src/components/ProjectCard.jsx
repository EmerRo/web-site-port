"use client";
import React, { useCallback, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  LockClosedIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import ProjectGallery from "./ProjectGallery";

const ProjectCard = ({
  title,
  description,
  images,
  phone,
  coverPosition = "top",
  previewUrl,
}) => {
  const [galleryIndex, setGalleryIndex] = useState(null);
  const triggerRef = useRef(null);

  const closeGallery = useCallback(() => {
    setGalleryIndex(null);
    triggerRef.current?.focus();
  }, []);

  const shotsLabel = images.length === 1 ? "captura" : "capturas";

  return (
    <div className="z-30">
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Ver capturas de ${title}`}
        onClick={() => setGalleryIndex(0)}
        className="block aspect-[16/9] w-full rounded-t-xl relative group overflow-hidden"
        style={{
          background: `url(${images[0]})`,
          backgroundSize: "cover",
          backgroundPosition: coverPosition,
        }}
      >
        <span className="overlay pointer-events-none absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2 text-white bg-[#181818] bg-opacity-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-hover:bg-opacity-80 group-focus-visible:bg-opacity-80 transition-all duration-500">
          <PhotoIcon className="h-8 w-8" />
          <span>Ver capturas</span>
        </span>
        {phone && (
          <img
            src={phone}
            alt=""
            loading="lazy"
            className="pointer-events-none absolute bottom-0 right-3 h-[90%] w-auto rounded-t-lg border-2 border-b-0 border-[#33353F] object-cover object-top shadow-xl"
          />
        )}
        <span className="pointer-events-none absolute bottom-2 left-2 z-10 inline-flex items-center gap-1 rounded-full bg-black bg-opacity-70 px-2.5 py-1 text-xs text-white">
          <PhotoIcon className="h-4 w-4" />
          {images.length} {shotsLabel}
        </span>
      </button>
      {images.length > 1 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Ver captura ${index + 1} de ${title}`}
              onClick={() => setGalleryIndex(index)}
              className="h-10 w-14 overflow-hidden rounded-md border border-[#33353F] hover:border-white"
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
      <div className="text-white rounded-b-xl mt-3 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="mt-4 text-sm">
          {previewUrl ? (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-white hover:text-[#ADB7BE]"
            >
              Visitar sitio
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-[#ADB7BE]">
              <LockClosedIcon className="h-4 w-4" />
              Proyecto privado
            </span>
          )}
        </div>
      </div>
      <AnimatePresence>
        {galleryIndex !== null && (
          <ProjectGallery
            key="gallery"
            title={title}
            images={images}
            initialIndex={galleryIndex}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectCard;
