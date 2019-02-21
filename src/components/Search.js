import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './../BooksAPI'
import Book from './Book'

class Search extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      books: [],
      results: [],
      searchTerm: ""
    }
  }

    componentDidMount() {
    BooksAPI.getAll()
    .then(resp => {
      console.log(resp);
      this.setState({ books: resp })
    });
  }

  updateSearchTerm = (searchTerm) => {
    this.setState({searchTerm: searchTerm}, this.searchBooks);
  }

    searchBooks() {
    if(this.state.searchTerm === '' || this.state.searchTerm === undefined) {
      return this.setState({ results: [] });
    }
    BooksAPI.search(this.state.searchTerm.trim()).then(res => {
      if(res.error) {
        return this.setState({ results: [] });
      }
      else {
        res.forEach(b => {
          let f = this.state.books.filter(B => B.id === b.id);
          if(f[0]) { b.shelf = f[0].shelf; }
        });
        return this.setState({ results: res });
      }
    });
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

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/">
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchTerm}
              onChange={(event) => this.updateSearchTerm(event.target.value)} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.results.map((book, key) => <Book changeShelf={this.changeShelf} book={book} key={key} />)
            }
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;