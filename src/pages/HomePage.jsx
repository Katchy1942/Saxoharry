import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Gallery from "../components/Gallery" 

const HomePage = () => {
    return (
        <div className="bg-[#FFFFF0] text-black font-['Playfair Display']">
            <section className="bg-[#800020] min-h-screen text-center relative">
                <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:text-left space-y-6">
                        <p className="text-[#000000]">
                            Elevating your moments with soulful, unforgettable saxophone melodies — 
                            perfect for weddings, parties, and special celebrations.
                        </p>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full 
                                    bg-[#b9b97c]/70 border border-white/30 backdrop-blur-md 
                                    shadow-inner hover:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.4)] 
                                    transition-all duration-300 group"
                        >
                            <span className="font-bold text-black mr-2">Let's Work</span>
                            <FaArrowRight className="text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>
                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                        <div className="absolute w-80 md:w-[500px] aspect-square rounded-full bg-[#b9b97c]/40 blur-3xl"></div>
                        <img
                            src="/Saxoharry-removebg-.png"
                            alt="Saxoharry"
                            className="w-80 md:w-[500px] relative z-10"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#b9b97c] py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <Gallery />
                </div>
            </section>
        </div>
    );
};

export default HomePage;