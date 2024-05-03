import React, { Component } from "react";
import BookList from "./Booklist";

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`${WrappedComponent.displayName || WrappedComponent.name} is rendered.`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const BookListWithLogging = WithLogging(BookList);

export default BookListWithLogging;
