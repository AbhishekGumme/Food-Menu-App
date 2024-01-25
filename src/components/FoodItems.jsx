// // src/components/FoodItems.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const FoodItems = () => {
//   const [foodItems, setFoodItems] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   useEffect(() => {
//     const fetchFoodItems = async () => {
//       try {
//         const response = await axios.get(
//           `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood&s=${itemsPerPage}&p=${currentPage}`
//         );
//         setFoodItems(response.data.meals || []);
//       } catch (error) {
//         console.error("Error fetching food items:", error);
//       }
//     };

//     fetchFoodItems();
//   }, [currentPage]);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <section>
//       <h2 className="text-2xl font-bold mb-4">Food Items</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {foodItems.map((item) => (
//           <div key={item.idMeal} className="border p-4 rounded-md">
//             <img src={item.strMealThumb} alt={item.strMeal} className="w-full h-40 object-cover mb-2" />
//             <p className="text-lg font-semibold">{item.strMeal}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4">
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           Previous Page
//         </button>
//         <span className="mx-4">Page {currentPage}</span>
//         <button onClick={() => handlePageChange(currentPage + 1)}>Next Page</button>
//       </div>
//     </section>
//   );
// };

// export default FoodItems;

import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const FoodItems = ({ selectedArea }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        let apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

        if (selectedArea) {
          apiUrl += `&a=${encodeURIComponent(selectedArea)}`;
        }

        const response = await axios.get(`${apiUrl}&s=${itemsPerPage}&p=${currentPage + 1}`);
        setFoodItems(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    };

    fetchFoodItems();
  }, [currentPage, selectedArea]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Food Items</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {foodItems.map((item) => (
          <div key={item.idMeal} className="border p-4 rounded-md">
            <img
              src={item.strMealThumb}
              alt={item.strMeal}
              className="w-full h-40 object-cover mb-2"
            />
            <p className="text-lg font-semibold">{item.strMeal}</p>
          </div>
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={Math.ceil(foodItems.length / itemsPerPage)}
        previousLabel="Previous"
        containerClassName="pagination"
        activeClassName="active"
      />
    </section>
  );
};

export default FoodItems;
