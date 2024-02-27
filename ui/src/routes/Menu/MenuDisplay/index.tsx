// MenuList.js
import React, { useState } from "react";
import CustomPagination from "./CustomPagination";
import "./MenuDisplay.css";
import { foodData } from "../dummyData";
import MenuList from "./MenuList";

const MenuDisplay = (prop:any) => {
    const { itemsPerPage } = prop
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = foodData.slice(offset, offset + itemsPerPage);

  return (
    <div className="menu-display-container">
        <MenuList menuItems={currentPageData} />
        <CustomPagination
          totalItems={foodData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
    </div>
  );
};

export default MenuDisplay;
