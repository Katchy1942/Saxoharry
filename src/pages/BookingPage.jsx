import React, { useState } from "react";

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        whatsapp: "",
        location: "",
        category: "",
        message: "",
    });

    // update handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "2347039883105";
        const text = `*NEW BOOKING REQUEST*

        Location: ${formData.location}
        Category: ${formData.category}

        Hi, I'm ${formData.name}
        Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappURL, "_blank"); // Opens WhatsApp
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#b9b97c] px-4 py-10">
            <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Booking Form
                </h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 text-gray-700 font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black outline-none transition"
                        />
                    </div>

                    {/* WhatsApp */}
                    <div className="flex flex-col">
                        <label htmlFor="whatsapp" className="mb-2 text-gray-700 font-medium">
                            WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            placeholder="+234 801 234 5678"
                            required
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black outline-none transition"
                        />
                    </div>

                    {/* Location */}
                    <div className="flex flex-col">
                        <label htmlFor="location" className="mb-2 text-gray-700 font-medium">
                            Location of Event
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter event address"
                            required
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black outline-none transition"
                        />
                    </div>

                    {/* Category */}
                    <div className="flex flex-col">
                        <label htmlFor="category" className="mb-2 text-gray-700 font-medium">
                            Event Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black outline-none transition bg-white"
                        >
                            <option value="">Select a category</option>
                            <option value="wedding">Wedding</option>
                            <option value="birthday">Birthday</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="concert">Concert</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-2 text-gray-700 font-medium">
                            Additional Details
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Any extra info about the event..."
                            className="px-4 py-2 rounded-lg border-2 border-gray-300 focus:border-black focus:ring-2 focus:ring-black outline-none transition resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition"
                    >
                        Book Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingPage;