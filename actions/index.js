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

export const newCard = (deck, card) => dispatch => (
  dispatch(addCard(deck, card))
);

// export const newCard = (key, card) => (dispatch, getState) => {
//   dispatch(addCard(key, card))
//     .then((getState) => {
//       const state = getState();
//       console.log(`GETSTATE ${JSON.stringify(state[key])}`);
//     });
//   // localStorageAPI
//   //   .submitDeck({ key, deck: {
//   //       cards: [card]
//   //     }
//   //   })
//   //   .then(dispatch(addCard(key, card)))
// };

export const newPost = body => dispatch => (
  readableAPI
    .newPost(body)
    .then(post => dispatch(updatePost(post)))
);

export const fetchDecks = () => (dispatch) => {
  localStorageAPI
    .getDecks()
    .then(decks => dispatch(receiveDecks(decks)));
};
