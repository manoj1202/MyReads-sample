// import { SEARCH_BOOKS} from "../actions/booksearch"


export function search(state = [], action){
    

    switch(action.type){
        case 'SEARCH_BOOKS':
              return action.books

        default:
         return state
    }
}