// @flow strict

"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../assets/lottie/code.json";
import AnimationLottie from "../components/helper/animation-lottie";
import GlowCard from "../components//helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 lg:my-24">
      {/* <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 w-fit text-white p-2 px-5 text-2xl rounded-lg font-bold animate-gradient">
            Summary of my{" "}
            <span className="text-white drop-shadow-lg">Work</span> Experience
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
        </div>
      </div> */}

      <div className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-[3.75rem] top-0 bottom-0 w-[2px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 animate-timeline-flow"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-20 animate-timeline-glow"></div>
            </div>

            <div className="flex flex-col gap-12">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative pl-8 md:pl-24">
                  {/* Timeline Connector */}
                  <div className="absolute left-4 md:left-[3.75rem] top-12 hidden md:block">
                    {/* Pulsing Outer Ring */}
                    <div className="absolute -left-3 -top-3 w-6 h-6 bg-purple-500/30 rounded-full animate-ping"></div>
                    {/* Main Dot */}
                    <div className="relative w-4 h-4 -left-2 -top-2">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full animate-gradient"></div>
                      <div className="absolute inset-0.5 bg-slate-900 rounded-full"></div>
                      <div className="absolute inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse"></div>
                    </div>
                    {/* Horizontal Connector Line */}
                    <div className="absolute left-2 top-0 w-16 h-[2px] bg-gradient-to-r from-purple-500 to-transparent"></div>
                  </div>

                  <div
                    className="group relative bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)] overflow-hidden animate-slide-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift"></div>

                    {/* Floating Particles Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="flex flex-col md:flex-row gap-6 relative z-10">
                      {/* Company Logo */}
                      <div className="flex-shrink-0">
                        <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 overflow-hidden">
                          {/* Animated gradient background */}
                          {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 animate-gradient"></div> */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient"></div>

                          {/* Your Image Here */}
                          <img
                            src="/aicare-logo.svg"
                            alt="profile"
                            className="relative z-10 w-12 h-12 object-contain drop-shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Experience Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300 inline-block animate-text-shimmer">
                              {experience.title}
                            </h3>
                            <p className="text-gray-400 flex items-center gap-2 group-hover:text-gray-300 transition-colors duration-300">
                              <BsPersonWorkspace className="text-purple-400" />
                              {experience.company}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 mt-2 md:mt-0">
                            <span className="px-4 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium text-sm backdrop-blur-sm">
                              {experience.duration}
                            </span>
                            {/* <span className="text-white font-bold animate-pulse">
                              →
                            </span>
                            <span className="px-4 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 border border-pink-500/30 rounded-full text-pink-300 font-medium text-sm backdrop-blur-sm animate-pulse">
                              Now
                            </span> */}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                          Led the development and enhancement of AICARE GLOBAL
                          PRIVATE LIMITED's web platform, architecting
                          full-stack solutions that improved user experience and
                          operational efficiency. Implemented responsive UI
                          components, optimized backend APIs, and integrated
                          modern technologies to deliver seamless functionality
                          across the entire application stack.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-300 rounded-lg text-sm border border-purple-500/20 hover:border-purple-400/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default backdrop-blur-sm animate-fade-in"
                              style={{
                                animationDelay: `${
                                  index * 200 + techIndex * 50
                                }ms`,
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Element with Animation */}
                    <div className="absolute top-0 left-0 w-20 h-20">
                      <div className="w-full h-full border-t-2 border-l-2 border-purple-500/30 rounded-tl-2xl group-hover:border-purple-400/60 transition-colors duration-500 animate-pulse-slow"></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20">
                      <div className="w-full h-full border-b-2 border-r-2 border-pink-500/30 rounded-br-2xl group-hover:border-pink-400/60 transition-colors duration-500 animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes textShimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-gradient-shift {
          animation: gradientShift 8s ease-in-out infinite;
        }

        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: textShimmer 3s ease infinite;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Experience;
