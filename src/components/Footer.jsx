import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#111] text-gray-300 py-2">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                {/* Socials */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#3b5998] transition">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E1306C] transition">
                        <FaInstagram />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#1DA1F2] transition">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;