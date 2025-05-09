import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa';
import { SiVite, SiMongodb, SiCplusplus, SiSpringboot, SiFlutter, SiMedium, SiX } from "react-icons/si";
import { Link } from 'react-router-dom';

function Introduction() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ backgroundColor: '#000000', padding: '20px', position: 'relative' }}>
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
                        cursor: pointer;
                    }
                    .icon-item:hover .tooltip {
                        opacity: 1;
                    }
                    .tooltip {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        margin-top: 2px;
                        background-color: #4a5568;
                        color: white;
                        font-size: 0.75rem;
                        border-radius: 0.25rem;
                        padding: 0.25rem 0.5rem;
                        opacity: 0;
                        transition: opacity 0.3s ease;
                    }
                    .tooltip::after {
                        content: '';
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        margin-left: -5px;
                        border-width: 5px;
                        border-style: solid;
                        border-color: #4a5568 transparent transparent transparent;
                    }
                    @media (max-width: 768px) {
                        h1 {
                            font-size: 40px;
                        }
                        .text-gray-500 {
                            font-size: 0.875rem;
                        }
                    }
                `}
            </style>

            <section className="flex flex-col items-center w-full hover:cursor-pointer tracking-[.20em] ">
                <section className="flex flex-col w-full">
                    <h1 className="intro text-green-500" style={{ fontSize: '60px' }}>Suhail Sharieff</h1>
                    <div className="text-gray-500 text-2xl">
                        <span className='text-violet-200'>
                            19M, Student | Bangalore, Karnataka, India | <span className="text-orange-600">{currentTime.toLocaleTimeString()}</span>
                        </span>
                    </div>

                </section>

                <section className="flex flex-col w-full gap-y-5">
                    <p className="text-yellow-500 text-sm tracking-[.25em]">
                        Hey There!<span className="text-3xl tracking-[.25em] ">👋</span>. I&apos;m a 19-year-old student, currently pursuing my B.Tech in Computer Science @ <b>University Visveswarayya College of Engineering</b>.
                    </p>
                    <p className="text-md tracking-[.25em] text-yellow-100">
                        Currently delving into Development and DSA. On the side, I also hone skills in Full Stack Web Development including Andriod Development. Apart from coding, I take deep interest in the happenings of the world and the latest in tech...
                    </p>
                </section>
            </section>
        </div>
    );
}

export default Introduction;
