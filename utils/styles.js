import { purple, white, red, green } from './colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // justifyContent: 'space-around',
    // paddingHorizontal: 10,
    marginTop: 10,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  iosDeckCard: {
    backgroundColor: purple,
    borderRadius: 10,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  androidDeckCard: {
    backgroundColor: purple,
    borderRadius: 10,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  androidSubmitBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  cardSubTitle: {
    color: white,
    fontSize: 14,
    textAlign: 'center',
  },
  h1: {
    fontSize: 50,
  },
  inputText: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: purple,
    fontSize: 22,
    margin: 20,
  },
  face: {
    height: 100,
    // padding: 100,
  },
  back: {
    height: 100,
    // padding: 100,
  },
});
