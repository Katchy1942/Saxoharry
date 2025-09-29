import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-[#800020] text-[#000000]">
            <div className="container mx-auto flex justify-center items-center py-4 px-6">
                {/* Navigation */}
                <nav className="space-x-6">
                    <Link to="/" className="hover:text-white transition">Home</Link>
                    <Link to="/gallery" className="hover:text-white transition">Gallery</Link>
                    <Link to="/booking" className="hover:text-white transition">Booking</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;