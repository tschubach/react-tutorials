import React from 'react'

// const Book = (props) => {
// const { img, title, author } = props;
const Book = ({ img, title, author }) => {
	// attribute, eventHandler
	// onClick, onMouseOver
	const clickHandler = (e) => {
		alert('hello, world!');
	}
	const complexExample = (author) => {
		console.log(author);
	}

	return (
		<article className='book'
		// onMouseOver={() => { console.log(title); }}
		>
			<div className='bookimg'><img src={img} alt='' /></div>
			{/* <h1 onClick={() => console.log('inline example: ' + title)}>{title}</h1> */}
			<h4>{author}</h4>
			<button type='button' onClick={clickHandler}>
				reference example
			</button>
			{/*
      This will fire as soon as the page renders, for all items
      <button type='button' onClick={complexExample(author)}>more complex example</button>
      To get the desired behavior, write as an inline function.  See below.
       */}
			<button type='button' onClick={() => complexExample(author)}>more complex example</button>
		</article>
	);
};

export default Book
