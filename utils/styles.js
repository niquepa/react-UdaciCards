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
  iosDeckCard: {
    backgroundColor: purple,
    borderRadius: 10,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  AndroidDeckCard: {
    backgroundColor: purple,
    borderRadius: 10,
    height: 90,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    justifyContent: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardTitle: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  CardSubTitle: {
    color: white,
    fontSize: 14,
    textAlign: 'center',
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
