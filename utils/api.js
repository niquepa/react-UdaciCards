import { AsyncStorage } from 'react-native';

const STORAGE_KEY = 'Udacity:cards';


export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY);
}

export function submitDeck({ deck, key }) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [key]: deck,
  }));
}

export function removeEntry(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    });
}
