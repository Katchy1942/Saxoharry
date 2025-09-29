import { useState } from "react";

const images = [
    "https://picsum.photos/id/1015/600/600",
    "https://picsum.photos/id/1025/600/600",
    "https://picsum.photos/id/1035/600/600",
    "https://picsum.photos/id/1045/600/600",
    "https://picsum.photos/id/1055/600/600",
    "https://picsum.photos/id/1065/600/600",
    "https://picsum.photos/id/1075/600/600",
    "https://picsum.photos/id/1084/600/600",
    "https://picsum.photos/id/110/600/600",
    "https://picsum.photos/id/111/600/600",
    "https://picsum.photos/id/112/600/600",
    "https://picsum.photos/id/113/600/600",
    "https://picsum.photos/id/114/600/600",
    "https://picsum.photos/id/115/600/600",
    "https://picsum.photos/id/116/600/600",
    "https://picsum.photos/id/117/600/600",
    "https://picsum.photos/id/118/600/600",
    "https://picsum.photos/id/119/600/600",
    "https://picsum.photos/id/120/600/600",
];

const Gallery = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="container mx-auto px-2 py-10">
            <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

            {/* Masonry-like grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[150px]">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`
                            relative overflow-hidden border border-[#c0c0a2] group cursor-pointer
                            ${index % 7 === 0 ? "row-span-2 col-span-2" : ""}
                            ${index % 5 === 0 ? "row-span-2" : ""}
                        `}
                        onClick={() => setSelected(src)}
                    >
                        <img
                            src={src}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-white text-3xl font-bold"
                        onClick={() => setSelected(null)}
                    >
                        ×
                    </button>
                    <img
                        src={selected}
                        alt="Enlarged"
                        className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default Gallery;