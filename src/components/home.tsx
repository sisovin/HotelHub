
import React, { useState } from "react";
import ResponsiveNav from "./ResponsiveNav";
import HeroSection from "./HeroSection";
import HotelGrid from "./HotelGrid";
import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";


const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const dashboardStats = [
    { label: "Total Hotels", value: 24, change: "+3", trend: "up" },
    { label: "Active Listings", value: 18, change: "+2", trend: "up" },
    { label: "Featured Hotels", value: 6, change: "0", trend: "neutral" },
    { label: "Pending Reviews", value: 12, change: "-5", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ResponsiveNav />
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Title and Add Hotel Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-heading text-luxury-navy font-bold">Hotel Management</h2>
            <p className="text-gray-500 mt-1 font-body">Manage your hotel listings and properties</p>
          </div>
          <Button className="bg-luxury-gold hover:bg-yellow-600 font-body flex items-center gap-2">
            <Plus className="h-4 w-4" /> Add New Hotel
          </Button>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-2 border-luxury-gold">
              <p className="text-sm font-medium text-gray-500 font-body">{stat.label}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold text-luxury-navy font-heading">{stat.value}</p>
                <div className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-500"}`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-2 border-luxury-gold mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <div className="flex-1 w-full md:w-auto md:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-luxury-gold h-4 w-4" />
                <Input
                  placeholder="Search hotels..."
                  className="pl-10 font-body border-luxury-gold"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-luxury-gold" />
                <span className="text-sm text-gray-500 font-body">Filter:</span>
              </div>
              <Tabs
                defaultValue="all"
                className="w-full md:w-auto"
                onValueChange={setActiveFilter}
                value={activeFilter}
              >
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="active">Active</TabsTrigger>
                  <TabsTrigger value="featured">Featured</TabsTrigger>
                  <TabsTrigger value="inactive">Inactive</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="hidden md:block h-8 w-px bg-gray-200"></div>
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <span className="text-sm text-gray-500 font-body">Sort by:</span>
                <Select
                  defaultValue="newest"
                  onValueChange={setSortBy}
                  value={sortBy}
                >
                  <SelectTrigger className="w-full md:w-[180px] border-luxury-gold font-body">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price_low">Price (Low to High)</SelectItem>
                    <SelectItem value="price_high">Price (High to Low)</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
        {/* Hotel Grid */}
        <HotelGrid
          searchQuery={searchQuery}
          activeFilter={activeFilter}
          sortBy={sortBy}
        />
      </main>
    </div>
  );
};

export default Home;
