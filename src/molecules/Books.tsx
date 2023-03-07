import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../atoms/Card";

import "./books.scss";

const Books = (props: { type: string }) => {
  const [booksList, setBooksList] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`
      );
      setBooksList(res.data.results.books);
    };
    fetchBooks();
  }, []);
  return (
    <div className="gridView">
      {booksList.map((books: any) => {
        const { book_image, amazon_product_url, rank } = books;
        return (
          <Card key={rank} style={{ padding: 0 }}>
            <button
              className={`books books--${rank % 2 === 0 ? "even" : "odd"}`}
              onClick={() => window.open(amazon_product_url)}
            >
              <img
                className={`books-cover books-cover--${
                  rank % 2 === 0 ? "even" : "odd"
                }`}
                src={`${book_image}`}
                alt={book_image}
              />
            </button>
          </Card>
        );
      })}
    </div>
  );
};
export default Books;
