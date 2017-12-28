import * as localStorageAPI from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';

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

export const addCard = (deck, card) => ({
  type: ADD_CARD,
  deck,
  card,
});

// export const newCard = (deck, card) => dispatch => (
//   dispatch(addCard(deck, card))
// );

export const newCard = (key, deck) => dispatch => (
  localStorageAPI
    .submitDeck({ key, deck })
    .then(() => dispatch(addCard(key, deck)))
);

export const fetchDecks = () => (dispatch) => {
  localStorageAPI
    .getDecks()
    .then(decks => dispatch(receiveDecks(decks)));
};
