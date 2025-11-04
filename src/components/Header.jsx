import { useState, useRef, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

const Header = () => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    const navLinks = [
        { label: "HOME", path: "#home" },
        { label: "GALLERY", path: "#gallery" },
        {
            label: "LET'S TALK",
            path: "#booking",
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

    const handleLinkClick = (e, path) => {
        e.preventDefault();

        setOpen(false);

        if (path === "#home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } else {
            const id = path.substring(1);
            const section = document.getElementById(id);
            
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <header className="text-[#0B0F17] relative">
            <div className="flex items-center justify-between px-4 py-3">
                <img
                    src="/Images/logo-removebg-preview.png"
                    alt="Logo"
                    className="w-36 md:w-40"
                />

                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className="hover:text-black transition flex items-center gap-2 cursor-pointer"
                        >
                            {link.label}
                        </a>
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
                    className="absolute rounded-[18px] top-[104%] left-3 right-3 bg-[#0B0F17] text-white px-4 py-3 z-50 md:hidden"
                >
                    <div className="flex justify-around">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.path}
                                onClick={(e) => handleLinkClick(e, link.path)}
                                className="hover:text-black transition flex items-center gap-2 cursor-pointer"
                            >
                                {link.label}
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;