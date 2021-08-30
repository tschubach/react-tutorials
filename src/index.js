// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';
import { books } from './books';
import Book from './Book';

function BookList() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        return (
          // <Book key={book.id} book={book}></Book>
          <Book key={book.id} {...book} />
        );
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
