import {fetchBooks} from "../reducers/books"
import {search} from "../reducers/booksearch"
import {combineReducers} from "redux"

export default combineReducers({
    fetchBooks,
    search
})