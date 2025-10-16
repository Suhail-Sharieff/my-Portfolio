import React from "react";
import { FaExternalLinkAlt, FaAward, FaTags } from 'react-icons/fa'; 

// Define the new primary accent color: Tailwind 'green-400'
const ACCENT_COLOR = 'green-400'; 
const ACCENT_CLASS = 'text-green-400'; 
const ACCENT_HOVER_CLASS = 'hover:text-green-300';
const ACCENT_BG_CLASS = 'bg-green-900/50';
const ACCENT_BORDER_CLASS = 'border-green-700/50';
const ACCENT_SHADOW_CLASS = 'shadow-green-700/30';

// Helper component for skill badges
const SkillBadge = ({ skill }) => (
    <span className={`text-xs font-mono px-3 py-1 ${ACCENT_BG_CLASS} text-green-300 rounded-full border ${ACCENT_BORDER_CLASS} shadow-sm whitespace-nowrap`}>
        {skill}
    </span>
);

const ProjectsCard = () => {
    // Helper function to handle skills array/string conversion
    const formatSkills = (skills) => {
        if (Array.isArray(skills)) {
            return skills.flat(); 
        }
        return String(skills).split(',').map(s => s.trim());
    };

    const projects = [
        {
            title: "Surakshit - The Protector",
            description: "Disaster Management tool for real-time safety and resource allocation.",
            skills: "MapsAPI, MongoDB, Tailwind CSS, Flask",
            link: "https://codefury7-0.onrender.com/",
            hackathon: "CodeFury 2024"
        },
        {
            title: "Eco-Earth",
            description: "Mobile application focused on community-driven waste management and recycling initiatives.",
            skills: "Flutter, GetX",
            link: "https://github.com/Suhail-Sharieff/PROJECT-eco_earth",
            hackathon: "Google Solution Challenge 2025"
        },
        {
            title: "RxGuardian",
            description: "Comprehensive Pharmacy ERP System facilitating inventory, sales, and client communication.",
            skills: "NodeJS, Socket.io, Redis, MySQL, Flutter, GetX",
            link: "https://github.com/Suhail-Sharieff/PROJECT-RxGuardian",
        },
        {
            title: "CodeMint",
            description: "An interactive coding platform enabling live coding sessions for educational institutions and technical interviews.",
            skills: ["React.js", "Socket.io", "Node.js", "Flutter", "Firebase"],
            link: "https://github.com/Suhail-Sharieff/PROJECT-CodeMint",
        },
        {
            title: "Recurse",
            description: "Efficiently Solves Sudoku puzzles using backtracking algorithms after initial input validation.",
            skills: "Algorithms, JavaScript",
            link: "https://ieee-sudoku.vercel.app/",
        },
        {
            title: "JusTex",
            description: "A secure, server-client application for seamless text communication (chat).",
            skills: "Socket Programming, JavaAWT, JavaSwing",
            link: "https://github.com/Suhail-Sharieff/PROJECT-chatApplication",
        },
        {
            title: "Quizzy",
            description: "A simple and fast quiz/flash card player built for personal revision and learning.",
            skills: "JavaSwing, JavaAWT",
            link: "https://github.com/Suhail-Sharieff/PROJECT-quizCardPlayer",
        },
        {
            title: "Songify",
            description: "An offline music player featuring an enhanced, folder-based file management system.",
            skills: "HTML, CSS, JS",
            link: "https://github.com/Suhail-Sharieff/PROJECT-WEB_MUSIC_PLAYER",
        },
        {
            title: "Sikshak Saathi",
            description: "A lightweight attendance application optimized for speed and simplicity in educational institutes.",
            skills: "Flutter, SQFLite, BLoc",
            link: "https://github.com/Suhail-Sharieff/PROJECT-attendance_app",
        },
    ];

    return (
        // Added 'tracking-normal' to counteract default weird spacing
        <div className="font-sans tracking-normal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto">
            {projects.map((project, index) => (
                <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Card Style: Changed green accents to green
                    className={`group flex flex-col p-6 bg-gray-900/90 rounded-xl border border-gray-700 ${ACCENT_HOVER_CLASS} hover:border-green-500/80 transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:${ACCENT_SHADOW_CLASS} relative`}
                >
                    
                    {/* Hackathon/Tag Section */}
                    {project.hackathon && (
                        // Changed background/border to green
                        <div className={`mb-3 px-3 py-1 text-xs font-semibold rounded-full ${ACCENT_BG_CLASS} text-green-300 border ${ACCENT_BORDER_CLASS} self-start flex items-center`}>
                            <FaAward className="inline mr-2" />
                            {project.hackathon} 
                        </div>
                    )}
                    
                    {/* Title and Link Icon */}
                    <div className="flex items-start justify-between mb-2">
                        <h4 className={`text-2xl font-extrabold text-white group-hover:${ACCENT_COLOR} transition-colors`}>
                            {project.title}
                        </h4>
                        {/* Changed hover color to green */}
                        <FaExternalLinkAlt className={`text-lg text-gray-500 group-hover:${ACCENT_COLOR} transition-colors mt-1`} />
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    {/* Skills Badges Section */}
                    <div className="mt-auto pt-4 border-t border-gray-700/50">
                         <div className="flex items-center text-gray-500 mb-2">
                            {/* Changed icon color to green */}
                            <FaTags className={`mr-2 ${ACCENT_CLASS}`} />
                            <span className="font-semibold text-sm">Tech Stack</span>
                         </div>
                        <div className="flex flex-wrap gap-2">
                            {formatSkills(project.skills).map((skill, skillIndex) => (
                                <SkillBadge key={skillIndex} skill={skill} />
                            ))}
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
};

export default ProjectsCard;