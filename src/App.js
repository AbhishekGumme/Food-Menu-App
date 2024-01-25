import React, { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import FoodItems from "./components/FoodItems";
import './App.css'; 



function App() {
  const [selectedFilters, setSelectedFilters] = useState({ area: '', sortBy: 'alphabetical' });

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="App">
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <FoodItems selectedArea={selectedFilters.area} sortBy={selectedFilters.sortBy} />
      <Footer />
    </div>
  );
}

export default App;
