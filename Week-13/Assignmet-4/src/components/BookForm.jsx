import React, { Component } from "react";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, year } = this.state;
    const newBook = { title, author, year };
    this.props.addBook(newBook);

    this.setState({
      title: "",
      author: "",
      year: "",
    });
  };

  render() {
    const { title, author, year } = this.state;

    return (
      <div style={{ border: "1px solid black", width: "250px" }}>
        <h2>Add a New Book</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="number"
              name="year"
              value={year}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    );
  }
}

export default BookForm;
