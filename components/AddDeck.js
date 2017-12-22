import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addDeck } from '../actions';
import { red, purple, white } from '../utils/colors';
import { keyGenerator } from '../utils/helpers';
import { submitDeck } from '../utils/api';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

class AddDeck extends Component {
  state = {
    title: 'My Deck',
    cards: [],
  }
  handleTextChange = (title) => {
    this.setState({ title });
  }
  submit = () => {
    if (this.state.title === '' || this.state.title === 'undefined') {
      this.alert('Error creating new deck', 'You have to specify a title');
    } else {
      // const key = keyGenerator(deck);
      const key = this.state.title;
      const deck = this.state;

      this.props.dispatch(addDeck({
        [key]: deck,
      }));

      this.setState({ title: 'My Deck' });

      this.toHome();

      submitDeck({ key, deck });
    }
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }));
  }

  alert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        { text: 'OK' },
      ],
    );
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Add Decks {JSON.stringify(this.props)}</Text>
        <Text style={styles.questionText}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
          style={styles.inputText}
        />
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
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
  questionText: {
    fontSize: 60,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});

const mapStateToProps = state => ({

});


// const key = timeToString();
//
// return {
//   alreadyLogged: state[key] && typeof state[key].today === 'undefined',
// };

export default connect(mapStateToProps)(AddDeck);
