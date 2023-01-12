import React, { useState, useTransition } from "react";

function Filter({ onCategoryChange, onQueryChange, searchQuery, selectedCategory, handleQueryChange, handleChangeCategory, itemArray, handleSearch }) {

  const [querySearch, setQuerySearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("All");

  function onSearchChange(e) {
    setQuerySearch(e.target.value);
    handleQueryChange(e.target.value);
    const filteredItems = itemArray.filter(item => {
      if(querySearch === "") return true;
  
      return item.name.toLowerCase().includes(querySearch.toLowerCase())})
      handleSearch(filteredItems);
  }

  function handleCategoryChange(e) {
    setCategorySearch(e.target.value);
    //handleChangeCategory(e.target.value);
    const itemsByCategory = itemArray.filter((item) => {
      if (categorySearch === "All") return true;
  
      return item.category === categorySearch;
    });
    handleSearch(itemsByCategory);
  }

  return (
    <div className="Filter">
      <input type="text" 
             name="search" 
             placeholder="Search..." 
             onChange={onSearchChange} 
             value={querySearch}
             search="search"
             />
      <select name="filter" onChange={handleCategoryChange} value={categorySearch}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
