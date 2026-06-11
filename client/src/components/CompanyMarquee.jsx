import React from 'react';
import { 
  SiTesla, 
  SiNetflix, 
} from "react-icons/si";
import { 
  FaApple, 
  FaMicrosoft, 
  FaAmazon, 
  FaGoogle, 
  FaFacebook 
} from "react-icons/fa";

function CompanyMarquee() {
  const companies = [
    { name: "Tesla", icon: <SiTesla size={32} /> },
    { name: "Apple", icon: <FaApple size={36} /> },
    { name: "Netflix", icon: <SiNetflix size={32} /> },
    { name: "Google", icon: <FaGoogle size={32} /> },
    { name: "Amazon", icon: <FaAmazon size={36} /> },
    { name: "Microsoft", icon: <FaMicrosoft size={32} /> },
    { name: "Meta", icon: <FaFacebook size={36} /> },
  ];

  // We duplicate the list to create a seamless infinite scroll loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="py-12 mt-4 md:mt-10 overflow-hidden relative">
      <div className="text-center mb-8">
        <p className="text-sm md:text-[15px] font-semibold tracking-[0.2em] uppercase text-gray-500" style={{ color: "var(--color-text-muted)" }}>
          Used by candidates at
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        {/*
          Fading soft edges for the scroll effect.
          Uses absolute gradients on the sides to blend with the background.
        */}
        <div className="absolute left-0 top-0 w-24 h-full z-10 pointers-events-none" 
             style={{ background: "linear-gradient(to right, var(--color-bg), transparent)" }}></div>
        <div className="absolute right-0 top-0 w-24 h-full z-10 pointers-events-none" 
             style={{ background: "linear-gradient(to left, var(--color-bg), transparent)" }}></div>

        <div className="flex space-x-12 md:space-x-24 animate-marquee group-hover:[animation-play-state:paused] items-center">
          {duplicatedCompanies.map((company, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
              style={{ color: "var(--color-text-primary)" }}
            >
              {company.icon}
              <span className="font-semibold text-lg tracking-wide hidden sm:block">
                {company.name}
              </span>
            </div>
          ))}
          {/* Ensure seamless loop by adding one more set if viewport is ultra-wide */}
          {companies.map((company, index) => (
            <div 
              key={`extra-${index}`} 
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-300"
              style={{ color: "var(--color-text-primary)" }}
            >
              {company.icon}
              <span className="font-semibold text-lg tracking-wide hidden sm:block">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyMarquee;
