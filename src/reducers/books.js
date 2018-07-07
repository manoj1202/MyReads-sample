// import React,{Component} from "react"
import { RECEIVE_BOOKS } from "../actions/books";

 export function fetchBooks(state =[], action){
    switch(action.type){
        case RECEIVE_BOOKS:
            return action.books
        default:
            return state
    }
}

export function updateBooks(state = [], action) {
    alert('here')
    switch (action.type) {
        case 'update':
            return action.books
        default:
            return state
    }
}

