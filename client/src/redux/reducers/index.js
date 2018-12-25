//Called by default inside a directory, like index.html

import { combineReducers } from 'redux'
import authReducer from './reducer'

export default combineReducers({
    auth: authReducer
})