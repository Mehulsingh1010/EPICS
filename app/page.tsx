"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Brain, Heart, Lightbulb, Loader } from "lucide-react"
import Image from "next/image"
import Typewriter from 'typewriter-effect'

// Circuit and grid pattern SVG data URLs
const circuitPattern = "data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%2310b981' stroke-width='0.5'/%3E%3Cpath d='M30 10v20m0 40v20M10 30h20m40 0h20M70 10v20m0 40v20M10 70h20m40 0h20' stroke='%2310b981' stroke-width='0.5'/%3E%3Ccircle cx='30' cy='30' r='2' fill='%2310b981'/%3E%3Ccircle cx='70' cy='30' r='2' fill='%2310b981'/%3E%3Ccircle cx='30' cy='70' r='2' fill='%2310b981'/%3E%3Ccircle cx='70' cy='70' r='2' fill='%2310b981'/%3E%3C/svg%3E"
const gridPattern = "data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='none' stroke='%2310b981' stroke-width='0.2' stroke-opacity='0.2' fill-opacity='0.2'/%3E%3C/svg%3E"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [animationsReady, setAnimationsReady] = useState(false)
  
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
      // Add a small delay before starting other animations for smoother transition
      setTimeout(() => setAnimationsReady(true), 300)
    }, 2500)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Create particles with staggered animations
  const particles = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 3) + 1,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    endX: Math.random() * 100,
    endY: Math.random() * 100,
    duration: 15 + Math.random() * 10,
    delay: i * 0.3 // Staggered start
  }))
  
  // Animation variants for smoother transitions
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }
  
  return (
    <>
      <style jsx global>{`
        .bg-circuit-pattern {
          background-image: url(${circuitPattern});
          background-repeat: repeat;
        }
        
        .bg-grid-pattern {
          background-image: url(${gridPattern});
          background-repeat: repeat;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .font-mono {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }

        .text-gradient {
          background: linear-gradient(to right, #10b981, #0d9488);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          will-change: transform;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
          will-change: transform;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize for smoother animation with hardware acceleration */
        .hw-accelerate {
          transform: translateZ(0);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>
    
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 hw-accelerate"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="mb-8 hw-accelerate"
            >
              <svg width="80" height="80" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="none" strokeDasharray="251" strokeDashoffset="251">
                  <animate attributeName="stroke-dashoffset" from="251" to="0" dur="2s" fill="freeze" />
                </circle>
                <path d="M50 10 L50 50 L75 65" stroke="#10b981" strokeWidth="4" strokeLinecap="round" fill="none">
                  <animate attributeName="stroke-dasharray" from="0 100" to="100 0" dur="2s" fill="freeze" />
                </path>
              </svg>
            </motion.div>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-1 bg-emerald-500 rounded-full mb-4 hw-accelerate"
            />
            <div className="text-emerald-500 font-mono text-xl">
              <Typewriter
                options={{
                  strings: ['Initializing...', 'Loading modules...', 'Hastakriti'],
                  autoStart: true,
                  loop: false,
                  delay: 50,
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="min-h-screen bg-black">
        {/* Hero Section - Improved */}
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Animated particles in background - optimized */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-emerald-500/30 hw-accelerate"
                style={{ width: particle.size, height: particle.size }}
                initial={{ 
                  x: `${particle.startX}vw`, 
                  y: `${particle.startY}vh`,
                  opacity: 0
                }}
                animate={animationsReady ? { 
                  x: [`${particle.startX}vw`, `${particle.endX}vw`],
                  y: [`${particle.startY}vh`, `${particle.endY}vh`],
                  opacity: [0, 0.5, 0]
                } : {}}
                transition={{ 
                  duration: particle.duration, 
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                  delay: particle.delay
                }}
              />
            ))}
          </div>
          
          <div className="container mx-auto px-4 py-12 grid lg:grid-cols-2 gap-8 items-center">
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate={animationsReady ? "visible" : "hidden"}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mono relative z-10"
            >
              <div className="mb-6">
                {/* Heading with gradient effect */}
                <h1 className="text-5xl md:text-7xl font-bold leading-tight hw-accelerate">
                  <motion.span 
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    animate={animationsReady ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    Empowering Lives
                  </motion.span>
                  <br />
                  <motion.span 
                    className="text-gradient"
                    initial={{ opacity: 0 }}
                    animate={animationsReady ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    Through Innovation
                  </motion.span>
                </h1>
                {/* Animated underscore cursor with smoother blink */}
                <span className="inline-block w-3 h-8 bg-emerald-400 ml-2 align-middle cursor-blink"></span>
              </div>
              
              <motion.p 
                className="text-xl text-gray-400 mb-8 border-l-2 border-emerald-500 pl-4"
                initial={{ x: -20, opacity: 0 }}
                animate={animationsReady ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              >
                At Hastakriti, we&apos;re dedicated to restoring independence and improving quality of life through
                cutting-edge affordable prosthetic hand technology.
              </motion.p>
              
              {/* EPICS Project mention - already exists */}
              <div className="inline-block relative">
                <motion.p 
                  className="text-lg text-emerald-400  font-mono before:content-['_>'] before:mr-2 inline-block"
                  initial={{ opacity: 0 }}
                  animate={animationsReady ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Typewriter
                    options={{
                      strings: ['An EPICS Project by Team 092'],
                      autoStart: true,
                      loop: true,
                      delay: 0,
                      cursor: "<"
                    }}
                  />
                </motion.p>
                <span className="absolute -right-4 w-2 h-5 bg-emerald-400 cursor-blink"></span>
              </div>
              
              {/* CTA buttons with smoother hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={animationsReady ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeOut" }}
                className="mt-8"
              >
                <Link href="/about">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono group relative overflow-hidden mr-4 hw-accelerate">
                    <span className="relative z-10">LEARN_MORE( )</span>
                    <motion.span 
                      className="absolute inset-0 bg-emerald-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 font-mono hw-accelerate">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      CONTACT_US( )
                    </motion.span>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Improved image section with smoother floating animations */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={animationsReady ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4 relative hw-accelerate"
            >
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                animate={animationsReady ? { y: [0, -10, 0] } : {}}
                transition={{ 
                  scale: { type: "spring", stiffness: 200, damping: 15 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
                }}
                className="relative hw-accelerate"
              >
                <div className="absolute inset-0 border-2 border-emerald-500/50 rounded-lg -m-2 -rotate-2" />
                <Image
                  src="/img/1.webp"
                  alt="Prosthetic Hand Design"
                  width={400}
                  height={300}
                  priority={true}
                  className="rounded-lg shadow-lg shadow-emerald-500/10"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-emerald-400">
                  // Design_v1.0
                </div>
                
                <div className="absolute -bottom-2 -left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-emerald-400">
                  $ ./compile.sh
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, zIndex: 10 }}
                animate={animationsReady ? { y: [0, 10, 0] } : {}}
                transition={{ 
                  scale: { type: "spring", stiffness: 200, damping: 15 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5, repeatType: "reverse" }
                }}
                className="relative mt-8 hw-accelerate"
              >
                <div className="absolute inset-0 border-2 border-emerald-500/50 rounded-lg -m-2 rotate-2" />
                <Image
                  src="/img/2.png"
                  alt="Prosthetic Hand Prototype"
                  width={400}
                  height={300}
                  priority={true}
                  className="rounded-lg shadow-lg shadow-emerald-500/10"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-emerald-400">
                  // Prototype_v2.3
                </div>
                
                <div className="absolute -bottom-2 -right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-xs font-mono text-emerald-400">
                  [======={">"}___] 76%
                </div>
              </motion.div>
              
              {/* Enhanced glow effects with performance optimizations */}
              <div className="absolute -bottom-5 -left-5 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl opacity-70" />
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl opacity-70" />
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl opacity-70"
                animate={animationsReady ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
          
          {/* Circuit board pattern overlay */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5 pointer-events-none"></div>
          
          {/* Scrolling terminal text with improved performance */}
          <motion.div 
            className="absolute bottom-8 left-0 right-0 overflow-hidden h-6 bg-black/50"
            initial={{ opacity: 0 }}
            animate={animationsReady ? { opacity: 0.8 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.p 
              className="text-xs text-emerald-400 font-mono whitespace-nowrap hw-accelerate"
              animate={animationsReady ? { x: [0, "-100%"] } : {}}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              $ git commit -m "feat: optimize prosthetic hand movement algorithms" $ npm run build $ docker-compose up $ ./deploy.sh --production $ echo "Welcome to Hastakriti" $ ./monitor.sh --status=online $ ping -c 4 hastakriti.tech $ ssh user@server.hastakriti.tech
            </motion.p>
          </motion.div>
        </section>

        {/* Features Section with staggered animations */}
        <section className="py-20 bg-gradient-to-b from-black/30 to-black/50 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4 font-mono inline-block">
                <span className="text-emerald-400">function</span> <span className="text-white">ourMission</span><span className="text-emerald-400">()</span> <span className="text-gray-400">{'{'}</span>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Innovation First",
                  description: "Pushing the boundaries of what's possible in prosthetic technology through continuous research and development."
                },
                {
                  icon: Heart,
                  title: "Patient-Centered",
                  description: "Every solution is tailored to meet the unique needs and aspirations of each individual we serve."
                },
                {
                  icon: Lightbulb,
                  title: "Accessibility",
                  description: "Making cutting-edge prosthetic technology accessible and affordable for those who need it most."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="p-6 rounded-xl bg-black/40 backdrop-blur-md border border-gray-800 hover:border-emerald-500/50 transition-colors group relative overflow-hidden hw-accelerate"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>
                  <feature.icon className="w-12 h-12 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 font-mono">
                    <span className="text-emerald-400">{`0${index + 1}.`}</span> {feature.title}
                  </h3>
                  <p className="text-gray-400 font-mono leading-relaxed">
                    <span className="text-gray-500">//</span> {feature.description}
                  </p>
                  <motion.div 
                    className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-xs text-emerald-400 font-mono">-&gt; execute();</div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold mb-4 font-mono inline-block">
                <span className="text-gray-400">{'}'}</span>
              </h2>
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section with smoother animations */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="container mx-auto px-4 text-center relative z-10"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
                <Typewriter
                  options={{
                    strings: ['Join Us in Shaping the Future'],
                    autoStart: true,
                    loop: false,
                    delay: 30,
                    cursor: '|',
                  }}
                />
              </h2>
              <motion.p 
                className="text-xl text-gray-400 mb-8 font-mono border-l-2 border-emerald-500 pl-4 text-left"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Whether you&apos;re a potential patient, partner or innovator, we&apos;d love to connect with you and
                explore how we can work together to create life-changing solutions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-mono group relative overflow-hidden hw-accelerate">
                    <span className="relative z-10">GET_IN_TOUCH( )</span>
                    <motion.span 
                      className="absolute inset-0 bg-emerald-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  </Button>
                </Link>
              </motion.div>
              <div className="mt-8">
                <p className="text-emerald-400 font-mono text-sm">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    &lt;/code&gt;
                  </motion.span>
                  <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 align-middle cursor-blink"></span>
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}