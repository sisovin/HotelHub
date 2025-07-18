import React from "react";
import ResponsiveNav from "@/components/ResponsiveNav";
import HeroSection from "@/components/HeroSection";
import HotelCard from "@/components/HotelCard";
import mockHotels from "@/components/mockHotels";

const featuredHotels = mockHotels.filter(h => h.featured);

const ClientHome = () => (
    <div className="min-h-screen bg-gray-50 flex flex-col">
        <ResponsiveNav />
        <HeroSection />

        {/* Featured Hotels */}
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-heading text-luxury-navy font-bold mb-8 text-center">
                Featured Luxury Hotels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <h3 className="text-2xl font-heading text-luxury-navy font-bold mb-6 text-center">
                    Why Book With Peanech?
                </h3>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex-1 text-center">
                        <span className="text-luxury-gold text-4xl mb-2 block">🌟</span>
                        <p className="font-heading text-lg">Curated Luxury Selection</p>
                        <p className="text-gray-500 font-body">Only the finest hotels, handpicked for you.</p>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-luxury-gold text-4xl mb-2 block">💰</span>
                        <p className="font-heading text-lg">Best Price Guarantee</p>
                        <p className="text-gray-500 font-body">Exclusive deals and transparent pricing.</p>
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-luxury-gold text-4xl mb-2 block">🕑</span>
                        <p className="font-heading text-lg">24/7 Concierge</p>
                        <p className="text-gray-500 font-body">Personalized support, anytime you need it.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-luxury-navy text-white py-6 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <span className="font-heading text-lg">Peanech Luxury Hotels</span>
                <span className="text-sm mt-2 md:mt-0">&copy; {new Date().getFullYear()} Peanech. All rights reserved.</span>
            </div>
        </footer>
    </div>
);

export default ClientHome;
