import { combineReducers } from 'redux'
import Home from './reducers/Home'
import Login from './reducers/Login'
import counterReducer from './reducers/Counter'
const rootReducer = combineReducers({
  Home,
  Login,
  counter:counterReducer,
})
export default rootReducer