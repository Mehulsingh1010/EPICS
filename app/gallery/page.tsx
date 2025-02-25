"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const images = [
  {
    src: "/img/1.webp",
    alt: "Prosthetic hand sketch design",
    caption: "Initial design sketches for our prosthetic hand",
  },
  {
    src: "/img/g6.webp",
    alt: "Circuit board assembly",
    caption: "EMG signal processing circuit implementation",
  },
  {
    src: "/img/g3.webp",
    alt: "Wiring and connections",
    caption: "Internal wiring and sensor connections",
  },
  {
    src: "/img/g7.webp",
    alt: "Servo motor setup",
    caption: "Servo motor configuration for finger movement",
  },
  {
    src: "/img/2.png",
    alt: "Prototype assembly",
    caption: "Final prototype assembly and testing",
  },
  {
    src: "/img/g1.webp",
    alt: "Technical documentation",
    caption: "Technical documentation and schematics",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Image Gallery</h1>
        <p className="text-gray-400 text-lg mb-12">
          A showcase of our innovative prosthetic designs and the lives they&apos;ve touched.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-black/40 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

