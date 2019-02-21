import React from 'react';
import Shelf from './Shelf';

class BookCase extends React.Component {

  render() {
    const booksData = this.props.booksData;
    const currentBooks = booksData.filter(book => book.shelf === 'currentlyReading');
    const futureBooks = booksData.filter(book => book.shelf === 'wantToRead');
    const finishedBooks = booksData.filter(book => book.shelf === 'read');

    return(
      <div>
          <Shelf
            name = 'Currently Reading'
            books = {currentBooks}
            changeShelf={this.props.changeShelf} />
          <Shelf
            name = 'Books For Future Consideration'
            books = {futureBooks}
            changeShelf={this.props.changeShelf} />
          <Shelf
            name = 'Already Read'
            books = {finishedBooks}
            changeShelf={this.props.changeShelf} />
      </div>
    );
  }
}

export default BookCase;