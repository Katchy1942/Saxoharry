const Footer = () => {
    return (
        <div className="bg-[#000] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-light mb-4">SAXOHARRY</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating your events with soulful saxophone melodies. 
                            Available for weddings, corporate events, and special occasions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#about" className="hover:text-white transition">About</a></li>
                            <li><a href="#services" className="hover:text-white transition">Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-light mb-4">Get In Touch</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>📧 saxoharry@email.com</li>
                            <li>📱 +234 XXX XXX XXXX</li>
                            <li>📍 Port Harcourt, Nigeria</li>
                        </ul>
                        {/* Social Media */}
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="hover:text-white transition">Instagram</a>
                            <a href="#" className="hover:text-white transition">Facebook</a>
                            <a href="#" className="hover:text-white transition">YouTube</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} SaxoHarry. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer