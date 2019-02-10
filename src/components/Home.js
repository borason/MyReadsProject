import React from 'react'
import { Link } from 'react-router-dom'
import BookCase from './../components/BookCase'
import Search from './../components/Search'
import * as BooksAPI from './../BooksAPI'


class Home extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => this.setState({books: resp}));
    console.log(this.state.books);
  }

  updateSearchPageStatus = (bool) => {
    this.setState({showSearchPage: bool});
  }
  render() {
    return(
      <div className="app">
        {this.state.showSearchPage ? (
          <Search showSearchPage={this.state.showSearchPage} closeSearch={this.updateSearchPageStatus} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookCase booksData={this.state.books} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Home;