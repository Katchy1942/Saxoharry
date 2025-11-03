import { Link } from "react-router-dom";

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

    return (
        <div className="text-[#0B0F17] -mt-px">
            <section className="bg-[#800020] min-h-screen text-center relative">
                <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
                    <div className="md:w-1/2 md:text-left space-y-3 sm:space-y-4 md:space-y-6">
                        <h1 className="text-[20px] sm:text-xl md:text-2xl leading-tight">
                            IBARO 'SAXOHARRY' CHIDALU
                        </h1>

                        <p className="text-[14px] sm:text-[15px] md:text-[17px] leading-snug sm:leading-normal italic max-w-sm mx-auto md:mx-0">
                            Elevating your moments with soulful, unforgettable saxophone melodies.
                        </p>

                        <Link
                            to="/booking"
                            className="inline-block bg-[#0B0F17] text-white px-5 py-3 rounded-[18px] md:rounded-[20px] text-sm sm:text-base hover:opacity-90 transition mt-2 sm:mt-3 md:mt-4"
                        >
                            BOOK FOR YOUR EVENTS
                        </Link>
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

            <section className="bg-[#0B0F17] text-[#eef0f3]">
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
        </div>
    );
};

export default HomePage;