//Called by default inside a directory, like index.html

import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer
})