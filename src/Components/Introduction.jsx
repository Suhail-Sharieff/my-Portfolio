import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReddit, FaMedium, FaTwitter } from 'react-icons/fa';

// 1. Import your profile picture
import pfp from '../assets/pfp.jpg';
import { SiCodeforces } from 'react-icons/si';

// Reusable component for social links to keep the main component clean
const SocialLink = ({ href, icon: Icon, tooltip }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300 group relative"
    >
        <Icon size={28} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
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
        // Main container with a dark background and centered content
        <div className="bg-black text-white min-h-screen p-8 font-sans flex items-center justify-center">

            {/* Content wrapper with responsive layout */}
            <div className="max-w-4xl w-full flex flex-col md:flex-row items-center text-center md:text-left gap-10">

                {/* 2. Circular Avatar Section */}
                <div className="flex-shrink-0">
                    
                    <img
                        src={pfp}
                        alt="Suhail Sharieff"
                        className="w-40 h-40 rounded-full border-4 border-green-500 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                </div>

                {/* Text Content Section */}
                <div className="flex flex-col gap-4">
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
  Beyond coding, I enjoy staying updated on global events and emerging technologies that shape our future.
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
        </div>
    );
}

export default Introduction;