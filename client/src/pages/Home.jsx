import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';
import crackItVideo from "../assets/videos/CrackITAI - Master Your Interview_720p.mp4";
import CompanyMarquee from '../components/CompanyMarquee';


function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate()
  return (
    <div className='min-h-screen flex flex-col' style={{ background: "var(--color-bg)" }}>
      <Navbar />

      <div className='flex-1 px-6 pb-20 pt-14'>
        <div className='max-w-6xl mx-auto'>

          <section className="relative overflow-hidden rounded-[var(--radius-2xl)] border" style={{ borderColor: "var(--color-border)" }}>
            <div className="absolute inset-0 pp-mesh pp-dot-grid opacity-90" aria-hidden="true" />
            <div className="relative px-6 py-16 sm:px-10 sm:py-20">
              <div className='flex justify-center mb-6'>
                <div
                  className='text-sm px-4 py-2 rounded-full flex items-center gap-2 pp-fade-up'
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  <HiSparkles size={16} style={{ color: "var(--color-accent-hover)" }} />
                  Dark-first AI practice interview studio
                </div>
              </div>

              <div className='text-center'>
                <h1
                  className='pp-fade-up pp-delay-1 leading-tight mx-auto'
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 4.1rem)",
                    fontWeight: 800,
                    maxWidth: 920,
                    color: "var(--color-text-primary)",
                  }}
                >
                  Practice interviews with
                  <span
                    style={{
                      display: "inline-block",
                      marginLeft: 12,
                      background:
                        "linear-gradient(90deg, rgba(var(--color-accent-rgb) / 1), rgba(var(--color-accent-rgb) / 0.55))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    prism‑clear feedback
                  </span>
                </h1>

                <p
                  className='pp-fade-up pp-delay-2 mt-6 mx-auto'
                  style={{
                    maxWidth: 720,
                    fontSize: "clamp(1rem, 1.6vw, 1.125rem)",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Role-based sessions with smart follow-ups, adaptive difficulty, voice flow, and an analytics report that actually helps you improve.
                </p>

                <div className='flex flex-wrap justify-center gap-4 mt-10 pp-fade-up pp-delay-3'>
                  <motion.button
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true)
                        return;
                      }
                      navigate("/interview")
                    }}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className='px-10 py-3 rounded-full transition pp-shimmer pp-focus-ring'
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(var(--color-accent-rgb) / 0.95), rgba(var(--color-accent-rgb) / 0.65))",
                      color: "var(--color-text-primary)",
                      boxShadow: "var(--shadow-glow)",
                    }}
                  >
                    Start interview
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      if (!userData) {
                        setShowAuth(true)
                        return;
                      }
                      navigate("/history")
                    }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className='px-10 py-3 rounded-full transition pp-focus-ring'
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    View history
                  </motion.button>
                </div>
              </div>
            </div>
          </section>

          <CompanyMarquee />

          {/* AI Video Explainer Section */}
          <div className="my-20 max-w-5xl mx-auto flex flex-col items-center">
            <div className="text-center mb-10">
               <motion.h2
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                 className='text-3xl md:text-4xl font-semibold mb-4'>
                 Meet Your <span style={{ color: "var(--color-accent-hover)" }}>AI Interviewer</span>
               </motion.h2>
               <p className="text-sm md:text-base" style={{ color: "var(--color-text-muted)" }}>
                 Watch this quick overview to see what our platform can do for you.
               </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full relative rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl p-2"
              style={{
                border: "1px solid var(--color-border)",
                background: "rgba(255,255,255,0.02)",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <video
                src={crackItVideo}
                className="w-full h-auto rounded-[var(--radius-xl)] aspect-video bg-black"
                controls
                autoPlay
                muted
                loop
              />
            </motion.div>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28 mt-10'>
            {
              [
                {
                  icon: <BsRobot size={24} />,
                  step: "STEP 1",
                  title: "Role & Experience Selection",
                  desc: "AI adjusts difficulty based on selected job role."
                },
                {
                  icon: <BsMic size={24} />,
                  step: "STEP 2",
                  title: "Smart Voice Interview",
                  desc: "Dynamic follow-up questions based on your answers."
                },
                {
                  icon: <BsClock size={24} />,
                  step: "STEP 3",
                  title: "Timer Based Simulation",
                  desc: "Real interview pressure with time tracking."
                }
              ].map((item, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 + index * 0.2 }}
                  whileHover={{ rotate: 0, scale: 1.06 }}

                  className={`
        relative rounded-3xl p-10 w-80 max-w-[90%] hover:shadow-2xl 
        transition-all duration-300
        ${index === 0 ? "rotate-[-4deg]" : ""}
        ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
        ${index === 2 ? "rotate-[-3deg]" : ""}
      `}>

                  <div
                    className='absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'
                    style={{
                      background: "rgba(20, 27, 45, 0.92)",
                      border: "1px solid rgba(var(--color-accent-rgb) / 0.6)",
                      color: "var(--color-accent-hover)",
                      boxShadow: "var(--shadow-soft)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className='pt-10 text-center'>
                    <div className='text-xs font-semibold mb-2 tracking-wider' style={{ color: "var(--color-text-muted)" }}>{item.step}</div>
                    <h3 className='font-semibold mb-3 text-lg' style={{ color: "var(--color-text-primary)" }}>{item.title}</h3>
                    <p className='text-sm leading-relaxed' style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
                  </div>


                </motion.div>
              ))
            }
          </div>


          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Advanced{" "}
              <span style={{ color: "var(--color-accent-hover)" }}>Capabilities</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {
                [
                  {
                    image: evalImg,
                    icon: <BsBarChart size={20} />,
                    title: "AI Answer Evaluation",
                    desc: "Scores communication, technical accuracy and confidence."
                  },
                  {
                    image: resumeImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Resume Based Interview",
                    desc: "Project-specific questions based on uploaded resume."
                  },
                  {
                    image: pdfImg,
                    icon: <BsFileEarmarkText size={20} />,
                    title: "Downloadable PDF Report",
                    desc: "Detailed strengths, weaknesses and improvement insights."
                  },
                  {
                    image: analyticsImg,
                    icon: <BsBarChart size={20} />,
                    title: "History & Analytics",
                    desc: "Track progress with performance graphs and topic analysis."
                  }
                ].map((item, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className='rounded-3xl p-8 hover:shadow-xl transition-all'
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-soft)",
                    }}
                    >
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                      <div className='w-full md:w-1/2 flex justify-center'>
                        <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
                      </div>

                      <div className='w-full md:w-1/2'>
                        <div
                          className='w-12 h-12 rounded-xl flex items-center justify-center mb-6'
                          style={{
                            background: "rgba(var(--color-accent-rgb) / 0.12)",
                            border: "1px solid var(--color-border)",
                            color: "var(--color-accent-hover)",
                          }}
                        >
                          {item.icon}
                        </div>
                        <h3 className='font-semibold mb-3 text-xl' style={{ color: "var(--color-text-primary)" }}>{item.title}</h3>
                        <p className='text-sm leading-relaxed' style={{ color: "var(--color-text-muted)" }}>{item.desc}</p>
                      </div>

                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

          <div className='mb-32'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-16'>
              Multiple Interview{" "}
              <span style={{ color: "var(--color-accent-hover)" }}>Modes</span>

            </motion.h2>

            <div className='grid md:grid-cols-2 gap-10'>
              {
                [
                  {
                    img: hrImg,
                    title: "HR Interview Mode",
                    desc: "Behavioral and communication based evaluation."
                  },
                  {
                    img: techImg,
                    title: "Technical Mode",
                    desc: "Deep technical questioning based on selected role."
                  },

                  {
                    img: confidenceImg,
                    title: "Confidence Detection",
                    desc: "Basic tone and voice analysis insights."
                  },
                  {
                    img: creditImg,
                    title: "Credits System",
                    desc: "Unlock premium interview sessions easily."
                  }
                ].map((mode, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="rounded-3xl p-8 hover:shadow-xl transition-all"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--color-border)",
                      boxShadow: "var(--shadow-soft)",
                    }}
                    >

                    <div className='flex items-center justify-between gap-6'>
                      <div className="w-1/2">
                        <h3 className="font-semibold text-xl mb-3" style={{ color: "var(--color-text-primary)" }}>
                          {mode.title}
                        </h3>

                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                          {mode.desc}
                        </p>
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="w-1/2 flex justify-end">
                        <img
                          src={mode.img}
                          alt={mode.title}
                          className="w-28 h-28 object-contain"
                        />
                      </div>



                    </div>


                  </motion.div>
                ))
              }
            </div>


          </div>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

        <Footer/>

    </div>
  )
}

export default Home
