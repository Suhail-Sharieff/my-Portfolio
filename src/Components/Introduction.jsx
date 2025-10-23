import React, { useState, useEffect, Suspense } from 'react';
import { FaGithub, FaLinkedin, FaReddit, FaMedium, FaTwitter } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';

// **CRITICAL FIX:** Changed import from '/next' to standard import
import Spline from '@splinetool/react-spline'; 

// 1. Import your profile picture
import pfp from '../assets/pfp.png'; 

// --- Configuration ---
// Your provided Spline scene URL
const SPLINE_URL = 'https://prod.spline.design/PVndKKWYAdxGRNt5/scene.splinecode'; 
// ---------------------

// --- Robot Spline Component ---
function RobotSpline() {
    return (
        // Use a wrapper to control the size of the Spline canvas
        <div className="w-full h-80 md:w-96 md:h-96 relative mx-auto">
            <Suspense fallback={<div className="text-sm text-gray-500">Loading 3D Robot...</div>}>
                <Spline
                    scene={SPLINE_URL} 
                    // Ensures the canvas stretches to fill its container
                    className="w-full h-full"
                />
            </Suspense>
        </div>
    );
}
// ------------------------------

// Reusable component for social links
const SocialLink = ({ href, icon: Icon, tooltip }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300 group relative p-2"
    >
        <Icon size={28} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50">
            {tooltip}
        </span>
    </a>
);


function Introduction() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    return (
        // Main container with full black background
        <div className="bg-black text-white min-h-screen p-8 font-sans flex items-center justify-center">

            {/* Content wrapper: Flex container for the two main sections */}
            <div className="max-w-6xl w-full flex flex-col xl:flex-row items-center justify-between gap-12 p-8 bg-gray-900/40 rounded-xl shadow-2xl shadow-green-900/50">

                {/* LEFT SECTION: Avatar, Intro Text, and Links */}
                <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 max-w-2xl flex-grow">

                    {/* 2. Circular Avatar Section */}
                    <div className="flex-shrink-0">
                        <img
                            src={pfp}
                            alt="Suhail Sharieff"
                            className="w-40 h-40 rounded-full border-4 border-green-500 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Text Content Section */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl md:text-6xl font-bold text-green-500 tracking-wide">
                            Suhail Sharieff
                        </h1>
                        
                        <div className="text-lg text-gray-400">
                            19M, Student | Bangalore, IN | <span className="font-mono text-orange-400">{currentTime.toLocaleTimeString()}</span>
                        </div>

                        <p className="text-gray-300 tracking-wide leading-relaxed">
                            Hello! 👋 I'm a 19-year-old B.Tech Computer Science student at 
                            <strong> University Visvesvaraya College of Engineering (UVCE)</strong>, passionate about building impactful software solutions.
                        </p>

                        <p className="text-gray-300 tracking-wide leading-relaxed">
                            I’m currently exploring <strong>Full-Stack Web</strong> and <strong>Android Development</strong>, while sharpening my problem-solving skills through competitive programming and real-world projects. 
                        </p>


                        {/* 3. Social Links Section */}
                        <div className="flex justify-center md:justify-start gap-6 mt-4">
                            <SocialLink href="https://github.com/Suhail-Sharieff" icon={FaGithub} tooltip="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/suhail-sharieff-2a4500290/?originalSubdomain=in" icon={FaLinkedin} tooltip="LinkedIn" />
                            <SocialLink href="https://x.com/SuhailShar62488?t=TlpMdK9CAJCE7UUknl5xiw&s=09" icon={FaTwitter} tooltip="Twitter/X" />
                            <SocialLink href="https://medium.com/@suhailsharieffsharieff" icon={FaMedium} tooltip="Medium" />
                            <SocialLink href="https://www.reddit.com/user/SuhailSharieff/" icon={FaReddit} tooltip="Reddit" />
                            <SocialLink href="https://codolio.com/profile/x4Ctjy8d" icon={SiCodeforces} tooltip="Competitive Programming" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION: SPLINE ROBOT */}
                <div className="flex-shrink-0 mt-8 xl:mt-0 xl:ml-8">
                    <RobotSpline />
                </div>
            </div>
        </div>
    );
}

export default Introduction;