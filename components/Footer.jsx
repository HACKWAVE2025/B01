import React from "react";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-black text-white/60">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left text-sm">
          © 2025 Virtual Health. All Rights Reserved.
        </div>

        <ul className="flex gap-6 mt-4 sm:mt-0">
          <li>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
