import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_CARD:
      console.log(`ADD CARD ${action.deck} - ${JSON.stringify(action.card)}`);
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          cards: [
            ...state[action.deck].cards,
            {
              ...action.card,
            },
          ],
        },
      };
    default:
      return state;
  }
}

export default decks;
