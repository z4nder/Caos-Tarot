import { SELECT_DECK } from '../actions/types'

const initialState = {
    selectedDeck: {
        key: Math.random(),
        value: "0"
    }
}

//Esses parametros vem da função chamada selectDeck em selectedDeck.js
const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DECK:
            console.log("ENTRE HERE", action);
            return {                
                selectedDeck: {
                    key: Math.random(),
                    value: action
                }
            }           
        default:
            return state            
    }
}

export default deckReducer