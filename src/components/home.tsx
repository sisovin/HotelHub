import React, { useState } from "react";
import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Define props interfaces for child components to avoid import errors
interface HotelGridProps {
  searchQuery?: string;
  activeFilter?: string;
  sortBy?: string;
}

const HotelGrid = ({
  searchQuery = "",
  activeFilter = "all",
  sortBy = "newest",
}: HotelGridProps) => {
  // Placeholder implementation
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white">
      <div className="p-6 rounded-lg shadow-sm border border-gray-100">
        <p className="text-lg font-medium">Hotel Grid Component</p>
        <p className="text-sm text-gray-500">
          This is a placeholder for the HotelGrid component
        </p>
        <p className="text-sm text-gray-500">Search: {searchQuery}</p>
        <p className="text-sm text-gray-500">Filter: {activeFilter}</p>
        <p className="text-sm text-gray-500">Sort: {sortBy}</p>
      </div>
    </div>
  );
};

interface HotelFormProps {
  onSubmit?: () => void;
}

const HotelForm = ({ onSubmit = () => {} }: HotelFormProps) => {
  // Placeholder implementation
  return (
    <div className="p-6 bg-white">
      <p className="text-lg font-medium">Hotel Form Component</p>
      <p className="text-sm text-gray-500 mb-4">
        This is a placeholder for the HotelForm component
      </p>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddHotelDialog, setShowAddHotelDialog] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Mock data for dashboard stats
  const dashboardStats = [
    { label: "Total Hotels", value: 24, change: "+3", trend: "up" },
    { label: "Active Listings", value: 18, change: "+2", trend: "up" },
    { label: "Featured Hotels", value: 6, change: "0", trend: "neutral" },
    { label: "Pending Reviews", value: 12, change: "-5", trend: "down" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-gray-800">
              Peanech-HotelHub
            </h1>
            <Badge
              variant="outline"
              className="bg-indigo-50 text-indigo-700 border-indigo-200"
            >
              Admin
            </Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                JD
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Title and Add Hotel Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Hotel Management
            </h2>
            <p className="text-gray-500 mt-1">
              Manage your hotel listings and properties
            </p>
          </div>
          <Button
            onClick={() => setShowAddHotelDialog(true)}
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            <Plus className="mr-2 h-4 w-4" /> Add New Hotel
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                <div
                  className={`flex items-center text-sm ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-500"}`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-6">
            <div className="flex-1 w-full md:w-auto md:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search hotels..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full md:w-auto">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-500">Filter:</span>
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
                <span className="text-sm text-gray-500">Sort by:</span>
                <Select
                  defaultValue="newest"
                  onValueChange={setSortBy}
                  value={sortBy}
                >
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="name_asc">Name (A-Z)</SelectItem>
                    <SelectItem value="name_desc">Name (Z-A)</SelectItem>
                    <SelectItem value="price_low">
                      Price (Low to High)
                    </SelectItem>
                    <SelectItem value="price_high">
                      Price (High to Low)
                    </SelectItem>
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

      {/* Add Hotel Dialog */}
      <Dialog open={showAddHotelDialog} onOpenChange={setShowAddHotelDialog}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Add New Hotel</DialogTitle>
          </DialogHeader>
          <HotelForm onSubmit={() => setShowAddHotelDialog(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
