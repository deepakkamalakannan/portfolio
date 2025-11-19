// @flow strict

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Home,
  Briefcase,
  Code,
  GraduationCap,
  BookOpen,
  FolderGit2,
  LaptopMinimal
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [stars, setStars] = useState([]);

  const menuItems = [
    { name: "Home", href: "/", Icon: Home },
    { name: "About", href: "/about", Icon: LaptopMinimal },
    { name: "Experience", href: "/experience", Icon: Briefcase },
    { name: "Skills", href: "/skills", Icon: Code },
    // { name: "Education", href: "/education", Icon: GraduationCap },
    // { name: "Blogs", href: "/blog", Icon: BookOpen },
    // { name: "Projects", href: "/projects", Icon: FolderGit2 },
  ];

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-6 px-4">
      {/* Stars background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main navigation container */}
      <div className="relative">
        {/* Animated gradient border glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full opacity-75 blur-sm animate-gradient-rotate"></div>

        {/* Animated line moving around border */}
        <div className="absolute -inset-0.5 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-border-spin"></div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block relative bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-full border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
          <ul className="flex items-center px-6 py-3 space-x-2">
            {menuItems.map((item, index) => (
              <li
                key={item.name}
                className="transform transition-all duration-500"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <Link
                  className="group relative flex items-center gap-2 px-5 py-2.5 no-underline outline-none rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20"
                  href={item.href}
                >
                  {/* Icon */}
                  <item.Icon
                    size={18}
                    className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 text-white/90 group-hover:text-cyan-400"
                  />

                  {/* Text */}
                  <span className="text-sm font-semibold text-white/90 transition-all duration-300 group-hover:text-cyan-400">
                    {item.name}
                  </span>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>

                  {/* Active indicator dot */}
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-cyan-400/50"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl rounded-full border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 flex flex-col items-center justify-center focus:outline-none group"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 transform shadow-lg shadow-cyan-500/50 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 mt-1.5 shadow-lg shadow-cyan-500/50 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 transform mt-1.5 shadow-lg shadow-cyan-500/50 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed top-24 left-4 right-4 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl opacity-75 blur-sm"></div>

          <div className="relative bg-gradient-to-r from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl rounded-3xl border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 overflow-hidden">
            <ul className="py-4 px-3 space-y-2">
              {menuItems.map((item, index) => (
                <li
                  key={item.name}
                  className={`transform transition-all duration-500 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 0.08}s` : "0s",
                  }}
                >
                  <Link
                    className="group flex items-center gap-3 px-5 py-3.5 no-underline outline-none rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 border border-transparent hover:border-cyan-500/30"
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {item.icon}
                    </span>
                    <span className="text-base font-semibold text-white/90 transition-all duration-300 group-hover:text-cyan-400">
                      {item.name}
                    </span>
                    <span className="ml-auto text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes gradient-rotate {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes border-spin {
          0% {
            transform: translateX(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100%) rotate(360deg);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s ease infinite;
        }

        .animate-border-spin {
          animation: border-spin 3s linear infinite;
        }

        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
