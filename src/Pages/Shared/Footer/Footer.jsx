import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-white leading-relaxed">
            I am a passionate web developer specializing in building responsive, scalable, and modern web applications. I love crafting clean code and seamless user experiences.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to='/about' className="hover:text-secondary-focus transition-colors">About</Link></li>
            <li><Link to='/blog' className="hover:text-secondary-focus transition-colors">Blog</Link></li>
            <li><Link to='/services' className="hover:text-secondary-focus transition-colors">Services</Link></li>
            <li><Link to='/conact' className="hover:text-secondary-focus transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/md-ibrahim-hossain-76918836b" target="_blank" rel="noreferrer" className="text-white hover:text-secondary-focus transition-colors"><FaLinkedin size={28} /></a>
            <a href="https://github.com/BFIbrahim" target="_blank" rel="noreferrer" className="text-white hover:text-secondary-focus transition-colors"><FaGithub size={28} /></a>
            <a href="https://www.facebook.com/BFIbrahiMM" className="text-white hover:text-secondary-focus transition-colors"><FaFacebook size={28} /></a>
            <a href="https://x.com/MdIbrahim361" target="_blank" rel="noreferrer" className="text-white hover:text-secondary-focus transition-colors"><FaTwitter size={28} /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-primary/40 pt-6 text-center text-white">
        © {new Date().getFullYear()} Ibrahim Hossain. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
