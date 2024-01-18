// MenuList.js
import React, { useState } from "react";
import CustomPagination from "./CustomPagination";
import "./MenuList.css";
import { foodData } from "./dummyData";

const MenuList = (prop:any) => {
    const { itemsPerPage } = prop
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const offset = (currentPage - 1) * itemsPerPage;
  const currentPageData = foodData.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <ul>
        {currentPageData.map((item) => (
          <li key={item.id}>{item.name}</li>
          // Customize based on your data structure
        ))}
      </ul>
      <CustomPagination
        totalItems={foodData.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MenuList;
