import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import ClientHome from "./pages/ClientHome";
import Home from "./components/home";
import HotelCard from "./components/HotelCard";
import HotelGrid from "./components/HotelGrid";
/* import routes from "tempo-routes"; */

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<ClientHome />} />
          <Route path="/dashboard" element={<Home />} />
          <Route
            path="/hotels/:id"
            element={
              // Replace with actual hotel data fetching logic as needed
              <HotelCard hotel={{
                name: "Sample Hotel",
                image: "https://via.placeholder.com/400x300",
                featured: false,
                rating: 4,
                price: 200,
                amenities: ["Free WiFi", "Pool", "Spa"]
              }} />
            }
          />
          <Route path="/hotels" element={<HotelGrid />} />
        </Routes>
        {/* {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)} */}
      </>
    </Suspense>
  );
}

export default App;
