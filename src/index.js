import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import BooksApp from './App'
import './index.css'
import {  Provider } from "react-redux"


ReactDOM.render(
    <Provider>
        <BrowserRouter stroe = {store}>
            <BooksApp />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
