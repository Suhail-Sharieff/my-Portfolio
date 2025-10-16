import React from "react";
import {
    FaReact, FaGitAlt, FaBootstrap, FaHtml5, FaCss3, FaPython, FaJava, FaNode,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
    SiVite, SiMongodb, SiCplusplus, SiSpringboot, SiFlutter, SiPostman, SiSqlite, SiApachehive, SiDart, SiDocker, SiRedis, SiGetx,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { BiSolidCube } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";

// --- CSS Keyframes for Floating and Horizontal Drift Animation (The "Flow" Effect) ---
const FLOAT_ANIMATION_CSS = `
    /* Combined vertical float and horizontal drift */
    @keyframes flow {
        0% { transform: translate(0px, 0px) scale(1); }
        50% { transform: translate(-5px, -8px) scale(1.05); } /* Drifts left and up */
        100% { transform: translate(0px, 0px) scale(1); }
    }
    .animate-float-flow {
        animation: flow 7s ease-in-out infinite;
    }
`;
// ------------------------------------------

// --- Accent Color Constants (green/Teal) ---
const ACCENT_COLOR_CLASS = 'text-green-400';
const ACCENT_BORDER_CLASS = 'border-green-700/50';
const ACCENT_SHADOW_CLASS = 'shadow-green-900/60';
const ACCENT_HOVER_CLASS = 'hover:text-green-300';
// -----------------------------------------------------------------


// --- Categorized Tech Stack Data ---
const techStack = [
    { 
        category: "Languages & Core", 
        color: "border-l-4 border-green-500", // Visual identifier for the category bar
        items: [
            { icon: <SiCplusplus />, label: "C++", color: "text-blue-500" },
            { icon: <FaJava />, label: "Java", color: "text-red-500" },
            { icon: <FaPython />, label: "Python", color: "text-yellow-500" },
            { icon: <RiJavascriptFill />, label: "JavaScript", color: "text-yellow-500" },
            { icon: <SiDart />, label: "Dart", color: "text-sky-500" },
        ] 
    },
    { 
        category: "Frontend & Mobile", 
        color: "border-l-4 border-emerald-500",
        items: [
            { icon: <FaReact />, label: "React", color: "text-green-500" },
            { icon: <FaHtml5 />, label: "HTML", color: "text-orange-500" },
            { icon: <FaCss3 />, label: "CSS", color: "text-blue-500" },
            { icon: <RiTailwindCssFill />, label: "Tailwind CSS", color: "text-sky-500" },
            { icon: <FaBootstrap />, label: "Bootstrap", color: "text-purple-500" },
            { icon: <SiFlutter />, label: "Flutter", color: "text-sky-500" },
            { icon: <BiSolidCube />, label: "BLoC", color: "text-purple-500" },
            { icon: <SiGetx />, label: "GetX", color: "text-violet-500" },
        ] 
    },
    { 
        category: "Backend & Databases", 
        color: "border-l-4 border-orange-500",
        items: [
            { icon: <FaNode />, label: "NodeJS", color: "text-green-500" },
            { icon: <SiSpringboot />, label: "Spring Boot", color: "text-green-600" },
            { icon: <GrMysql />, label: "MySQL", color: "text-blue-600" },
            { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
            { icon: <SiSqlite />, label: "SQLite", color: "text-blue-500" },
            { icon: <SiApachehive />, label: "Hive", color: "text-yellow-500" },
            { icon: <SiRedis />, label: "Redis", color: "text-red-500" },
            { icon: <IoLogoFirebase />, label: "Firebase", color: "text-orange-500" },
        ] 
    },
    { 
        category: "DevOps & Tools", 
        color: "border-l-4 border-violet-500",
        items: [
            { icon: <FaGitAlt />, label: "Git", color: "text-orange-500" },
            { icon: <SiDocker />, label: "Docker", color: "text-blue-500" },
            { icon: <SiVite />, label: "Vite", color: "text-purple-500" },
            { icon: <SiPostman />, label: "Postman", color: "text-orange-500" },
            { icon: <FiFigma />, label: "Figma", color: "text-pink-500" },
        ] 
    },
];
// -----------------------------------------------------------------

const TechCategory = ({ category, items, color }) => (
    <div className="w-full mb-12">
        {/* Category Title Bar: 
          - Increased font size (xl -> 2xl) 
          - Added a distinct border-left and shadow for a "cut-out" effect 
          - Using the dynamic 'color' prop for the vibrant border/background
        */}
        <h3 className={`text-2xl font-extrabold mb-8 text-white tracking-wide ${color} border-l-4 pl-4 pb-2 transition-colors duration-300 shadow-lg`}>
            {category}
        </h3>
        
        {/* Code Flow Layout: 
          - Items are centered with justify-center
          - Increased gap (gap-x-10 gap-y-12) for visual breathing room
        */}
        <div className="flex flex-wrap gap-x-10 gap-y-12 justify-center"> 
            {items.map(({ icon: icon, label, color }, index) => (
                <div
                    key={index}
                    // Card wrapper (Enhanced styles)
                    className={`group relative flex flex-col items-center p-5 rounded-xl transition-all duration-300 transform 
                                hover:scale-105 hover:shadow-2xl hover:shadow-cyan-900/60 
                                bg-gray-900/70 border border-gray-700/50 
                                w-full max-w-[110px]`} 
                    style={{ minWidth: '90px' }}
                >
                    <div
                        // APPLIED FLOW ANIMATION
                        className={`text-5xl ${color} transition-all duration-300 animate-float-flow`}
                        style={{ 
                            animationDelay: `${index * 0.25}s`,
                            animationDuration: `${7 + Math.random() * 4}s` 
                        }} 
                    >
                        {icon}
                    </div>
                    
                    {/* Label (Enhanced font weight) */}
                    <span className="mt-3 text-xs font-semibold font-mono text-gray-400 group-hover:text-white transition-colors text-center">
                        {label}
                    </span>
                    
                    {/* Visual Hover Effect (Bottom Accent Bar) */}
                    <div className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl bg-transparent group-hover:bg-cyan-500 transition-colors duration-300"></div>
                </div>
            ))}
        </div>
    </div>
);
function TechnologiesPic() {
    // Inject the keyframes CSS once the component is mounted
    React.useEffect(() => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = FLOAT_ANIMATION_CSS;
        document.head.appendChild(style);

        return () => {
            if (document.head.contains(style)) {
                 document.head.removeChild(style);
            }
        };
    }, []);
    
    return (
        // Main container
        <div className="bg-black text-white py-16 px-4 md:px-8 font-sans">
            <section className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Title (green accent) */}
                <h2 className={`text-4xl md:text-5xl font-extrabold mb-12 ${ACCENT_COLOR_CLASS} tracking-normal uppercase border-b border-green-700/50 pb-2`}>
                    Tech Stacks
                </h2>

                {/* Flow Layout for Categorization */}
                <div className="w-full">
                    {techStack.map((group, index) => (
                        <TechCategory key={index} category={group.category} items={group.items} color={group.color} />
                    ))}
                </div>

                {/* Footer Message */}
                <p className={`mt-12 text-sm md:text-base font-semibold text-gray-400 tracking-wider ${ACCENT_HOVER_CLASS} transition`}>
                    Building with passion. .....and many more to come!
                </p>
            </section>
        </div>
    );
}

export default TechnologiesPic;