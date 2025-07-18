import React from "react";
import HotelCard from "./HotelCard";
import mockHotels from "./mockHotels";

const HotelGrid = ({ searchQuery = "", activeFilter = "all", sortBy = "newest" }) => {
  // Filter hotels by search and filter
  let filtered = mockHotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "all" || hotel.status === activeFilter || (activeFilter === "featured" && hotel.featured);
    return matchesSearch && matchesFilter;
  });

  // Sort hotels
  filtered = filtered.sort((a, b) => {
    if (sortBy === "price_low") return a.price - b.price;
    if (sortBy === "price_high") return b.price - a.price;
    if (sortBy === "name_asc") return a.name.localeCompare(b.name);
    if (sortBy === "name_desc") return b.name.localeCompare(a.name);
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "oldest") return a.id - b.id;
    return b.id - a.id; // newest
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
      {filtered.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelGrid;
