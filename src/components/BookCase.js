import React from 'react';
import Shelf from './Shelf';

class BookCase extends React.Component {
  componentDidMount() {
    console.log(this);
  }
  render() {
    const booksData = this.props.booksData;
    const currentBooks = booksData.filter(book => book.shelf === 'currentlyReading');
    const futureBooks = booksData.filter(book => book.shelf === 'wantToRead');
    const finishedBooks = booksData.filter(book => book.shelf === 'read');

    return(
      <div>
          <Shelf name = 'Currently Reading' books = {currentBooks} />
          <Shelf name = 'Books For Future Consideration' books = {futureBooks}/>
          <Shelf name = 'Already Read' books = {finishedBooks}/>
      </div>
    );
  }
}

export default BookCase;