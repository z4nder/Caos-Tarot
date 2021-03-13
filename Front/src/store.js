import { createStore, combineReducers } from 'redux'
import deckReducer from './redux/reducers/deckReducer'

const rootReducer = combineReducers({
    deckReducer: deckReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore