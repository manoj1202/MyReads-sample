import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import BooksApp from './components/App'
import './index.css'
import {  Provider } from "react-redux"
import reducer from "./reducers" 
import {createStore} from "redux"
import middleware from "./middleware"
import { Route } from "react-router-dom"

const store = createStore(reducer, middleware )

ReactDOM.render(
     <Provider store={store}>
        <BrowserRouter>
            <Route component = {BooksApp } />
        </BrowserRouter>
     </Provider>,

    document.getElementById('root'))
