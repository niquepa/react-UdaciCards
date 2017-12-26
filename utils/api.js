import { AsyncStorage } from 'react-native';

const STORAGE_KEY = '@Udacity:decks';


export function getDecks() {
  try {
    // AsyncStorage.clear();
    AsyncStorage.getItem(STORAGE_KEY, (err, result) => {
      console.log(`PROMISE METHOD ${result}`);
      return result;
    });
  } catch (error) {
    console.log(`LOCAL ERROR: ${error}`);
  }
}

export function submitDeck({ deck, key }) {
  try {
    console.log(`SAVING IN LOCAL ${key}:${JSON.stringify(deck)}`);
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      [key]: deck,
    }));
  } catch (error) {
    console.log(`SAVING IN LOCAL ERROR ${key} - ${error}`);
  }
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
