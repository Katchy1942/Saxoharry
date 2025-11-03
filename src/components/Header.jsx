import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    const navLinks = [
        { label: "HOME", path: "/" },
        { label: "GALLERY", path: "/gallery" },
        { 
            label: "LET'S TALK", 
            path: "/booking", 
            icon: <MessageCircle className="w-5 h-5" strokeWidth={1} /> 
        },
    ];

    useEffect(() => {
        const handleClick = (e) => {
            if (panelRef.current && !panelRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [open]);

    return (
        <header className="bg-[#800020] text-[#0B0F17] relative">
            <div className="flex items-center justify-between px-4 py-3">
                <img
                    src="/Images/logo-removebg-preview.png"
                    alt="Logo"
                    className="w-36 md:w-40"
                />

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link, i) => (
                        <Link 
                            key={i} 
                            to={link.path} 
                            className="hover:text-black transition flex items-center gap-2"
                        >
                            {link.label}
                            {link.icon}
                        </Link>
                    ))}
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    onMouseDown={(e) => e.stopPropagation()}
                    className="md:hidden p-1 rounded-[11px] border border-[#0B0F17]"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                >
                    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            {open && (
                <div
                    ref={panelRef}
                    className="absolute rounded-[18px] top-[104%] left-1 right-1 bg-[#0B0F17] text-white px-4 py-3 z-50 md:hidden"
                >
                    <div className="flex justify-around">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                to={link.path}
                                onClick={() => setOpen(false)}
                                className="hover:text-black transition flex items-center gap-2"
                            >
                                {link.label}
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;