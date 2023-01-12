import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [itemArray, setItemArray] = useState(items);

  function handleChangeCategory(category) {
    setSelectedCategory(category);
  }

  function handleChangeQuery(search) {
    setSearchQuery(search);
  }

  function handleSubmit(item) {
    setItemArray([...itemArray, item]);
  }

  function handleSearch(search) {
      //setItemArray(search)
      console.log(search);
  }
  // const itemsByCategory = itemArray.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  // const filteredItems = itemsByCategory.filter(item => {
  //   if(searchQuery === "") return true;

  //   return item.name.toLowerCase().includes(searchQuery.toLowerCase())})
    

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit}/>
      <Filter itemArray={itemArray} handleSearch={handleSearch}/*handleQueryChange={handleChangeQuery} handleChangeCategory={handleChangeCategory}*/
            /*onCategoryChange={handleChangeCategory} 
              onSearchChange={handleQueryChange} 
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}*//>
      <ul className="Items">
        {itemArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
