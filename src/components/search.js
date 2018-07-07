import React,{Component} from 'react';
import Books from './books'
import {Link} from 'react-router-dom'
// import {searchData} from "../actions/shared"
// import * as BooksAPI from "../BooksAPI"
import {connect} from "react-redux"
import {searchBooks} from "../actions/booksearch"

class SearchBooks extends Component{

    queryBooks(query) {   
        this.props.dispatch(searchBooks(query))
    }

    render(){
        let queriedBooks = this.props.searchBooks
        let fetchBooks = this.props.fetchBooks

        // console.log('queriedBooks', queriedBooks)

        if(queriedBooks) {
        queriedBooks.forEach((book, index) => {
            let initialBooks = fetchBooks.find(b => b.id === book.id)
            book.shelf = initialBooks ? initialBooks.shelf : 'none'
            queriedBooks[index] = book
        })
    }

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                        &gt;
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            onChange={event => {
                                event.preventDefault();
                                this.queryBooks(event.target.value)}}
                            placeholder="Search by title or author"
                            type="text"
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    {queriedBooks && queriedBooks.length > 0 &&
                        <Books
                            filteredBooks={queriedBooks}
                            changeShelf={this.props.changeShelf}
                        />
                    }
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return{
        searchBooks: state.search,
        fetchBooks: state.fetchBooks
    }
}

export default connect(mapStateToProps)(SearchBooks) 