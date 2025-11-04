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
            link: 'https://wa.me/${2347039883105}',
            name: 'Whatsapp'
        },
    ]
    return (
        <div className="bg-[#000] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-8">
                    <div>
                        <h3 className="text-xl font-light mb-4">IBARO 'SAXOHARRY' CHIDALU</h3>
                        <p className="text-gray-300 max-w-md text-sm leading-relaxed">
                            Elevating your events with soulful saxophone melodies. 
                            Available for weddings, corporate events, and special occasions.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-light mb-4">LET'S VIBE</h3>
                        <div className="flex flex-wrap gap-5">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition"
                                >
                                    <img
                                        src={link.icon}
                                        alt={`${link.name} link`}
                                        className="w-6 h-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#111] pt-6 text-center text-gray-400 text-xs">
                    <p>&copy; {new Date().getFullYear()} SaxoHarry. All rights reserved.</p>
                    <p className="mt-1">
                        As designed and tought by,{" "}
                       <a 
                            href="https://wa.me/${2347044263024}" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-white underline transition"
                        >
                            Stanley 'Katchy' Onah
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer