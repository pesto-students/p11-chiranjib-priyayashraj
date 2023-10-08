import React, { Component } from "react";
import BookDetail from "./BookDetail";
import BookForm from "./BookForm";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
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
      ],
    };
  }

  handleDelete = (bookId) => {
    const updatedBooks = this.state.books.filter((book) => book.id !== bookId);
    this.setState({ books: updatedBooks });
  };

  handleAdd = (book) => {
    const updatedBooks = this.state.books;
    updatedBooks.push(book)
    this.setState({books : updatedBooks})
  }

  render() {
    const { books } = this.state;

    return (
      <div>
        <h2>Book List</h2>
        <BookForm addBook={this.handleAdd} />
        {books.length === 0 ? (
          <p>The book list is currently empty.</p>
        ) : (
          <div>
            {books.map((book) => (
              <div key={book.id}>
                <BookDetail book={book}/>
                <button onClick={() => this.handleDelete(book.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default BookList;
