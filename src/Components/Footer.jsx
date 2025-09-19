import React from 'react';
import { FaEnvelope, FaPhone, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

// Reusable component for contact items
const ContactItem = ({ icon: Icon, href, text }) => (
    <a href={href} className="flex items-center text-gray-400 hover:text-green-500 transition-colors duration-300 group">
        <Icon className="w-5 h-5 mr-3 text-green-500" />
        <span className="group-hover:underline">{text}</span>
    </a>
);

// Reusable component for social links
const SocialLink = ({ href, icon: Icon, tooltip }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-green-500 transition-colors duration-300 group relative"
    >
        <Icon size={24} />
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {tooltip}
        </span>
    </a>
);

// Reusable component for footer navigation links
const FooterNavLink = ({ href, text }) => (
     <a href={href} className="text-gray-400 hover:text-green-500 transition-colors duration-300 hover:underline">
        {text}
    </a>
);


function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-black text-white py-12 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 text-center md:text-left">
                    
                    {/* Column 1: Get in Touch */}
                    <div>
                        <h3 className="text-xl font-bold text-green-500 mb-4 tracking-wider">GET IN TOUCH</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                           I'm actively seeking new opportunities. Feel free to reach out if you have a project or role where I can contribute.
                        </p>
                        <div className="flex flex-col items-center md:items-start space-y-3">
                            <ContactItem icon={FaEnvelope} href="mailto:suhailsharieffsharieff@gmail.com" text="suhailsharieffsharieff@gmail.com" />
                            <ContactItem icon={FaPhone} href="tel:+918618069885" text="+91 86180 69885" />
                            <ContactItem icon={FaDownload} href="https://drive.google.com/file/d/1olnuEXsK8_BwHZS6L1iyiA37Fu1glmEZ/view?usp=sharing" text="Download Resume" />
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-green-500 mb-4 tracking-wider">QUICK LINKS</h3>
                        <div className="flex flex-col items-center md:items-start space-y-3">
                           <FooterNavLink href="#home" text="Home" />
                           <FooterNavLink href="#projects" text="Projects" />
                           <FooterNavLink href="#technologies" text="Technologies" />
                           <FooterNavLink href="#contact" text="Contact" />
                        </div>
                    </div>

                    {/* Column 3: Social Media */}
                    <div>
                        <h3 className="text-xl font-bold text-green-500 mb-4 tracking-wider">CONNECT WITH ME</h3>
                        <div className="flex justify-center md:justify-start gap-6 mt-4">
                            <SocialLink href="https://github.com/Suhail-Sharieff" icon={FaGithub} tooltip="GitHub" />
                            <SocialLink href="https://www.linkedin.com/in/suhail-sharieff-2a4500290/" icon={FaLinkedin} tooltip="LinkedIn" />
                            <SocialLink href="https://x.com/SuhailShar62488" icon={FaTwitter} tooltip="Twitter/X" />
                        </div>
                    </div>
                </div>

                {/* Footer bottom bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500">
                    <p>&copy; {currentYear} Suhail Sharieff. All Rights Reserved.</p>
                    <button 
                        onClick={scrollToTop} 
                        className="mt-4 sm:mt-0 flex items-center hover:text-green-500 transition-colors duration-300"
                        aria-label="Back to top"
                    >
                        Back to Top <FaArrowUp className="ml-2" />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
