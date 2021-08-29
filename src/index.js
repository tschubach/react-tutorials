import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81B9SEXh3cL._AC_UL200_SR200,200_.jpg",
  title: "Billy Summers",
  author: "Stephen-King",
};


// stateless functional component
// always return JSX

// JSX Rules
// return single element
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function BookList() {
  return (
    <section className='bookList'>
      <Book
        image={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        image={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.image} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
