import React from "react";

const Book = ({ title, author, year }) => {
  return (
    <div style={{ border: "1px solid black ", width: "150px" }}>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Book;
