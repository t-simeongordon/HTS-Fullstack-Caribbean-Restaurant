// CustomPagination.js
import React, { useState } from "react";
import "./CustomPagination.css";

const CustomPagination = ({ totalItems, itemsPerPage, onPageChange }:any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage:any) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  const renderPaginationItems = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={i === currentPage ? "active" : "dave"}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <div className="custom-pagination">
      <ul>{renderPaginationItems()}</ul>
    </div>
    </div>
    
  );
};

export default CustomPagination;
