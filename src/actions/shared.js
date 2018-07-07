import {receiveBooks} from "./books"
import * as BooksAPI from "../BooksAPI"
import {searchBooks} from "./booksearch"


export  function handleData(){
    return (dispatch) => {
        return BooksAPI.getAll()
          .then((books) => {
            dispatch(receiveBooks(books))
          } )
    }
}

export function searchData(query){
    return (dispatch) => {
        return BooksAPI.search(query)
            .then((books) => {
                dispatch(searchBooks(books))
            })
    }
}

export function updateShelf(filteredBook, shelf) {
    return (dispatch) => {    
    BooksAPI.update(filteredBook, shelf).then(() => {
        BooksAPI.getAll()
            .then((books) => {
                dispatch(receiveBooks(books))
            })
    });
}
}
