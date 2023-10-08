import { useMemo } from "react";

const useBookFilter = (books, searchTerm) => {
  const filteredBooks = useMemo(() => {
    if (!searchTerm) {
      return books;
    }

    const searchTermLower = searchTerm.toLowerCase();

    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTermLower)
    );
  }, [books, searchTerm]);

  return filteredBooks;
};

export default useBookFilter;
