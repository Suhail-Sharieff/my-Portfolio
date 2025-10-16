import React, { useState } from 'react'; // Removed Suspense from import
import Projects from './Projects'; // Assumes this is your ProjectsCard component
import DSA from './DSA';           // Assumes this is your DSA activity component
import { FaLaptopCode, FaCogs } from 'react-icons/fa'; // Icons for visual appeal

// Define the accent color constants for consistency
const ACCENT_COLOR = 'text-green-400';
const ACCENT_BORDER = 'border-green-400';
const ACCENT_HOVER_BG = 'hover:bg-green-900/40';

function ProjDS() {
    const [activeTab, setActiveTab] = useState('Projects');

    // Tab Data for cleaner rendering
    const tabs = [
        { id: 'Projects', name: 'Software Projects', icon: FaLaptopCode, component: Projects },
        { id: 'DSA', name: 'Competitive Programming', icon: FaCogs, component: DSA },
    ];

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;

    return (
        // Main container: full width, padding, full black background, centered content
        <div className="bg-black text-white w-full py-12 px-4 md:px-8 font-sans">
            <section className="max-w-6xl mx-auto">
                {/* Section Title (Enhanced) */}
                <h3 className={`text-4xl md:text-5xl font-extrabold mb-8 ${ACCENT_COLOR} tracking-tight border-b border-gray-800 pb-3`}>
                    My Activity
                </h3>

                {/* Tab Bar Container */}
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-10 border-b border-gray-700">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        const Icon = tab.icon;

                        return (
                            <button
                                key={tab.id}
                                className={`
                                    flex items-center justify-center sm:justify-start
                                    w-full sm:w-auto px-6 py-3 text-lg font-semibold 
                                    transition-all duration-300 cursor-pointer 
                                    rounded-t-lg ${ACCENT_HOVER_BG}
                                    
                                    ${isActive
                                        ? `text-white border-b-2 ${ACCENT_BORDER} shadow-md`
                                        : 'text-gray-400 border-b-2 border-transparent'
                                    }
                                `}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <Icon className={`mr-2 ${isActive ? ACCENT_COLOR : 'text-gray-500'}`} size={20} />
                                {tab.name}
                            </button>
                        );
                    })}
                </div>

                {/* Content Display Area (CLEANED) */}
                <div className="py-6 min-h-[500px]">
                    {/* The fallback div is typically for Suspense, but kept here as a visual safeguard */}
                    {!ActiveComponent && <div className="text-gray-500 text-center py-20">Loading content...</div>}
                    
                    {/* Render the active component */}
                    {ActiveComponent && <ActiveComponent />}
                </div>
            </section>
        </div>
    );
}

export default ProjDS;