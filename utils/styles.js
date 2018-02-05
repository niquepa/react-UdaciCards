import { purple, white, red, green, gray, black } from './colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  containerQuiz: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  containerBetween: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  containerEnd: {
    flex: 1,
    justifyContent: 'flex-end',
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
    marginTop: 20,
  },
  androidSubmitBtn: {
    backgroundColor: green,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardTitle: {
    color: white,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: white,
    fontSize: 14,
    textAlign: 'center',
  },
  h1: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  h2: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  h3: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  primaryText: {
    color: black,
  },
  secondaryText: {
    color: gray,
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
  card: {
    width: 350,
    height: 200,
  },
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    flex: 1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    alignContent: 'flex-start',
  },
  buttons:  {
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-end',
  },
  result: {
    color: red,
  },
});
