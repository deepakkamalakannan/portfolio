// @flow strict

"use client";

import { useState } from "react";
import Image from "next/image";
import { User, Code, Zap, Target } from "lucide-react";
import { personalData } from "@/utils/data/personal-data";

function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  const highlights = [
    { icon: Code, text: "2+ Years Experience" },
    { icon: Zap, text: "Performance Optimization" },
    { icon: Target, text: "Code Refactoring" },
  ];

  return (
    <div id="about" className="my-16 lg:my-24 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Section Header */}
      <div className="flex items-center justify-center mb-16">
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-pink-500"></div>
          <div className="flex items-center gap-3">
            <User className="text-pink-500" size={28} />
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">
                Me
              </span>
            </h2>
          </div>
          <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-violet-600"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-20 items-start">
        {/* Image Side */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
          <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Animated border gradient */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-75 group-hover:opacity-100 blur group-hover:blur-xl transition-all duration-500 animate-gradient-rotate"></div>

            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-pink-500 rounded-tl-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-cyan-500 rounded-br-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Image container */}
            <div className="relative w-72 h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0d1224] to-[#1a1443]">
              <Image
                src={personalData.profile}
                width={400}
                height={400}
                alt="Profile"
                className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1224]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Floating badge */}
              <div
                className={`absolute bottom-6 left-6 right-6 bg-[#0d1224]/90 backdrop-blur-sm border border-[#16f2b3]/30 rounded-xl p-4 transition-all duration-500 ${
                  isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
              >
                <p className="text-white font-semibold text-sm">
                  Available for freelance
                </p>
                <p className="text-[#16f2b3] text-xs mt-1">
                  Let's build something amazing!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="order-1 lg:order-2 space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <p className="text-[#16f2b3] text-lg font-semibold tracking-wide">
              WHO I AM?
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#16f2b3] to-pink-500 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
            I am a <strong>Full Stack Developer</strong> with{" "}
            <strong>2 years of experience</strong> in building web applications.
            I am worked at <strong>AICARE GLOBAL PVT LTD</strong>,
            where I have been involved in developing web applications using{" "}
            <strong>React.js</strong>, <strong>Flask API</strong>, and{" "}
            <strong>MongoDB</strong>.
            <br />
            <br />
            My primary expertise lies in <strong>
              Frontend Development
            </strong>{" "}
            with React.js and JavaScript, where I focus on building responsive
            and user-friendly interfaces. On the backend, I have experience
            creating <strong>REST APIs</strong> using Flask, with MongoDB as the
            database.
            {/* <br />
            <br />I also have hands-on experience in{" "}
            <strong>deploying applications on AWS EC2</strong>. */}
            <br />
            <br />I am passionate about writing{" "}
            <strong>clean, maintainable code</strong> and optimizing application
            performance. I constantly strive to learn new technologies and
            enhance my problem-solving skills.
          </p>

          {/* Additional CTA */}
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-[#16f2b3] hover:text-pink-500 transition-colors duration-300 group"
            >
              <span className="font-semibold">Let's work together</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-rotate {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-rotate {
          background-size: 200% 200%;
          animation: gradient-rotate 3s ease infinite;
        }
      `}</style>
    </div>
  );
}

export default AboutSection;
