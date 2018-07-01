import React,{Component} from 'react';

class Books extends Component{

    render(){
       const { filteredBooks } = this.props
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
                                    <select onChange={e =>  this.props.changeShelf(e, book)}
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
                            {book.authors.map((author) => (
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

export default Books