import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Routing from './components/Routing'
import reducers from './store/reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))


ReactDOM.render(
            <Provider store={store}>
                <Routing />
            </Provider>,
            document.getElementById('root')
)