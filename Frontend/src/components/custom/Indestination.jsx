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
        <div className="w-full px-4 py-8 md:p-6 lg:p-8 relative">
            <h2 className="text-2xl md:text-3xl font-bold text-left mb-4 md:mb-6">
                Discover the Best Destinations in India
            </h2>
            <div className="relative">
                {/* Left Scroll Button */}
                {showLeftButton && (
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1.5 md:p-2 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center"
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft size={20} />
                    </button>
                )}

                {/* Scrollable Destinations */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 md:gap-4 px-0 md:px-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {destinations.map((dest, index) => (
                        <div
                            key={index}
                            className="snap-start min-w-[220px] sm:min-w-[280px] md:min-w-[320px] flex-shrink-0 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-40 sm:h-48 object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                                <h3 className="text-white text-base md:text-lg font-semibold">{dest.name}</h3>
                                <p className="text-white/90 text-xs md:text-sm mt-1">
                                    From <span className="font-bold">{dest.price}</span> per day
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Scroll Button */}
                {showRightButton && (
                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1.5 md:p-2 bg-white rounded-full shadow-lg hidden md:flex items-center justify-center"
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                    >
                        <ChevronRight size={20} />
                    </button>
                )}
            </div>
            
            {/* Mobile scroll indicators */}
            <div className="flex justify-center mt-4 gap-1 md:hidden">
                {Array.from({ length: destinations.length }).map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-1 rounded-full w-6 ${
                            index === 0 ? 'bg-gray-800' : 'bg-gray-300'
                        }`} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Indestination;
