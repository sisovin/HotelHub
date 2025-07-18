import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Star, Upload, X, Plus, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface HotelFormProps {
  hotel?: {
    id?: string;
    hotel_title: string;
    description: string;
    location: string;
    hotel_stars: number;
    price: number;
    thumbnail_image: string;
    hotel_images: string[];
    hotel_is_featured: boolean;
    hotel_status: "Active" | "Inactive";
    amenities: string[];
  };
  onSubmit?: (data: any) => void;
  isEditing?: boolean;
}

const HotelForm = ({
  hotel = {
    hotel_title: "",
    description: "",
    location: "",
    hotel_stars: 3,
    price: 0,
    thumbnail_image: "",
    hotel_images: [],
    hotel_is_featured: false,
    hotel_status: "Active" as const,
    amenities: [],
  },
  onSubmit = () => {},
  isEditing = false,
}: HotelFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: hotel,
  });

  const [stars, setStars] = useState<number>(hotel.hotel_stars);
  const [isFeatured, setIsFeatured] = useState<boolean>(
    hotel.hotel_is_featured,
  );
  const [status, setStatus] = useState<"Active" | "Inactive">(
    hotel.hotel_status,
  );
  const [thumbnailPreview, setThumbnailPreview] = useState<string>(
    hotel.thumbnail_image,
  );
  const [imagesPreviews, setImagesPreviews] = useState<string[]>(
    hotel.hotel_images,
  );
  const [amenities, setAmenities] = useState<string[]>(hotel.amenities);
  const [newAmenity, setNewAmenity] = useState<string>("");

  const handleStarClick = (rating: number) => {
    setStars(rating);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newPreviews: string[] = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result as string);
          if (newPreviews.length === files.length) {
            setImagesPreviews([...imagesPreviews, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    setImagesPreviews(imagesPreviews.filter((_, i) => i !== index));
  };

  const addAmenity = () => {
    if (newAmenity.trim() !== "" && !amenities.includes(newAmenity.trim())) {
      setAmenities([...amenities, newAmenity.trim()]);
      setNewAmenity("");
    }
  };

  const removeAmenity = (index: number) => {
    setAmenities(amenities.filter((_, i) => i !== index));
  };

  const submitForm = (data: any) => {
    const formData = {
      ...data,
      hotel_stars: stars,
      hotel_is_featured: isFeatured,
      hotel_status: status,
      thumbnail_image: thumbnailPreview,
      hotel_images: imagesPreviews,
      amenities: amenities,
    };
    onSubmit(formData);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-800">
              {isEditing ? "Edit Hotel" : "Add New Hotel"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isEditing
                ? "Update the hotel information below"
                : "Fill in the details to add a new hotel"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hotel Title */}
            <div className="space-y-2">
              <Label htmlFor="hotel_title">Hotel Name</Label>
              <Input
                id="hotel_title"
                placeholder="Enter hotel name"
                {...register("hotel_title", { required: true })}
                className={errors.hotel_title ? "border-red-500" : ""}
              />
              {errors.hotel_title && (
                <p className="text-red-500 text-xs">Hotel name is required</p>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, Country"
                {...register("location", { required: true })}
                className={errors.location ? "border-red-500" : ""}
              />
              {errors.location && (
                <p className="text-red-500 text-xs">Location is required</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the hotel..."
              rows={4}
              {...register("description", { required: true })}
              className={errors.description ? "border-red-500" : ""}
            />
            {errors.description && (
              <p className="text-red-500 text-xs">Description is required</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Star Rating */}
            <div className="space-y-2">
              <Label>Star Rating</Label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => handleStarClick(rating)}
                    className="focus:outline-none"
                  >
                    <Star
                      className={`w-6 h-6 ${rating <= stars ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <Label htmlFor="price">Price per Night ($)</Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="0.00"
                {...register("price", { required: true, min: 0 })}
                className={errors.price ? "border-red-500" : ""}
              />
              {errors.price && (
                <p className="text-red-500 text-xs">Valid price is required</p>
              )}
            </div>
          </div>

          {/* Thumbnail Image */}
          <div className="space-y-2">
            <Label>Thumbnail Image</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() => document.getElementById("thumbnail")?.click()}
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Thumbnail</span>
                </Button>
                <Input
                  id="thumbnail"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailChange}
                />
              </div>
              {thumbnailPreview && (
                <div className="relative w-40 h-40 mt-2">
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail preview"
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                    onClick={() => setThumbnailPreview("")}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Additional Images */}
          <div className="space-y-2">
            <Label>Additional Images</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Button
                  type="button"
                  variant="outline"
                  className="flex items-center space-x-2"
                  onClick={() =>
                    document.getElementById("additional-images")?.click()
                  }
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Images</span>
                </Button>
                <Input
                  id="additional-images"
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImagesChange}
                />
              </div>
              {imagesPreviews.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-2">
                  {imagesPreviews.map((image, index) => (
                    <div key={index} className="relative w-24 h-24">
                      <img
                        src={image}
                        alt={`Hotel image ${index + 1}`}
                        className="w-full h-full object-cover rounded-md"
                      />
                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        onClick={() => removeImage(index)}
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-2">
            <Label>Amenities</Label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <Input
                  value={newAmenity}
                  onChange={(e) => setNewAmenity(e.target.value)}
                  placeholder="Add amenity (e.g., WiFi, Pool)"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={addAmenity}
                  className="flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </Button>
              </div>
              {amenities.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {amenities.map((amenity, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center space-x-1 px-2 py-1"
                    >
                      <span>{amenity}</span>
                      <button
                        type="button"
                        onClick={() => removeAmenity(index)}
                        className="ml-1 text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Featured Status */}
            <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
              <div>
                <h3 className="font-medium">Featured Hotel</h3>
                <p className="text-sm text-gray-500">
                  Display this hotel in featured section
                </p>
              </div>
              <Switch checked={isFeatured} onCheckedChange={setIsFeatured} />
            </div>

            {/* Active Status */}
            <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
              <div>
                <h3 className="font-medium">Hotel Status</h3>
                <p className="text-sm text-gray-500">
                  Set hotel as active or inactive
                </p>
              </div>
              <Select
                value={status}
                onValueChange={(value: "Active" | "Inactive") =>
                  setStatus(value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                      Active
                    </span>
                  </SelectItem>
                  <SelectItem value="Inactive">
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-red-500 mr-2"></span>
                      Inactive
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700">
              {isEditing ? "Update Hotel" : "Add Hotel"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default HotelForm;
