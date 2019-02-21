import React from 'react'
import { Link } from 'react-router-dom'
import BookCase from './../components/BookCase'
import Search from './../components/Search'
import * as BooksAPI from './../BooksAPI'


class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    books: [],
    }
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book,shelf)
    .then(response => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({books: resp}));
  }

  updateSearchPageStatus = (bool) => {
    this.setState({showSearchPage: bool});
  }
  render() {
    return(
      <div className="app">
        {this.state.showSearchPage ? (
          <Search
            showSearchPage={this.state.showSearchPage}
            closeSearch={this.updateSearchPageStatus}
            changeShelf={this.changeShelf} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookCase
                  booksData={this.state.books}
                  changeShelf={this.changeShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;