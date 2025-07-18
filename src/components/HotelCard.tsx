// src/components/HotelCard.tsx
import React from "react";
export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-105 border-2 border-luxury-gold group flex flex-col">
      <div className="relative">
        <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover group-hover:brightness-90 transition" />
        {hotel.featured && (
          <span className="absolute top-3 left-3 bg-luxury-gold text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Featured</span>
        )}
        {hotel.status && (
          <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold ${hotel.status === 'active' ? 'bg-green-100 text-green-700' : hotel.status === 'inactive' ? 'bg-gray-200 text-gray-600' : hotel.status === 'featured' ? 'bg-luxury-gold text-white' : 'bg-yellow-100 text-yellow-700'}`}>{hotel.status.charAt(0).toUpperCase() + hotel.status.slice(1)}</span>
        )}
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-heading text-luxury-navy">{hotel.name}</h3>
          <span className="text-luxury-gold font-bold">{'★'.repeat(hotel.rating)}</span>
        </div>
        <div className="text-lg font-bold text-luxury-gold mb-2">${hotel.price}/night</div>
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((a) => (
            <span key={a} className="bg-luxury-navy text-white px-2 py-1 rounded text-xs font-body">{a}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          <button className="bg-luxury-gold text-white px-4 py-2 rounded font-bold hover:bg-yellow-600 transition font-body">Book</button>
          <button className="bg-gray-100 text-luxury-navy px-4 py-2 rounded font-bold hover:bg-gray-200 transition font-body">Edit</button>
          <button className="bg-red-100 text-red-600 px-4 py-2 rounded font-bold hover:bg-red-200 transition font-body">Delete</button>
        </div>
      </div>
    </div>
  );
}