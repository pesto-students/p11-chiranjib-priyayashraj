import React, { useState, useEffect } from "react";
import BookDetail from "./BookDetail";
import BookForm from "./BookForm";
import useBookFilter from "./useBookFilter";
import useBookSorter from "./useBookSorter";

const initialBooks = [
  { id: 1, title: "Book 1", author: "Author 1", year: 2020 },
  { id: 2, title: "Book 2", author: "Author 2", year: 2018 },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    year: 2022,
    description: "This is an autobiography about a life",
    genre: "Autobiography",
  },
  {
    id: 4,
    title: "Book 3",
    author: "Author 4",
    year: 2026,
    description: "Zoology",
    genre: "Zoology",
  },
];

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(initialBooks);
  }, []);

  const handleDelete = (bookId) => {
    const updatedBooks = books.filter((book) => book.id !== bookId);
    setBooks(updatedBooks);
  };

  const handleAdd = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const filteredBooks = useBookFilter(books, "Book 3");
  const sortedBooks = useBookSorter(filteredBooks, "Year");

  return (
    <div>
      <h2>Book List</h2>
      <BookForm addBook={handleAdd} />
      {sortedBooks.length === 0 ? (
        <p>The book list is currently empty.</p>
      ) : (
        <div>
          {sortedBooks.map((book) => (
            <div key={book.id}>
              <BookDetail book={book} />
              <button onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
