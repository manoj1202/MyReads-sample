import React,{Component} from 'react'
// import * as BooksAPI from '../BooksAPI'
import SearchBooks from './search'
import BookShelf from './bookshelf';
import {Route} from "react-router-dom"
import '../App.css'
import {connect} from "react-redux"
 import {handleData} from "../actions/shared"


class BooksApp extends Component{
  state = {
    books:[],
    showSearchPage: true
  }

  componentDidMount() {
    this.props.dispatch(handleData())
  }

  render(){
    
    return(
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf />
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


   

export default connect()(BooksApp) 