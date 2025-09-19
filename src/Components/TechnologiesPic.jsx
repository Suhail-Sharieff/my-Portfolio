import React from "react";
import {
  FaReact,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaNode,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiVite,
  SiMongodb,
  SiCplusplus,
  SiSpringboot,
  SiFlutter,
  SiPostman,
  SiSqlite,
  SiApachehive,
  SiDart,
  SiDocker,
  SiRedis,
  SiGetx,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { BiSolidCube } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";

function TechnologiesPic() {
  const techStack = [
    { icon: <SiCplusplus />, label: "C++", color: "hover:text-blue-400" },
    { icon: <FaJava />, label: "Java", color: "hover:text-red-400" },
    { icon: <FaPython />, label: "Python", color: "hover:text-yellow-400" },
    { icon: <FaHtml5 />, label: "HTML", color: "hover:text-orange-400" },
    { icon: <FaCss3 />, label: "CSS", color: "hover:text-blue-400" },
    { icon: <RiJavascriptFill />, label: "JavaScript", color: "hover:text-yellow-400" },
    { icon: <FaNode />, label: "NodeJS", color: "hover:text-green-400" },
    { icon: <RiTailwindCssFill />, label: "Tailwind CSS", color: "hover:text-sky-400" },
    { icon: <FaReact />, label: "React", color: "hover:text-cyan-400" },
    { icon: <SiSpringboot />, label: "Spring Boot", color: "hover:text-green-600" },
    { icon: <FaGitAlt />, label: "Git", color: "hover:text-orange-500" },
    { icon: <SiVite />, label: "Vite", color: "hover:text-purple-400" },
    { icon: <GrMysql />, label: "MySQL", color: "hover:text-blue-500" },
    { icon: <SiMongodb />, label: "MongoDB", color: "hover:text-green-500" },
    { icon: <FaBootstrap />, label: "Bootstrap", color: "hover:text-purple-500" },
    { icon: <IoLogoFirebase />, label: "Firebase", color: "hover:text-orange-400" },
    { icon: <SiFlutter />, label: "Flutter", color: "hover:text-sky-400" },
    { icon: <BiSolidCube />, label: "BLoC", color: "hover:text-purple-400" },
    { icon: <SiPostman />, label: "Postman", color: "hover:text-orange-500" },
    { icon: <SiSqlite />, label: "SQLite", color: "hover:text-blue-400" },
    { icon: <SiApachehive />, label: "Hive", color: "hover:text-yellow-400" },
    { icon: <FiFigma />, label: "Figma", color: "hover:text-pink-400" },
    { icon: <SiDart />, label: "Dart", color: "hover:text-sky-400" },
    { icon: <SiDocker />, label: "Docker", color: "hover:text-blue-400" },
    { icon: <SiRedis />, label: "Redis", color: "hover:text-red-400" },
    { icon: <SiGetx />, label: "GetX", color: "hover:text-violet-400" },
  ];

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black py-16 px-6">
      <section className="flex flex-col items-center">
        <h2 className="text-3xl md:text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 tracking-[.25em]">
          TECHNOLOGIES
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10">
          {techStack.map(({ icon, label, color }, index) => (
            <div
              key={index}
              className="relative group flex flex-col items-center"
            >
              <div
                className={`text-5xl text-white transition-all duration-300 transform group-hover:scale-125 ${color}`}
              >
                {icon}
              </div>
              <span className="absolute bottom-[-2rem] text-xs bg-green-600 text-white rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition duration-300">
                {label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm md:text-base font-semibold text-gray-300 tracking-widest hover:text-green-400 transition">
          .....and many more to come!
        </p>
      </section>
    </div>
  );
}

export default TechnologiesPic;
