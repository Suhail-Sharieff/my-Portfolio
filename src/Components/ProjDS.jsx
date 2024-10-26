import React, { useState } from 'react';
import Projects from './Projects';
import DSA from './DSA';

function ProjDS() {
  const [activeTab, setActiveTab] = useState('Projects');

  return (
    <div style={{ backgroundColor: '#000000', padding: '20px' }}> {/* Set background to black */}
      <style>
        {`
          .tab-button {
            width: 36%;
            padding: 10px;
            transition: all 0.3s ease;
            border: none;
            background: none;
            color: white;
            cursor: pointer;
            text-align: center;
          }
          .tab-button.active {
            border-bottom: 2px solid white;
          }
          .icon-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            margin-top: 20px;
          }
          @media (max-width: 768px) {
            h3 {
              font-size: 20px; /* Smaller heading on mobile */
            }
            .tab-button {
              width: 100%;
            }
            .text-sm {
              font-size: 0.875rem; /* Adjust text size on mobile */
            }
          }
        `}
      </style>

      <section className="tracking-[.25em] flex flex-col w-full space-y-5">
      <h3 className="footer text-4xl py-5 text-green-500" >Activity</h3>
        <div className="flex flex-row gap-4">
          <button 
            className={`tab-button ${activeTab === 'Projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('Projects')}
          >
            Projects
          </button>
          <button 
            className={`tab-button ${activeTab === 'DSA' ? 'active' : ''}`}
            onClick={() => setActiveTab('DSA')}
          >
            DSA
          </button>
        </div>
        <div className="icon-container">
          {activeTab === 'Projects' && <Projects />}
          {activeTab === 'DSA' && <DSA />}
        </div>
      </section>
    </div>
  );
}

export default ProjDS;
