import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books';
import Book from './Book';

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);

//{...Book} is like Book={book}
//Map Creates new array from calling a function for every array element
//Cannot render object directly in jsx, ex: cant call an array of objects {books} within component
//You can replace proprs argument with {img,title,author} and remove that extra line of code
//For children prop: {img,title,author,children} then render it inside the component as {children}
//Children will include the unique items for a specific book component within its tags


//Events: element, event function (camelCase), common: onClick, onSubmit, onChange
//View filter and find js viideo
//later down there is onClick button with {getBook(id)}, problem is function gets ran immediatly due to parantheses, so a fix could be is creating... 
//in book component getSingleBook which invokes the function and then on click in calls getSingleBook


//type submit to submit the form
//Data can only pass props down, ie booklist to book (parent to child)