import * as BooksAPI from "../BooksAPI"
// import { search} from "../reducers/booksearch"

export function searchBooks(query) {
    return (dispatch) => {
        BooksAPI.search(query).then(results => {
            if (results && results.length) {
                // console.log('here', results)
                dispatch ({
                    type: 'SEARCH_BOOKS',
                    books: results

                })
               
                }            
        })
    }
    }

       