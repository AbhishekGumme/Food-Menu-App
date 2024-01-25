// // src/components/Filters.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Filters = ({ onFilterChange }) => {
//   const [areas, setAreas] = useState([]);
//   const [selectedArea, setSelectedArea] = useState("");
//   const [sortBy, setSortBy] = useState("alphabetical");

//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
//         setAreas(response.data.meals);
//       } catch (error) {
//         console.error("Error fetching areas:", error);
//       }
//     };

//     fetchAreas();
//   }, []);

//   useEffect(() => {
//     onFilterChange({ area: selectedArea, sortBy });
//   }, [selectedArea, sortBy, onFilterChange]);

//   const handleAreaChange = (event) => {
//     setSelectedArea(event.target.value);
//   };

//   const handleSortChange = (event) => {
//     setSortBy(event.target.value);
//   };

//   return (
//     <section className="bg-gray-200 p-4">
//       <div className="mb-4">
//         <label className="mr-2">Filter By Area:</label>
//         <select value={selectedArea} onChange={handleAreaChange} className="border p-2 rounded-md">
//           <option value="">All Areas</option>
//           {areas.map((area) => (
//             <option key={area.strArea} value={area.strArea}>
//               {area.strArea}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div>
//         <label className="mr-2">Sort By:</label>
//         <select value={sortBy} onChange={handleSortChange} className="border p-2 rounded-md">
//           <option value="alphabetical">Alphabetical</option>
//         </select>
//       </div>
//     </section>
//   );
// };

// export default Filters;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Filters = ({ onFilterChange }) => {
//   const [areas, setAreas] = useState([]);
//   const [selectedArea, setSelectedArea] = useState("");

//   useEffect(() => {
//     const fetchAreas = async () => {
//       try {
//         const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
//         setAreas(response.data.meals);
//       } catch (error) {
//         console.error("Error fetching areas:", error);
//       }
//     };

//     fetchAreas();
//   }, []);

//   useEffect(() => {
//     onFilterChange(selectedArea);
//   }, [selectedArea, onFilterChange]);

//   const handleAreaChange = (event) => {
//     setSelectedArea(event.target.value);
//   };

//   return (
//     <section className="bg-gray-200 p-4">
//       <div className="mb-4">
//         <label className="mr-2">Filter By Area:</label>
//         <select value={selectedArea} onChange={handleAreaChange} className="border p-2 rounded-md">
//           <option value="">All Areas</option>
//           {areas.map((area) => (
//             <option key={area.strArea} value={area.strArea}>
//               {area.strArea}
//             </option>
//           ))}
//         </select>
//       </div>
//     </section>
//   );
// };

// export default Filters;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Filters = ({ onFilterChange }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [sortBy, setSortBy] = useState("alphabetical");

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
        setAreas(response.data.meals);
      } catch (error) {
        console.error("Error fetching areas:", error);
      }
    };

    fetchAreas();
  }, []);

  const handleAreaChange = (event) => {
    setSelectedArea(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange({ area: selectedArea, sortBy });
  };

  return (
    <section className="bg-gray-200 p-4">
      <div className="mb-4">
        <label className="mr-2">Filter By Area:</label>
        <select value={selectedArea} onChange={handleAreaChange} className="border p-2 rounded-md">
          <option value="">All Areas</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="mr-2">Sort By:</label>
        <select value={sortBy} onChange={handleSortChange} className="border p-2 rounded-md">
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      <button onClick={applyFilters} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
        Apply Filters
      </button>
    </section>
  );
};

export default Filters;
