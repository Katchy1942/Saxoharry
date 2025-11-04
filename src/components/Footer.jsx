import { motion } from "framer-motion";

const Footer = () => {
    const links = [
        {
            icon: '/icons/facebook.png',
            link: 'https://web.facebook.com/harrison.ibaro',
            name: 'Facebook'
        },
        {
            icon: '/icons/instagram.png',
            link: 'https://www.instagram.com/saxoharry/',
            name: 'Instagram'
        },
        {
            icon: '/icons/tiktok.png',
            link: 'https://www.tiktok.com/@saxoharry',
            name: 'TikTok'
        },
        {
            icon: '/icons/gmail.png',
            link: 'mailto:Saxoharryentertainment@gmail.com',
            name: 'Gmail'
        },
        {
            icon: '/icons/x.png',
            link: 'https://x.com/saxoharry',
            name: 'X (Twitter)'
        },
        {
            icon: '/icons/linkedin.png',
            link: 'https://www.linkedin.com/in/harrison-ibaro-537a37265/',
            name: 'LinkedIn'
        },
        {
            icon: '/icons/whatsapp.png',
            link: 'https://wa.me/2347039883105',
            name: 'Whatsapp'
        },
    ];

    const footerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const socialIconVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 }
    };

    const iconHover = {
        scale: 1.25,
        y: -3,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    return (
        <motion.div
            className="bg-[#000] text-white py-12 px-4 font-['Josefin_Sans'] overflow-x-hidden"
            variants={footerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-['Abhaya_Libre'] font-semibold tracking-wide uppercase mb-4">IBARO 'SAXOHARRY' CHIDALU</h3>
                        <p className="text-gray-300 max-w-md text-sm leading-relaxed font-light">
                            Elevating your events with soulful saxophone melodies.
                            Available for weddings, corporate events, and special occasions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-['Abhaya_Libre'] font-semibold tracking-wide uppercase mb-4">LET'S VIBE</h3>
                        <motion.div
                            className="flex flex-wrap gap-5"
                            variants={socialContainerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {links.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                    variants={socialIconVariants}
                                    whileHover={iconHover}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <img
                                        src={link.icon}
                                        alt={`${link.name} link`}
                                        className="w-6 h-6"
                                    />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-[#111] pt-6 text-center text-gray-400 text-xs font-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; {new Date().getFullYear()} SaxoHarry. All rights reserved.</p>
                    <p className="mt-1">
                        As designed and tought by,{" "}
                        <a
                            href="https://wa.me/2347044263024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white underline transition font-medium"
                        >
                            Stanley 'Katchy' Onah
                        </a>
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Footer;