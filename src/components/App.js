import React,{Component} from 'react'
import {Route } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import SearchBooks from './search'
import BookShelf from './bookshelf';
import './App.css'


class BooksApp extends Component{
  state = {
    books:[],
    showSearchPage: true
  }

  componentDidMount(){
    BooksAPI.getAll()
     .then((books) => {
       this.setState({books})
     })
  }

  changeShelf = (e, filteredBook) => {
    const books = this.state.books;
    const shelf = e.target.value;
    filteredBook.shelf = e.target.value;
    this.setState({
      books
    });

    BooksAPI.update(filteredBook, shelf).then(() => {
      this.setState(state => ({
        books: state.books
          .filter(b => b.id !== filteredBook.id)
          .concat([filteredBook])
      }));
    });
  };



  render(){
    
    return(
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>   
       )
     }
   }
   
   export default BooksApp