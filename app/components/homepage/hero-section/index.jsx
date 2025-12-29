// @flow strict

"use client";

import { useEffect, useState } from "react";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { Meteors } from "@/app/components/homepage/hero-section/meteor";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { Send, Download, Sparkles, ArrowRight } from "lucide-react";

function HeroSection() {
  const [displayedName, setDisplayedName] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullName = personalData.name;

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 mt-32">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-1 lg:order-2 from-[#0d1224]">
          <TypingCodeBlock />
        </div>

        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold leading-tight text-white md:font-extrabold lg:text-[2.8rem] lg:leading-[3.8rem]">
              <span className="block text-gray-300 text-2xl lg:text-3xl font-normal mb-2">
                Hello, This is
              </span>

              {/* Animated Name */}
              <span className="inline-block relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient font-extrabold">
                  {displayedName}
                </span>
                <span className="inline-block w-0.5 h-10 lg:h-14 bg-pink-500 ml-1 animate-blink align-middle"></span>
              </span>
              <span className="text-white">,</span>

              <span className="block mt-4 text-gray-300">
                I'm a{" "}
                <span className="text-[#16f2b3] font-extrabold">
                  {personalData.designation}
                </span>
                .
              </span>
            </h1>
          </div>

          {/* Social links */}
          <div className="my-10 flex items-center gap-6">
            {[
              { Icon: BsGithub, href: personalData.github },
              { Icon: BsLinkedin, href: personalData.linkedIn },
              // { Icon: FaFacebook, href: personalData.facebook },
              // { Icon: SiLeetcode, href: personalData.leetcode },
              // { Icon: FaTwitterSquare, href: personalData.twitter },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-400 transition-all duration-300 hover:scale-110"
              >
                <Icon size={32} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Contact Me Button */}
            <a href="contact" className="group relative">
              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 rounded-xl opacity-70 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500"></div>

              <button className="relative px-8 md:px-10 py-4 md:py-5 bg-[#0a0a0a] rounded-xl text-white text-sm md:text-base font-semibold transition-all duration-300 border border-pink-500/30 group-hover:border-pink-500/60 shadow-lg overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-out"></div>

                {/* Content */}
                <span className="relative flex items-center gap-3">
                  <Send
                    size={20}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                  <span className="tracking-wide">Contact Me</span>
                  <ArrowRight
                    size={18}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                  />
                </span>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
              </button>
            </a>

            {/* Get Resume Button */}
            <a
              href={personalData.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Glowing background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-500 to-purple-600 rounded-xl opacity-75 group-hover:opacity-100 blur-md transition-all duration-500 animate-gradient-rotate"></div>

              <button className="relative px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 rounded-xl text-white text-sm md:text-base font-semibold transition-all duration-300 shadow-xl overflow-hidden">
                {/* Animated sparkle effect */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                {/* Content */}
                <span className="relative flex items-center gap-3">
                  <Sparkles
                    size={20}
                    className="group-hover:rotate-180 transition-transform duration-700"
                  />
                  <span className="tracking-wide">Get Resume</span>
                  <Download
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </span>

                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
              </button>
            </a>
          </div>

          <style jsx>{`
            @keyframes blink {
              0%,
              49% {
                opacity: 1;
              }
              50%,
              100% {
                opacity: 0;
              }
            }

            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            @keyframes gradient-rotate {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            .animate-blink {
              animation: blink 1s step-end infinite;
            }

            .animate-gradient {
              animation: gradient 3s ease infinite;
            }

            .animate-gradient-rotate {
              background-size: 200% 200%;
              animation: gradient-rotate 3s ease infinite;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

function TypingCodeBlock() {
  const [displayedCode, setDisplayedCode] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const codeLines = [
    {
      type: "declaration",
      parts: [
        { text: "const\u00A0", color: "text-pink-500", bold: true },
        { text: "coder", color: "text-white" },
        { text: "\u00A0=\u00A0", color: "text-pink-500" },
        { text: "{", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "name:", color: "text-white" },
        { text: " '", color: "text-gray-400" },
        { text: "\u00A0DEEPAK", color: "text-amber-300" },
        { text: "',", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "title:", color: "text-white" },
        { text: " '", color: "text-gray-400" },
        { text: "\u00A0Full Stack Developer", color: "text-amber-300" },
        { text: "',", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "skills:", color: "text-white" },
        { text: "\u00A0['", color: "text-gray-400" },
        { text: "React", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "NextJS", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "Python", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "JavaScript", color: "text-amber-300" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "', '", color: "text-gray-400" },
        { text: "MongoDB", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "Ant Design", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "AWS", color: "text-amber-300" },
        { text: "', '", color: "text-gray-400" },
        { text: "BitBucket", color: "text-amber-300" },
        { text: "'],", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "hardWorker:", color: "text-white" },
        { text: "\u00A0true", color: "text-orange-400" },
        { text: ",", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "quickLearner:", color: "text-white" },
        { text: "\u00A0true", color: "text-orange-400" },
        { text: ",", color: "text-gray-400" },
      ],
    },
    {
      type: "property",
      indent: 1,
      parts: [
        { text: "problemSolver:", color: "text-white" },
        { text: "\u00A0true", color: "text-orange-400" },
        { text: ",", color: "text-gray-400" },
      ],
    },
    {
      type: "method",
      indent: 1,
      parts: [
        { text: "hireable:", color: "text-green-400" },
        { text: "\u00A0function", color: "text-orange-400" },
        { text: "() {", color: "text-gray-400" },
      ],
    },
    {
      type: "statement",
      indent: 2,
      parts: [
        { text: "return", color: "text-orange-400" },
        { text: "\u00A0(", color: "text-gray-400" },
      ],
    },
    {
      type: "condition",
      indent: 3,
      parts: [
        { text: "this.", color: "text-cyan-400" },
        { text: "hardWorker", color: "text-white" },
        { text: "\u00A0&&", color: "text-amber-300" },
      ],
    },
    {
      type: "condition",
      indent: 3,
      parts: [
        { text: "this.", color: "text-cyan-400" },
        { text: "problemSolver", color: "text-white" },
        { text: "\u00A0&&", color: "text-amber-300" },
      ],
    },
    {
      type: "condition",
      indent: 3,
      parts: [
        { text: "this.", color: "text-cyan-400" },
        { text: "skills.length", color: "text-white" },
        { text: " \u00A0>= ", color: "text-amber-300" },
        { text: "\u00A05", color: "text-orange-400" },
        { text: "\u00A0&&", color: "text-amber-300" },
      ],
    },
    {
      type: "condition",
      indent: 3,
      parts: [
        { text: "this.", color: "text-cyan-400" },
        { text: "yearsOfExperience", color: "text-white" },
        { text: " \u00A0>= ", color: "text-amber-300" },
        { text: "\u00A03", color: "text-orange-400" },
      ],
    },
    {
      type: "close",
      indent: 2,
      parts: [{ text: ");", color: "text-gray-400" }],
    },
    {
      type: "close",
      indent: 1,
      parts: [{ text: "};", color: "text-gray-400" }],
    },
    {
      type: "close",
      indent: 0,
      parts: [{ text: "};", color: "text-gray-400" }],
    },
  ];

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      setIsComplete(true);
      return;
    }

    const line = codeLines[currentLine];
    const fullLineText = line.parts.map((p) => p.text).join("");

    if (currentChar < fullLineText.length) {
      const timeout = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const newDisplayedCode = [...displayedCode];
      newDisplayedCode[currentLine] = line;
      setDisplayedCode(newDisplayedCode);
      setCurrentLine(currentLine + 1);
      setCurrentChar(0);
    }
  }, [currentChar, currentLine]);

  const renderLine = (line, index) => {
    const indentClass =
      line.indent === 1
        ? "ml-4 lg:ml-8"
        : line.indent === 2
        ? "ml-8 lg:ml-16"
        : line.indent === 3
        ? "ml-12 lg:ml-24"
        : "";

    const isCurrentLine = index === currentLine;
    const lineText = line.parts.map((p) => p.text).join("");
    const displayText = isCurrentLine
      ? lineText.slice(0, currentChar)
      : lineText;

    let charCount = 0;

    return (
      <div
        key={index}
        className={`${indentClass} flex items-center min-h-[1.5rem]`}
      >
        {line.parts.map((part, partIndex) => {
          const partStart = charCount;
          const partEnd = charCount + part.text.length;
          charCount = partEnd;

          let visibleText = "";
          if (isCurrentLine) {
            if (currentChar > partStart) {
              visibleText = part.text.slice(
                0,
                Math.min(currentChar - partStart, part.text.length)
              );
            }
          } else if (index < currentLine) {
            visibleText = part.text;
          }

          return (
            <span
              key={partIndex}
              className={`${part.color} ${part.bold ? "font-bold" : ""}`}
            >
              {visibleText}
            </span>
          );
        })}
        {isCurrentLine && (
          <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse"></span>
        )}
      </div>
    );
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="w-full max-w-4xl">
      <div className="relative rounded-2xl border-2 border-purple-500/30 bg-gradient-to-br from-[#0d1224] to-[#0a0d37] shadow-2xl shadow-purple-500/20 overflow-hidden backdrop-blur-sm">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl"></div>

        {/* Top gradient bars */}
        <div className="relative flex">
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-500 to-purple-600"></div>
          <div className="h-1 w-full bg-gradient-to-r from-purple-600 via-cyan-500 to-transparent"></div>
        </div>

        {/* Window controls */}
        <div className="relative px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg shadow-red-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg shadow-orange-500/50"></div>
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50"></div>
            <div className="ml-4 flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">profile.js</span>
            </div>
          </div>
        </div>

        {/* Code area */}
        <div className="relative px-6 lg:px-8 py-6 lg:py-8 bg-gradient-to-br from-slate-950/50 to-purple-950/30">
          <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
            {displayedCode.map((line, index) => renderLine(line, index))}
            {currentLine < codeLines.length &&
              renderLine(codeLines[currentLine], currentLine)}
          </code>
        </div>

        {/* Bottom status bar */}
        <div className="relative px-6 py-3 bg-black/30 backdrop-blur-sm border-t border-purple-500/20 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-xs text-gray-400 font-mono">
              {isComplete ? "Compilation complete ✓" : "Typing..."}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className={`h-2 w-2 rounded-full ${
                isComplete ? "bg-green-400" : "bg-yellow-400 animate-pulse"
              }`}
            ></div>
            <span className="text-xs text-gray-400 font-mono">
              Line {Math.min(currentLine + 1, codeLines.length)}/
              {codeLines.length}
            </span>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default HeroSection;
