import React, { Component } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { newCard } from '../actions';
import { alert, UdacityBtn } from '../utils/helpers';
import { styles } from '../utils/styles';

class AddCard extends Component {
  state = {
    question: 'The Question?',
    answer: 'The Answer',
  }

  handleOnFocusQuestion = () => {
    if (this.state.question === 'The Question?') {
      this.setState({ question: '' });
    }
  }
  handleOnFocusAnswer = () => {
    if (this.state.answer === 'The Answer') {
      this.setState({ answer: '' });
    }
  }
  submit = () => {
    if (this.state.question === '' || this.state.question === 'undefined' || this.state.answer === '' || this.state.answer === 'undefined') {
      alert('Error creating new card', 'You have to specify a Question and an Answer');
    } else {
      const key = this.props.id;
      const cards = this.props.deck.cards;

      const deck = {
        cards: [
          ...cards,
          {
            ...this.state,
          },
        ],
      };

      this.props.addCard(key, deck);

      this.setState({
        question: 'The Question?',
        answer: 'The Answer',
      });

      this.goBack();
    }
  }
  goBack = () => {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerCenter} behavior="padding">
        <TextInput
          value={this.state.question}
          onChangeText={text => this.setState({ question: text })}
          onFocus={this.handleOnFocusQuestion}
          style={styles.inputText}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={text => this.setState({ answer: text })}
          onFocus={this.handleOnFocusAnswer}
          style={styles.inputText}
        />
        <UdacityBtn text="Add Card" onPress={this.submit} />
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
