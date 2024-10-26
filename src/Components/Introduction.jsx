import React from 'react';
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';
import { SiVite, SiMongodb, SiCplusplus, SiSpringboot, SiFlutter, SiMedium, SiX } from "react-icons/si";
import { Link } from 'react-router-dom';

function Introduction() {
    return (
        <div style={{ backgroundColor: '#000000', padding: '20px' }}> {/* Set background to black */}
            <style>
                {`
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
                    @media (max-width: 768px) {
                        h1 {
                            font-size: 40px; /* Smaller heading on mobile */
                        }
                        .text-gray-500 {
                            font-size: 0.875rem; /* Adjust text size on mobile */
                        }
                    }
                `}
            </style>
            <section className="flex flex-col items-center w-full hover:cursor-pointer tracking-[.20em] ">
                <section className="flex flex-col w-full  ">
                    <h1 className="intro text-green-500" style={{ fontSize: '60px'}}>Suhail Sharieff</h1>
                    <div className="text-gray-500 text-sm">
                        <span className='text-violet-200'>19M, Student | Bangalore, Karnataka, India | </span>
                    </div>
                </section>
                <section className="flex flex-col w-full gap-y-5  ">
                <p className="text-yellow-500 text-sm tracking-[.25em]">
    Hey There!<span className="text-xl tracking-[.25em] ">👋</span>. I&apos;m a 19-year-old student, currently pursuing my B.Tech in Computer Science @ <b>University Visveswarayya College of Engineering</b>.
</p>
<p className="text-sm tracking-[.25em] text-yellow-100" >
    Currently delving into Development and DSA. On the side, I also dabble in Full Stack Development including technologies like the MERN Stack. Apart from coding, I take deep interest in the happenings of the world and the latest in tech...
</p>

                </section>
            </section>
        </div>
    );
}

export default Introduction;
