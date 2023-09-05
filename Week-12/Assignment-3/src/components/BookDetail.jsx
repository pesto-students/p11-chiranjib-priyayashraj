import React, { useState } from "react";

const BookDetail = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };

  const { title, author, year, description, genre } = book;

  return (
    <div style={{ border: "1px solid black", width: "250px" }}>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>

      <button onClick={toggleDetails}>
        {isExpanded ? "Hide Details" : "Show Details"}
      </button>

      {isExpanded && (
        <div>
          <p>Description: {description}</p>
          <p>Genre: {genre}</p>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
