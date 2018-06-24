import React,{Component} from 'react';
import Books from './books';
import {Link} from 'react-router-dom';

class BookShelf extends Component{

    render(){
        const {books} = this.props;
        const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
        const wantToRead = books.filter((book) => book.shelf === 'wantToRead');
        const read = books.filter((book) => book.shelf === "read")
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            {currentlyReading.length > 0 &&
                                <Books  
                                        filteredBooks={currentlyReading}
                                        changeShelf={this.props.changeShelf}
                                />}
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            {wantToRead.length > 0 &&
                                <Books
                                    filteredBooks={wantToRead}
                                    changeShelf={this.props.changeShelf}
                                />}
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            {read.length > 0 &&
                                <Books
                                    filteredBooks={read}
                                    changeShelf={this.props.changeShelf}
                                />}
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                     </Link>
                </div>
            </div>
        );
    }
}

export default BookShelf