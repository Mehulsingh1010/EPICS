"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Mission
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-gray-300"
            >
              <p className="text-lg">
                Our mission is to push the boundaries of prosthetic technology, creating innovative and accessible
                solutions that empower individuals to live life to the fullest. We strive to restore not just function,
                but confidence and independence to those we serve.
              </p>
              <p className="text-lg">
                Through cutting-edge research in EMG signal processing and advanced manufacturing techniques, we&apos;re
                developing the next generation of affordable prosthetic hands.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-emerald-400">EPICS Project Team 092</h3>
                <p>
                  As part of the EPICS program, we&apos;re committed to applying engineering principles to create
                  solutions that make a real difference in people&apos;s lives.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image src="/img/3.webp" alt="Our Mission" fill className="object-cover" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-300">
            We envision a future where advanced prosthetic technology is accessible to everyone who needs it, regardless
            of their economic status. Through innovation and dedication, we&apos;re working to make this vision a
            reality.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

