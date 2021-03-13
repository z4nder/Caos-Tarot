import { SELECT_DECK } from './types'

export const selectDeck = (deck) => (
    {
        type: SELECT_DECK,
        data: deck
    }
    
)

