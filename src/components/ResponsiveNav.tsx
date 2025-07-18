import React from "react";

const ResponsiveNav = () => (
    <nav className="bg-luxury-navy text-white px-4 py-3 flex items-center justify-between shadow-lg sticky top-0 z-20">
        <div className="flex items-center gap-2">
            <span className="text-2xl font-heading text-luxury-gold tracking-wider">Peanech</span>
            <span className="ml-2 px-2 py-1 rounded bg-luxury-gold text-luxury-navy text-xs font-bold font-body">HotelHub</span>
        </div>
        <input type="checkbox" id="nav-toggle" className="hidden peer" aria-label="Toggle navigation menu" />
        <label htmlFor="nav-toggle" className="md:hidden cursor-pointer">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </label>
        <ul className="hidden md:flex gap-8 font-body text-lg">
            <li><a href="#hotels" className="hover:text-luxury-gold transition">Hotels</a></li>
            <li><a href="/dashboard" className="hover:text-luxury-gold transition">Dashboard</a></li>
            <li><a href="#about" className="hover:text-luxury-gold transition">About</a></li>
        </ul>
        <ul className="absolute left-0 right-0 top-full bg-luxury-navy text-white flex-col gap-4 p-6 font-body text-lg md:hidden hidden peer-checked:flex">
            <li><a href="#hotels" className="hover:text-luxury-gold transition">Hotels</a></li>
            <li><a href="/dashboard" className="hover:text-luxury-gold transition">Dashboard</a></li>
            <li><a href="#about" className="hover:text-luxury-gold transition">About</a></li>
        </ul>
    </nav>
);

export default ResponsiveNav;
