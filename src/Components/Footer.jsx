import React from 'react';
import { CiMail, CiPhone } from "react-icons/ci";
import { PiDownloadSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='tracking-[.25em] cursor-pointer' style={{ backgroundColor: '#000000', padding: '20px' }}> {/* Set background to black */}

      <h3 className="footer text-4xl py-5 text-green-500" >Contact Me</h3>
      <p className="text-sm text-yellow-100">
        I&apos;m always on the lookout for opportunities to grow in the field of computer science and open source. If you believe that I could make a worthwhile contribution to your project or organization, contact me at the mail below. Looking forward to hearing from you!
      </p>
      <div className="icon-container">
        <div className="flex icon-item hover:scale-110">
          <CiMail className="text-white text-xl" />
          <Link to="mailto:suhailsharieffsharieff@gmail.com" className="text-sm text-green-500">
            - suhailsharieffsharieff@gmail.com
          </Link>
        </div>

        <div className="flex icon-item hover:scale-110">
          <CiPhone className="text-white text-xl hover:scale-110" />
          <p className="text-sm text-green-500"> - +91 80733 04481</p>
        </div>
        <div className="flex icon-item hover:scale-110">
          <PiDownloadSimple className="text-white text-xl hover:scale-110" />
          <a href="https://docs.google.com/document/d/156UJvfhqX69y1iD6UezbeQL_x6xlzg2xs6kZhwWvzAc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 hover:scale-110"> - Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
