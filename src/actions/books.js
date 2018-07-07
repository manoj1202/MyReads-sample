export const RECEIVE_BOOKS = "RECEIVE_BOOKS"
export const UPDATE_SHELF = "UPDATE_SHELF"
export function receiveBooks(books){
    return{
        type:RECEIVE_BOOKS,
         books
    }
}


