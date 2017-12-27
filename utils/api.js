import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@Udacity:decks';


export function getDecks() {
  // AsyncStorage.clear();
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(results => {
      return JSON.parse(results);
    });
}

export function submitDeck({ key, deck }) {
  try {
    console.log(`SAVING IN LOCAL ${key}:${JSON.stringify(deck)}`);
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: deck,
    }));
  } catch (error) {
    console.log(`SAVING IN LOCAL ERROR ${key} - ${error}`);
  }
}

// export const newCard = (deck, card) =>  {
//
// }

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    });
}
