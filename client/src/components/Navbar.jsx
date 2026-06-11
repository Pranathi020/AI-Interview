import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from "motion/react"
import { BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';

function LogoMark({ className = "" }) {
    return (
        <svg
            className={className}
            width="28"
            height="28"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M32 8L52 20V44L32 56L12 44V20L32 8Z"
                fill="rgb(20 27 45)"
                stroke="rgb(99 102 241)"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <path
                d="M32 16L46 24V40L32 48L18 40V24L32 16Z"
                stroke="rgb(129 140 248)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                opacity="0.9"
            />
            <path
                d="M18 24L32 32L46 24"
                stroke="rgb(99 102 241)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.9"
            />
        </svg>
    )
}
function Navbar() {
    const {userData} = useSelector((state)=>state.user)
    const [showCreditPopup,setShowCreditPopup] = useState(false)
    const [showUserPopup,setShowUserPopup] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAuth, setShowAuth] = useState(false);

    const handleLogout = async () => {
        try {
            await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
            dispatch(setUserData(null))
            setShowCreditPopup(false)
            setShowUserPopup(false)
            navigate("/")

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='sticky top-0 z-40 flex justify-center px-4 pt-4'>
        <motion.div 
        initial={{opacity:0 , y:-40}}
        animate={{opacity:1 , y:0}}
        transition={{duration: 0.3}}
        className='w-full max-w-6xl pp-glass rounded-[24px] shadow-[var(--shadow-soft)] px-5 sm:px-6 py-3 flex justify-between items-center relative'>
            <button
                type="button"
                onClick={() => navigate("/")}
                className='flex items-center gap-3 cursor-pointer pp-focus-ring rounded-xl'
                aria-label="Go to home"
            >
                <div
                    className='grid place-items-center w-10 h-10 rounded-xl'
                    style={{
                        background: "rgba(var(--color-accent-rgb) / 0.12)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "0 0 0 1px rgba(var(--color-accent-rgb) / 0.08) inset",
                    }}
                >
                    <LogoMark />
                </div>
                <div className='hidden md:flex items-baseline gap-2'>
                    <span className='text-[15px] font-semibold' style={{ color: "var(--color-text-primary)" }}>
                        CrackIT
                    </span>
                    <span className='text-xs font-bold tracking-wide' style={{ color: "var(--color-text-muted)" }}>
                        AI
                    </span>
                </div>
            </button>

            <div className='hidden md:flex items-center gap-4'>
                <button
                    type="button"
                    onClick={() => navigate("/pricing")}
                    className='text-sm font-medium px-3 py-2 rounded-lg pp-focus-ring'
                    style={{ color: "var(--color-text-muted)" }}
                >
                    Pricing
                </button>
            </div>

            <div className='flex items-center gap-3 sm:gap-4  relative'>
                <div className='relative'>
                    <button onClick={()=>{
                        if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowCreditPopup(!showCreditPopup);
                        setShowUserPopup(false)
                    }}
                    className='flex items-center gap-2 px-4 py-2 rounded-full text-sm transition pp-focus-ring'
                    style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-primary)",
                    }}
                    aria-label="Credits"
                    >
                        <BsCoin size={18} style={{ color: "var(--color-accent-hover)" }} />
                        <span className='font-semibold'>{userData?.credits || 0}</span>
                    </button>

                    {showCreditPopup && (
                        <div
                            className='absolute right-0 mt-3 w-72 rounded-2xl p-4 z-50'
                            style={{
                                background: "rgba(20, 27, 45, 0.92)",
                                border: "1px solid var(--color-border)",
                                boxShadow: "var(--shadow-soft)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            <p className='text-sm mb-4' style={{ color: "var(--color-text-muted)" }}>
                                Need more credits to keep practicing?
                            </p>
                            <button
                                onClick={()=>navigate("/pricing")}
                                className='w-full py-2.5 rounded-xl text-sm font-semibold pp-shimmer pp-focus-ring'
                                style={{
                                    background: "linear-gradient(135deg, rgba(var(--color-accent-rgb) / 0.95), rgba(var(--color-accent-rgb) / 0.65))",
                                    color: "var(--color-text-primary)",
                                    boxShadow: "var(--shadow-glow)",
                                }}
                            >
                                Buy credits
                            </button>

                        </div>
                    )}
                </div>

                <div className='relative'>
                    <button
                    onClick={()=>{
                         if(!userData){
                            setShowAuth(true)
                            return;
                        }
                        setShowUserPopup(!showUserPopup);
                        setShowCreditPopup(false)
                    }}
                    className='w-10 h-10 rounded-full flex items-center justify-center font-semibold pp-focus-ring'
                    style={{
                        background: "rgba(var(--color-accent-rgb) / 0.14)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-primary)",
                    }}
                    aria-label="User menu"
                    >
                        {userData ? userData?.name.slice(0,1).toUpperCase() : <FaUserAstronaut size={16}/>}
                    </button>

                    {showUserPopup && (
                        <div
                            className='absolute right-0 mt-3 w-56 rounded-2xl p-3 z-50'
                            style={{
                                background: "rgba(20, 27, 45, 0.92)",
                                border: "1px solid var(--color-border)",
                                boxShadow: "var(--shadow-soft)",
                                backdropFilter: "blur(16px)",
                            }}
                        >
                            <p className='text-sm font-semibold mb-2' style={{ color: "var(--color-text-primary)" }}>
                                {userData?.name}
                            </p>

                            <button onClick={()=>navigate("/history")} className='w-full text-left text-sm py-2 rounded-lg px-2 transition pp-focus-ring' style={{ color: "var(--color-text-muted)" }}>Interview history</button>
                            <button onClick={handleLogout} className='w-full text-left text-sm py-2 flex items-center gap-2 rounded-lg px-2 transition pp-focus-ring' style={{ color: "var(--color-danger)" }}>
                                <HiOutlineLogout size={16}/>
                                Logout</button>
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => setMobileOpen((v) => !v)}
                    className="md:hidden w-10 h-10 rounded-xl grid place-items-center pp-focus-ring"
                    style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-primary)",
                    }}
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M3 6H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M3 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

            </div>

            {mobileOpen && (
                <div
                    className="absolute left-0 right-0 top-full mt-3 md:hidden rounded-2xl p-3"
                    style={{
                        background: "rgba(20, 27, 45, 0.92)",
                        border: "1px solid var(--color-border)",
                        boxShadow: "var(--shadow-soft)",
                        backdropFilter: "blur(16px)",
                    }}
                >
                    <button type="button" onClick={() => { setMobileOpen(false); navigate("/pricing"); }} className="w-full text-left text-sm px-3 py-2 rounded-xl pp-focus-ring" style={{ color: "var(--color-text-primary)" }}>
                        Pricing
                    </button>
                </div>
            )}
        </motion.div>

        {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
    </div>
  )
}

export default Navbar
