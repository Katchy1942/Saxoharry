import { Link } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";


const HomePage = () => {
    const offerCards = [
        {
            src: "/Images/birthdays.png",
            description: "Birthdays & Celebrations"
        },
        {
            src: "/Images/private_events.jpg",
            description: "Corporate & Private Events"
        },
        {
            src: "/Images/training.jpg",
            description: "Training & Workshops"
        },
        {
            src: "/Images/weddings.png",
            description: "Weddings & Receptions"
        },
        {
            src: "/Images/worship.jpg",
            description: "Live worship sessions"
        },
    ]

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleWhatsAppRedirect = () => {
        const text = `Hello Saxoharry,\nMy name is ${name}.\n\n${message}`;

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
    };

    return (
        <div className="text-[#0B0F17]">
            <section id="home" className="bg-[#800020] bg-cover bg-center bg-no-repeat min-h-screen text-center relative">
                <Header />
                
                <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-left space-y-3 sm:space-y-4 md:space-y-6">
                        <h1 className="text-[20px] sm:text-xl md:text-2xl leading-tight">
                            IBARO 'SAXOHARRY' CHIDALU
                        </h1>

                        <p className="text-[14px] sm:text-[15px] md:text-[17px] leading-snug sm:leading-normal italic max-w-sm mx-auto md:mx-0">
                            Elevating your moments with soulful, unforgettable saxophone melodies.
                        </p>

                        <a
                            href="https://wa.me/${2347039883105}"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0B0F17] text-white px-7 border-2 border-black py-3 text-sm sm:text-base hover:opacity-90 transition mt-2 sm:mt-3 md:mt-4"
                        >
                            BOOK FOR YOUR EVENTS
                        </a>
                    </div>

                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="absolute w-64 sm:w-72 md:w-[500px] aspect-square rounded-full bg-[#b9b97c]/40 blur-3xl"></div>
                        <img
                            src="/Images/Saxoharry-removebg-.png"
                            alt="Saxoharry"
                            className="w-64 sm:w-72 md:w-[500px] relative z-10"
                        />
                    </div>
                </div>
            </section>

            <section id="gallery" className="bg-[#0B0F17] text-[#eef0f3]">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 [20px]:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 py-4">
                    {offerCards.map((card, index) => {
                        const rotation = index % 2 === 0 ? 'rotate-3' : '-rotate-3';

                        return (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={card.src}
                                    alt={card.description}
                                    className={`
                                        h-80 sm:h-48 md:h-60 [20px]:h-72
                                        w-full border-3 rounded-3xl border-black
                                        object-cover ${rotation}
                                    `}
                                />
                                <p className="italic text-sm mt-2">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section id="booking" className="py-16 md:py-24 bg-[#07090e] text-[#eef0f3]">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2 w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            LET'S MAKE YOUR EVENT <span className="italic text-[#800020]">UNFORGETTABLE</span>
                        </h2>
                        <p className="italic text-sm mb-8">
                            Looking for a unique touch for your event? Fill out the form, and let's discuss how we can bring soulful saxophone melodies to your special day.
                        </p>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Stephanie"
                                    className="w-full text-sm p-3 border-2 border-black mt-2 focus:outline-none focus:ring-3 focus:ring-[#000000]"
                                />
                            </div>
                            <div>
                                <label htmlFor="message">MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    placeholder="I'll like you to perform at..."
                                    className="w-full text-sm p-3 border-2 border-black mt-2 focus:outline-none focus:ring-3 focus:ring-[#000000]"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={handleWhatsAppRedirect}
                            disabled={!name || !message}
                            className="inline-block w-full border-2 border-black bg-[#0B0F17] text-white mt-2 sm:mt-3 md:mt-4 px-7 py-3 text-sm sm:text-base hover:opacity-90 transition"
                        >
                            SEND INQUIRY
                        </button>
                    </div>
                    <div className="md:w-1/2 w-full hidden md:block">
                        <div className="grid grid-cols-1 gap-8">
                            {offerCards.slice(0, 3).map((card, index) => {
                                const rotation = index % 2 === 0 ? 'rotate-3' : '-rotate-3';

                                return (
                                    <div key={index} className="flex flex-col items-center">
                                        <img
                                            src={card.src}
                                            alt={card.description}
                                            className={`
                                                h-80 sm:h-48 md:h-60
                                                w-full border-3 rounded-3xl border-black
                                                object-cover ${rotation}
                                            `}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;