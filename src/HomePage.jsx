import Header from "./components/Header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    ];

    const facePictures = [
        "/Images/man1.jpg",
        "/Images/boy1.jpg",
        "/Images/boy2.jpg",
        "/Images/girl1.jpg",
        "/Images/girl2.jpg",
    ];

    const testimonials = [
        {
            quote: `His performance was the highlight of our annual gala. Truly professional
                and incredibly talented. He set the perfect atmosphere for the entire evening.`,
            attribution: "Anita J., Corporate Event Planner"
        },
        {
            quote: `We had him play during our wedding ceremony and reception. There wasn't a dry 
                eye in the house. It was absolutely magical and unforgettable.`,
            attribution: "Charles & Stephanie, Newlyweds"
        },
        {
            quote: `Learning from Harry was the best decision I made. He is an incredibly patient 
                teacher and explains complex techniques in a way that's easy to understand. My 
                playing has improved more than I ever thought possible.`,
            attribution: "Chiamaka Okeke, Saxophone Student"
        },
        {
            quote: `As my tutor, Saxoharry didn't just teach me notes, he taught me how to express 
                myself through music. His passion is infectious, and my confidence as a 
                musician has grown incredibly. A true mentor.`,
            attribution: "Tunde Adebayo, Aspiring Musician"
        },
        {
            quote: `The way he plays is just pure soul. It's not just music; it's a complete experience. I 
                could listen to him for hours on end. Simply amazing.`,
            attribution: "Ugwu Peters, Jazz Enthusiast"
        },
        {
            quote: `From the first inquiry to the last note played, he was an absolute pleasure to work with.
                He understood our vision perfectly. A true class act.`,
            attribution: "Esther Chidimma, Wedding Coordinator"
        }
    ];

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [direction, setDirection] = useState(1);

    const handleNext = () => {
        setDirection(1);
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleWhatsAppRedirect = () => {
        const text = `Hello Saxoharry,\nMy name is ${name}.\n\n${message}`;
        const url = `https://wa.me/2347039883105?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    const galleryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const galleryItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const buttonHover = {
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
    };

    const testimonialVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            transition: { duration: 0.5, ease: "easeIn" }
        }),
    };

    return (
        <div className="text-[#0B0F17] font-['Josefin_Sans']">
            <section id="home" className="bg-[#800020] bg-cover bg-center bg-no-repeat min-h-screen text-center relative text-[#eef0f3] overflow-x-hidden">
                <Header />
                
                <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
                    <motion.div
                        className="md:w-1/2 md:text-left space-y-3 sm:space-y-4 md:space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-['Abhaya_Libre'] font-extrabold tracking-wide">
                            Ibaro Harrison 'Saxoharry' Chidalu
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed italic max-w-sm mx-auto md:mx-0 font-light">
                            Matchless Entertainment, Beautiful Memories.
                        </p>

                        <motion.a
                            href="https://wa.me/2347039883105"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#0B0F17] text-white px-7 border-2 border-black py-3 text-sm sm:text-base hover:opacity-90 transition mt-2 sm:mt-3 md:mt-4 font-semibold tracking-wider"
                            whileHover={buttonHover}
                        >
                            BOOK FOR YOUR EVENTS
                        </motion.a>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 flex justify-center relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="absolute w-64 sm:w-72 md:w-[500px] aspect-square rounded-full bg-[#b9b97c]/40 blur-3xl"></div>
                        <img
                            src="/Images/Saxoharry-removebg-.png"
                            alt="Saxoharry"
                            className="w-64 sm:w-72 md:w-[500px] relative z-10"
                        />
                    </motion.div>
                </div>
            </section>

            <section id="gallery" className="bg-[#0B0F17] text-[#eef0f3]">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 [20px]:grid-cols-4 xl:grid-cols-5 gap-4 mx-4 py-4"
                    variants={galleryContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {offerCards.map((card, index) => {
                        const rotation = index % 2 === 0 ? 'rotate-3' : '-rotate-3';

                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center"
                                variants={galleryItemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img
                                    src={card.src}
                                    alt={card.description}
                                    className={`
                                        h-80 sm:h-48 md:h-60 [20px]:h-72
                                        w-full border-3 rounded-3xl border-black
                                        object-cover ${rotation}
                                    `}
                                />
                                <p className="italic text-sm mt-2 font-light">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </section>

            <section
                id="testimonials"
                className="py-16 md:py-24 bg-[#07090e] text-[#eef0f3] overflow-x-hidden"
            >
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">

                    <motion.div
                        className="w-full md:w-1/2 md:order-2"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold font-['Abhaya_Libre'] tracking-wide mb-6">
                            Testimonial From Our <span className="text-[#800020]">Beloved</span> Clients
                        </h2>

                        <div className="md:hidden flex flex-col items-center gap-4 mb-10">
                            <div className="flex justify-center gap-3">
                                {[facePictures[0], facePictures[1], facePictures[2]].map((imageUrl, idx) => (
                                    <div
                                        key={`top-${idx}`}
                                        className={`rounded-full bg-cover border-2 border-black shadow-md 
                                        ${idx === 0 ? '-rotate-2 w-28 h-28' : idx === 1 ? 'rotate-1 w-14 h-14' : '-rotate-1 w-14 h-14'}`}
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                            backgroundPosition: 'top center'
                                        }}
                                    />
                                ))}
                            </div>

                            <div
                                className="w-24 h-24 rounded-full bg-cover border-2 border-black shadow-lg rotate-1 -mt-2"
                                style={{
                                    backgroundImage: `url(${facePictures[3]})`,
                                    backgroundPosition: 'top center'
                                }}
                            />

                            <div className="flex justify-center gap-4 -mt-1">
                                {[facePictures[4],].map((imageUrl, idx) => (
                                    <div
                                        key={`bottom-${idx}`}
                                        className={`rounded-full bg-cover border-2 border-black shadow-md 
                                        ${idx === 0 ? 'rotate-2  w-28 h-28' : '-rotate-2'}`}
                                        style={{
                                            backgroundImage: `url(${imageUrl})`,
                                            backgroundPosition: 'top center'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="relative h-40">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.p
                                    key={currentTestimonial}
                                    custom={direction}
                                    variants={testimonialVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute w-full"
                                >
                                    "{testimonials[currentTestimonial].quote}"
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="relative h-12">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.p
                                    key={currentTestimonial + "_attr"}
                                    custom={direction}
                                    variants={testimonialVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute w-full mt-4"
                                >
                                    {testimonials[currentTestimonial].attribution}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-4 mt-4">
                            <button onClick={handlePrev} className="hover:opacity-70 transition-opacity">
                                <img src="/icons/left_icon.png" alt="left" className="w-8 sm:w-12" />
                            </button>
                            <button onClick={handleNext} className="hover:opacity-70 transition-opacity">
                                <img src="/icons/left_icon.png" alt="right" className="w-8 sm:w-12 rotate-180" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 md:order-1 hidden md:flex"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="flex flex-wrap gap-6 sm:gap-10 justify-center items-center py-8">
                            {facePictures.map((imageUrl, index) => {
                                const rotation = index % 3 === 0 ? "rotate-2" : "-rotate-2";
                                const verticalOffset = (index % 3) * 1;
                                const isLarge = index === 0 || index === 4;
                                const sizeClass = isLarge
                                    ? "w-32 h-32 sm:w-48 sm:h-48"
                                    : "w-20 h-20 sm:w-32 sm:h-32";

                                return (
                                    <div
                                        key={index}
                                        className={`flex ${rotation} hover:rotate-0 transition-transform duration-300`}
                                        style={{ marginTop: `${verticalOffset}rem` }}
                                    >
                                        <div
                                            aria-label={`Client ${index + 1}`}
                                            className={`${sizeClass} border-4 border-black rounded-full shadow-lg bg-cover`}
                                            style={{
                                                backgroundImage: `url(${imageUrl})`,
                                                backgroundPosition: "top center"
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="booking" className="py-16 md:py-24 bg-[#030305] text-[#eef0f3] overflow-x-hidden">
                <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
                    <motion.div
                        className="md:w-1/2 w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-['Abhaya_Libre'] tracking-wide">
                            Let's Make Your Events <span className="text-[#800020]">Stand Out</span>
                        </h2>
                        <p className="italic text-base mb-8 font-light leading-relaxed">
                            You need something that sets your celebration apart? Add the rich, soulful sound of live saxophone. 
                            Fill out the form and let's craft an experience your guests will talk about long after the music ends.
                        </p>
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-widest mb-2">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Stephanie"
                                    required
                                    className="w-full text-sm p-3 border-2 border-black mt-2 focus:outline-none focus:ring-3 focus:ring-[#800020] font-['Josefin_Sans'] bg-transparent"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest mb-2">MESSAGE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="5"
                                    placeholder="I'll like you to perform at..."
                                    required
                                    className="w-full text-sm p-3 border-2 border-black mt-2 focus:outline-none focus:ring-3 focus:ring-[#800020] font-['Josefin_Sans'] bg-transparent"
                                ></textarea>
                            </div>
                        </div>
                        <motion.button
                            type="button"
                            onClick={handleWhatsAppRedirect}
                            disabled={!name || !message}
                            className="inline-block w-full border-2 border-black bg-[#800020] text-white mt-2 sm:mt-3 md:mt-4 px-7 py-3 text-sm sm:text-base hover:opacity-90 transition font-semibold tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
                            whileHover={!name || !message ? {} : buttonHover}
                        >
                            SEND INQUIRY
                        </motion.button>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 w-full hidden md:block"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
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
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;