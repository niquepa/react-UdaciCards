import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addDeck, addCard, fetchDecks, newCard } from '../actions';
import { red, purple, white } from '../utils/colors';
import { submitDeck } from '../utils/api';
import { alert } from '../utils/helpers';

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

class AddCard extends Component {
  state = {
    question: 'The Question?',
    answer: 'The Answer',
  }

  submit = () => {
    if (this.state.question === '' || this.state.question === 'undefined' || this.state.answer === '' || this.state.answer === 'undefined') {
      alert('Error creating new card', 'You have to specify a Question and an Answer');
    } else {
      const card = this.state;

      const key = this.props.id;
      const cards = this.props.deck.cards;

      this.props.addCard(key, card);

      this.setState({
        question: 'The Question?',
        answer: 'The Answer',
      });

      this.goBack();

      const deck = {
        cards: [
          ...cards,
          {
            ...card,
          },
        ],
      };

      submitDeck({ key, deck });
    }
  }
  goBack = () => {
    this.props.navigation.goBack(null);
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }));
  }

  render() {
    return (
      <View style={styles.center}>
        <Text>Add Card to Deck {JSON.stringify(this.props)}</Text>
        <TextInput
          value={this.state.question}
          onChangeText={text => this.setState({ question: text })}
          style={styles.inputText}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={text => this.setState({ answer: text })}
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

const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    id,
    deck: decks[id],
  };
};

const mapDispatchToProps = dispatch => ({
  addCard: (deck, card) => dispatch(newCard(deck, card)),
});
// const key = timeToString();
//
// return {
//   alreadyLogged: state[key] && typeof state[key].today === 'undefined',
// };

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
