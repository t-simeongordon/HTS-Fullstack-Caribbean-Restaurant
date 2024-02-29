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
  const currentPageData:MenuItems = {
    menuItems: foodData.slice(offset, offset + itemsPerPage),
  };
  const result = MenuList(currentPageData)

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
