import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  function buildItem(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    }
    setItemName('');
    setItemCategory("Produce");
    onItemFormSubmit(newItem)
  }

  function handleNameSubmit(e) {
    setItemName(e.target.value);
  }

  function handleCategorySubmit(e) {
    setItemCategory(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={buildItem}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameSubmit}/>
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleCategorySubmit}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
