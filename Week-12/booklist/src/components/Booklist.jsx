import React from "react";
import Book from "./Book";

const books = [
  { title: "Book 1", author: "Author 1", year: 2020 },
  { title: "Book 2", author: "Author 2", year: 2018 },
  { title: "Book 3", author: "Author 3", year: 2022 },
];

const Booklist = () => {
  return (
    <div>
      {books.map((book) => (
        <Book title={book.title} author={book.author} year={book.year}/>
      ))}
    </div>
  );
};

export default Booklist;
