import React from 'react';
import { FaEnvelope, FaPhone, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaArrowUp, FaCode } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

// --- Accent Color Constants (Set to green/Teal) ---
const ACCENT_COLOR_CLASS = 'text-green-400';
const ACCENT_HOVER_CLASS = 'hover:text-green-400';
const BORDER_COLOR_CLASS = 'border-green-700/50';
// --------------------------------------------------


// Reusable component for contact items (Enhanced with green)
const ContactItem = ({ icon: Icon, href, text }) => (
    <a href={href} className={`flex items-center text-gray-400 ${ACCENT_HOVER_CLASS} transition-colors duration-300 group`}>
        {/* Icon color set to the bright accent */}
        <Icon className={`w-5 h-5 mr-3 ${ACCENT_COLOR_CLASS}`} /> 
        <span className="group-hover:underline font-mono text-sm">{text}</span>
    </a>
);

// Reusable component for social links (Enhanced with green)
const SocialLink = ({ href, icon: Icon, tooltip }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-gray-400 ${ACCENT_HOVER_CLASS} transition-colors duration-300 group relative p-2`}
    >
        <Icon size={24} />
        {/* Tooltip styling unchanged */}
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {tooltip}
        </span>
    </a>
);

// Note: FooterNavLink is removed as Quick Links are no longer needed.


function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        // Footer maintains black background
        <footer className="bg-black text-white py-12 px-8 font-sans">
            <div className="max-w-6xl mx-auto">
                {/* Main footer grid: Changed to grid-cols-3 for cleaner layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 border-b border-gray-800 pb-10">
                    
                    {/* Column 1: Contact & Message */}
                    <div className="text-center md:text-left">
                        <h3 className={`text-2xl font-extrabold ${ACCENT_COLOR_CLASS} mb-4 tracking-tight flex items-center justify-center md:justify-start`}>
                            <FaCode className="mr-2" />
                            GET IN TOUCH
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I'm actively seeking new opportunities, collaborations, and ambitious projects. Let's build something impactful together.
                        </p>
                        
                        {/* Contact Items */}
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <ContactItem icon={FaEnvelope} href="mailto:suhailsharieffsharieff@gmail.com" text="suhailsharieffsharieff@gmail.com" />
                            <ContactItem icon={FaPhone} href="tel:+918618069885" text="+91 86180 69885" />
                        </div>
                    </div>

                    
                    {/* Column 2 (Now centered): Resume & Social Media */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-300 mb-4 tracking-wider uppercase">Resources</h3>
                        
                        {/* Resume Button (Prominent) */}
                        <a 
                            href="https://drive.google.com/file/d/1S45dJQJr14F7X7ZtZ967kJTvvC3-lm-R/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 mb-6 text-sm font-semibold rounded-lg ${ACCENT_COLOR_CLASS} border-2 border-green-700/50 hover:bg-green-900/50 transition-all duration-300`}
                        >
                            <FaDownload className="mr-2" />
                            VIEW RESUME (PDF)
                        </a>

                        <h3 className="text-lg font-semibold text-gray-400 mb-3 tracking-wide">Social</h3>
                        <div className="flex justify-center gap-4">
                            <SocialLink href="https://github.com/Suhail-Sharieff" icon={FaGithub} tooltip="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/suhail-sharieff-2a4500290/" icon={FaLinkedin} tooltip="LinkedIn" />
                            <SocialLink href="https://x.com/SuhailShar62488" icon={SiX} tooltip="Twitter/X" /> 
                        </div>
                    </div>
                    
                    {/* Column 3: Placeholder (Ensures 3 columns if needed, otherwise this can be empty) */}
                    <div className="hidden md:block">
                        {/* This column is intentionally left blank for a clean 3-column distribution on large screens. */}
                    </div>

                </div>

                {/* Footer bottom bar */}
                <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-600 font-mono text-sm">
                    <p className="order-2 sm:order-1 mt-4 sm:mt-0">&copy; {currentYear} Suhail Sharieff. All Rights Reserved.</p>
                    
                    <button 
                        onClick={scrollToTop} 
                        className={`order-1 sm:order-2 flex items-center text-gray-400 ${ACCENT_HOVER_CLASS} transition-colors duration-300`}
                        aria-label="Back to top"
                    >
                        Scroll to Top <FaArrowUp className="ml-2" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;