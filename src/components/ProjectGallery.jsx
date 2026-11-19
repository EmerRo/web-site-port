"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const controlStyles =
  "h-12 w-12 flex items-center justify-center rounded-full border-2 border-[#ADB7BE] bg-[#181818] text-[#ADB7BE] hover:border-white hover:text-white";

const ProjectGallery = ({ title, images, initialIndex = 0, onClose }) => {
  const [index, setIndex] = useState(initialIndex);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const total = images.length;

  const showPrev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );
  const showNext = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );

  useEffect(() => {
    closeRef.current?.focus();
    const { overflow, paddingRight } = document.body.style;
    // Compensate the scrollbar gutter so the page behind doesn't shift.
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && total > 1) showPrev();
      if (event.key === "ArrowRight" && total > 1) showNext();
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll("button");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!dialogRef.current.contains(document.activeElement)) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        } else if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, showPrev, showNext, total]);

  return createPortal(
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Capturas de ${title}`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black bg-opacity-90 px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Cerrar galería"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className={`${controlStyles} absolute top-4 right-4`}
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      {total > 1 && (
        <button
          type="button"
          aria-label="Captura anterior"
          onClick={(event) => {
            event.stopPropagation();
            showPrev();
          }}
          className={`${controlStyles} absolute left-2 md:left-6 top-1/2 -translate-y-1/2`}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>
      )}

      <img
        key={images[index]}
        src={images[index]}
        alt={`${title}, captura ${index + 1} de ${total}`}
        className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain"
        onClick={(event) => event.stopPropagation()}
      />
      <p className="mt-4 text-sm text-[#ADB7BE]">
        {title} · {index + 1} / {total}
      </p>

      {total > 1 && (
        <button
          type="button"
          aria-label="Captura siguiente"
          onClick={(event) => {
            event.stopPropagation();
            showNext();
          }}
          className={`${controlStyles} absolute right-2 md:right-6 top-1/2 -translate-y-1/2`}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      )}
    </motion.div>,
    document.body
  );
};

export default ProjectGallery;
