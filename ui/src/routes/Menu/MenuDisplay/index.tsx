// MenuList.js
import React, { useState } from "react";
import CustomPagination from "./CustomPagination";
import "./MenuDisplay.css";
import { foodData } from "../dummyData";
import MenuList from "./MenuList";
import { MenuItems } from "../../../model/menu/MenuList";

const MenuDisplay = (prop:any) => {
    const { itemsPerPage } = prop
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const offset = (currentPage - 1) * itemsPerPage;


  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event: any) => {
    setQuery(event.target.value);
  };

  const filteredItems = foodData.filter(
    (item) => item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event: any) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(menuResponse: any, selected: any, query: string) {
    let filteredMenu:MenuItems = {
      menuItems: menuResponse
    };


    // Filtering Input Items
    if (query) {
      const searchTermQuery: MenuItems = {
        menuItems: filteredItems
      };
      filteredMenu = searchTermQuery;
    }

    // Applying selected filter
    if (selected) {
      const temp = filteredMenu.menuItems.filter(
        ({ inStock, price, starRating }) => 
          inStock === selected ||
          price === selected ||
          starRating === selected
      );
      filteredMenu = { ...filteredMenu, temp } as MenuItems
    }

    // let filteredMenu:MenuItems = {
    //   menuItems: menuResponse.slice(offset, offset + itemsPerPage),
    // };
    return MenuList(filteredMenu)

  }

  const result = filteredData(foodData, selectedCategory, query);


  return (
    <div className="menu-display-container">
        <div className="cards">{result}</div>
        <CustomPagination
          totalItems={foodData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
    </div>
  );
};

export default MenuDisplay;
