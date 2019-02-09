import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './components/Shelf.js';
import Search from './components/Search.js';
import SearchButton from './components/SearchButton.js';

class BooksApp extends React.Component {
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
    }
  }


updateSearchPageStatus = (bool) => {
  this.setState({showSearchPage: bool});
};

  render() {
    return (
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
                <Shelf />
              </div>
            </div>
            <SearchButton openSearch={this.updateSearchPageStatus} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
