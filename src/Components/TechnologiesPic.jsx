import React from 'react';
import { FaReact, FaGitAlt, FaBootstrap, FaHtml5, FaCss3, FaPython, FaJava, FaNode } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiMongodb, SiCplusplus, SiSpringboot, SiFlutter } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from 'react-icons/gr';
import Footer from './Footer';

function TechnologiesPic() {
    return (
        <>
        <div style={{ backgroundColor: '#000000', padding: '20px' }}> {/* Dark gray background */}
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0); }
                        50% { transform: translateY(-10px); }
                        100% { transform: translateY(0); }
                    }
                    .floating-icon {
                        animation: float 3s ease-in-out infinite;
                    }
                    .icon-container {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap: 30px;
                        margin-top: 20px;
                    }
                    .icon-item {
                        position: relative;
                        margin: 0 20px;
                        cursor: pointer; /* Make it clear it's clickable */
                    }
                    .icon-item:hover .tooltip {
                        opacity: 1;
                    }
                    .tooltip {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 2px;
                        background-color: #4a5568; /* Gray background */
                        color: white;
                        font-size: 0.75rem; /* Smaller text */
                        border-radius: 0.25rem; /* Rounded corners */
                        padding: 0.25rem 0.5rem; /* Padding */
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    .tooltip::after {
                        content: '';
                        position: absolute;
                        top: 100%; /* Position the arrow below the tooltip */
                        left: 50%;
                        margin-left: -5px; /* Center the arrow */
                        border-width: 5px;
                        border-style: solid;
                        border-color: #4a5568 transparent transparent transparent; /* Arrow color */
                    }
                `}
            </style>
            <section className="flex flex-col items-center w-full hover:cursor-pointer">
                <p className="text-l font-bold p-6 hover:text-green-500 tracking-[.25em] text-white">Technologies</p>
          
                <div className="icon-container">
                    {[
                        { icon: <SiCplusplus className="text-white text-3xl hover:text-blue-400 floating-icon" />, label: "C++" },
                        { icon: <FaJava className="text-white text-3xl hover:text-red-400 floating-icon" />, label: "Java" },
                        { icon: <FaPython className="text-white text-3xl hover:text-yellow-400 floating-icon" />, label: "Python" },
                        { icon: <FaHtml5 className="text-white text-3xl hover:text-orange-400 floating-icon" />, label: "HTML" },
                        { icon: <FaCss3 className="text-white text-3xl hover:text-blue-400 floating-icon" />, label: "CSS" },
                        { icon: <RiJavascriptFill className="text-white text-3xl hover:text-yellow-400 floating-icon" />, label: "JavaScript" },
                        { icon: <FaNode className="text-white text-3xl hover:text-green-400 floating-icon" />, label: "NodeJS" },
                        { icon: <RiTailwindCssFill className="text-white text-3xl hover:text-blue-400 floating-icon" />, label: "Tailwind CSS" },
                        { icon: <FaReact className="text-white text-3xl hover:text-violet-500 floating-icon" />, label: "React" },
                        { icon: <SiSpringboot className="text-white text-3xl hover:text-green-600 floating-icon" />, label: "Spring Boot" },
                        { icon: <FaGitAlt className="text-white text-3xl hover:text-orange-500 floating-icon" />, label: "Git" },
                        { icon: <SiVite className="text-white text-3xl hover:text-blue-400 floating-icon" />, label: "Vite" },
                        { icon: <GrMysql className="text-white text-3xl hover:text-violet-500 floating-icon" />, label: "MySQL" },
                        { icon: <SiMongodb className="text-white text-3xl hover:text-green-700 floating-icon" />, label: "MongoDB" },
                        { icon: <FaBootstrap className="text-white text-3xl hover:text-purple-500 floating-icon" />, label: "BootStrap" },
                        { icon: <IoLogoFirebase className="text-white text-3xl hover:text-orange-400 floating-icon" />, label: "Firebase" },
                        { icon: <SiFlutter className="text-white text-3xl hover:text-blue-400 floating-icon" />, label: "Flutter" },
                    ].map(({ icon, label }, index) => (
                        <div key={index} className="icon-item">
                            {React.cloneElement(icon)}
                            <span className="tooltip">{label}</span>
                        </div>
                    ))}
                </div>
                <p className="text-l font-bold p-6 hover:text-green-500 tracking-[.25em] text-white">.....and many more to come !</p>

                
            </section>
        </div>
        </>
    );
}

export default TechnologiesPic;
