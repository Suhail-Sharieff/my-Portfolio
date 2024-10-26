import React from 'react'
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';
import { SiVite, SiMongodb, SiCplusplus, SiSpringboot, SiFlutter, SiMedium, SiX } from "react-icons/si";
import { Link } from 'react-router-dom';

function SocialLinks() {
    return (
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

                <div className="icon-container">
                    {[
                        {
                            icon: <FaLinkedin className="text-white text-3xl hover:text-blue-400 floating-icon" />,
                            label: "Linkedln",
                            url: 'https://www.linkedin.com/in/suhail-sharieff-2a4500290/?originalSubdomain=in'
                        },
                        {
                            icon: <FaGithub className="text-white text-3xl hover:text-gray-500 floating-icon" />,
                            label: "Github",
                            url: 'https://github.com/Suhail-Sharieff'
                        },
                        {
                            icon: <FaReddit className="text-white text-3xl hover:text-orange-500 floating-icon" />,
                            label: "Reddit",
                            url: 'https://www.reddit.com/user/SuhailSharieff/'
                        },
                        {
                            icon: <SiMedium className="text-white text-3xl hover:text-gray-800 floating-icon" />,
                            label: "Medium",
                            url: 'https://medium.com/@suhailsharieffsharieff'
                        },
                        {
                            icon: <SiX className="text-white text-3xl hover:text-gray-600 floating-icon" />,
                            label: "Medium",
                            url: 'https://x.com/SuhailShar62488?t=TlpMdK9CAJCE7UUknl5xiw&s=09'
                        }
                    ].map(({ icon, label, url }, index) => (
                        <div key={index} className="icon-item">
                            <Link to={url}>
                                {React.cloneElement(icon)}
                                <span className="tooltip">{label}</span>
                            </Link>
                        </div>
                    ))}
                </div>


            </section>
        </div>
    );
}

export default SocialLinks