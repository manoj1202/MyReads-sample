import React,{Component} from 'react';
import { updateShelf } from "../actions/shared"
import { connect } from "react-redux"

class Books extends Component{

    changeShelf(filteredBook, e) {
        this.props.dispatch(updateShelf(filteredBook, e.target.value))

        // BooksAPI.update(filteredBook, shelf).then(() => {
        //     this.setState(state => ({
        //         books: state.books
        //             .filter(b => b.id !== filteredBook.id)
        //             .concat([filteredBook])
        //     }));
        // });
    };

    render(){
        const filteredBooks = this.props.filteredBooks
        // console.log('====',filteredBooks)
        return(
            
            <div className="bookshelf-books">
                 <ol className="books-grid">
                    {filteredBooks.length > 0 &&
                           filteredBooks.map((book) => (
                        <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select onChange={e =>  this.changeShelf(book, e)}
                                            value={book.shelf}
                                            >
                                            <option value="none" disabled>Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                    </select>
                                </div>
                          </div>
                            <div className="book-title">{book.title}</div>
                            { book.length > 0 && book.authors.map((author) => (
                            <div key={author} className="book-authors" >{author}</div>
                            ))}
                        </div>
                            
                         </li>
                        )
                    )}
                    
                </ol> 
            </div>
            
        );
    }
}



export default connect()(Books)