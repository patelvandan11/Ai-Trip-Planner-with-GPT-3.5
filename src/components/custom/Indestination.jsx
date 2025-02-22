import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const destinations = [
    { name: "Nagaland", price: "₹3,493", image: "Nagaland.jpg" },
    { name: "Andhra Pradesh", price: "₹4,253", image: "andhra.jpg" },
    { name: "Punjab", price: "₹3,852", image: "punjab.jpg" },
    { name: "Mizoram", price: "₹1,736", image: "mizoram.jpg" },
    { name: "Delhi", price: "The Heart of India", image: "delhi.jpg" },
    { name: "Gujarat", price: "₹4,850", image: "gujarat.jpg" },
];

const Indestination = () => {
    const scrollRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        handleScroll();
        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <div className="w-full p-6 py-8 relative overflow-x-hidden">
            <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
                Discover the Best Destinations in India
            </h2>
            <div className="relative flex items-center">
                {/* Left Scroll Button */}
                {showLeftButton && (
                    <button
                        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg hidden md:flex"
                        onClick={() => scroll("left")}
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                {/* Scrollable Destinations */}
                <div
                    ref={scrollRef}
                    className="flex space-x-4 px-2 md:px-8 scroll-smooth no-scrollbar overflow-x-auto md:overflow-y-hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0 relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
                            style={{ transition: "transform 0.3s ease-in-out" }}
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
                                <h3 className="text-white text-lg font-semibold">{dest.name}</h3>
                                <p className="text-white text-sm">
                                    From <span className="font-bold">{dest.price}</span> /- per day
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                {showRightButton && (
                    <button
                        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg hidden md:flex"
                        onClick={() => scroll("right")}
                    >
                        <ChevronRight size={24} />
                    </button>
                )}
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .flex {
                        flex-direction: column;
                        overflow-y: auto;
                        overflow-x: hidden;
                    }
                    .space-x-4 {
                        margin-bottom: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Indestination;
