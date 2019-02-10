import React from 'react';
import Book from './Book';

class Shelf extends React.Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    const books = this.props.books;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, key) => <Book book={book} key={key} />)}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;