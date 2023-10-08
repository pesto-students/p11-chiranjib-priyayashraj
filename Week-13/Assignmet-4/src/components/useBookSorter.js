import { useMemo } from "react";

const useBookSorter = (books, sortingCriteria) => {
  const sortedBooks = useMemo(() => {
    const clonedBooks = [...books];
    if (sortingCriteria === "year") {
      return clonedBooks.sort((a, b) => a.year - b.year);
    }
  }, [books, sortingCriteria]);

  return sortedBooks;
};

export default useBookSorter;
