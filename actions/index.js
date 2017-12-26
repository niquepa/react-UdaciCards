import * as localStorageAPI from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export const fetchDecks = () => dispatch => {
  // localStorageAPI
  //   .getDecks()
  //   .then(decks => dispatch receiveDecks(decks))
  const decks = localStorageAPI.getDecks();
  console.log( `ACTIONS decks:${JSON.stringify(decks)}` );
  // .then(decks => dispatch(receiveDecks(decks)))
  // if (decks) {
  //   dispatch( receiveDecks( decks ) )
  // }
};
