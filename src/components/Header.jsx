import { useState, useRef, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const panelVariants = {
    hidden: {
        opacity: 0,
        scale: 0.95,
        y: -20,
        transition: {
            duration: 0.2,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 30,
            staggerChildren: 0.07,
        },
    },
};

const linkVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const panelRef = useRef(null);

    const navLinks = [
        { label: "HOME", path: "#home" },
        { label: "GALLERY", path: "#gallery" },
        {
            label: "LET'S TALK",
            path: "#booking",
            icon: <MessageCircle className="w-5 h-5" strokeWidth={1} />,
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
                    className="md:hidden p-1 text-[#fff] bg-[#0B0F17]"
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                >
                    {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        ref={panelRef}
                        className="absolute rounded-[18px] top-[104%] left-3 right-3 bg-[#0B0F17] text-white px-4 py-3 z-50 md:hidden"
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div className="flex justify-around">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={i}
                                    href={link.path}
                                    onClick={(e) => handleLinkClick(e, link.path)}
                                    className="hover:text-black transition flex items-center gap-2 cursor-pointer"
                                    variants={linkVariants}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;