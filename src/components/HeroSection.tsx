import React from "react";

const HeroSection = () => (
    <section className="relative bg-gradient-to-br from-luxury-navy to-blue-900 py-16 px-4 text-center flex flex-col items-center justify-center min-h-[350px] md:min-h-[450px]">
        <h1 className="text-4xl md:text-6xl font-heading text-luxury-gold mb-4 drop-shadow-lg">Discover Luxury Hotels</h1>
        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
            Book your next stay at the world’s most exclusive hotels. Experience elegance, comfort, and unforgettable service.
        </p>
        <div className="backdrop-blur bg-white/20 rounded-xl shadow-lg p-4 flex flex-col md:flex-row gap-4 w-full max-w-2xl mx-auto">
            <div className="flex-1">
                <label htmlFor="hero-location" className="sr-only">Location</label>
                <input
                    id="hero-location"
                    type="text"
                    placeholder="Location"
                    className="w-full px-4 py-2 rounded-lg border border-luxury-gold focus:ring-2 focus:ring-luxury-gold font-body"
                />
            </div>
            <div className="flex-1">
                <label htmlFor="hero-date" className="sr-only">Check-in Date</label>
                <input
                    id="hero-date"
                    type="date"
                    className="w-full px-4 py-2 rounded-lg border border-luxury-gold focus:ring-2 focus:ring-luxury-gold font-body"
                />
            </div>
            <div className="flex-1">
                <label htmlFor="hero-guests" className="sr-only">Guests</label>
                <input
                    id="hero-guests"
                    type="number"
                    min="1"
                    placeholder="Guests"
                    className="w-full px-4 py-2 rounded-lg border border-luxury-gold focus:ring-2 focus:ring-luxury-gold font-body"
                />
            </div>
            <button className="bg-luxury-gold text-white font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition font-body">
                Search
            </button>
        </div>
    </section>
);

export default HeroSection;
