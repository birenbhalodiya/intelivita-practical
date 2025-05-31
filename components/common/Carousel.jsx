'use client';

import { useEffect, useState, useRef } from 'react';

export default function Carousel({ slides })  {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            goToNextSlide();
        }, 5000);
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const resetAutoScroll = () => {
        stopAutoScroll();
        startAutoScroll();
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
        resetAutoScroll();
    };

    const goToNextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        resetAutoScroll();
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
        resetAutoScroll();
    };

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            goToNextSlide(); // Swipe left
        } else if (touchEndX.current - touchStartX.current > 50) {
            goToPrevSlide(); // Swipe right
        }
    };

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, [slides.length]);

    return (
        <div className="relative w-full mx-auto group">
            <div
                className="relative overflow-hidden "
                onMouseEnter={stopAutoScroll}
                onMouseLeave={startAutoScroll}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className="flex-shrink-0 w-full ">
                            {slide}
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button
                    onClick={goToPrevSlide}
                    className="absolute p-2 text-white transition-opacity duration-300 -translate-y-1/2 rounded-full opacity-0 left-4 top-1/2 bg-black/30 hover:bg-black/50 group-hover:opacity-100"
                    aria-label="Previous slide"
                >
                    <ChevronLeftIcon />
                </button>
                <button
                    onClick={goToNextSlide}
                    className="absolute p-2 text-white transition-opacity duration-300 -translate-y-1/2 rounded-full opacity-0 right-4 top-1/2 bg-black/30 hover:bg-black/50 group-hover:opacity-100"
                    aria-label="Next slide"
                >
                    <ChevronRightIcon />
                </button>
            </div>

            {/* Slide indicators */}
            {/* <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 w-2 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div> */}
        </div>
    );
};

// Simple icon components
function ChevronLeftIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
    );
}

function ChevronRightIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}