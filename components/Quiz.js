import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CardDetail from './CardDetail';
import QuizResult from './QuizResult';

class Quiz extends Component {
  state = {
    cardIndex: 0,
    correct: 0,
  }

  submitAnswer = (value) => {
    this.setState(prevState => ({ correct: prevState.correct + value, cardIndex: prevState.cardIndex + 1 }));
  }

  render() {
    const { id, totalCards, deck } = this.props;
    const { correct, cardIndex } = this.state;
    
    if (cardIndex >= totalCards) {
      const percentage = Math.floor((correct / totalCards) * 100);
      return (
        <View>
          <QuizResult id={id} correct={correct} percentage={percentage} />
        </View>
      );
    }
    return (
      <View>
        <Text>Quiz view {id}</Text>
        <Text>{cardIndex + 1}/{totalCards}</Text>
        <Text>Correct: {correct}</Text>
        <CardDetail card={deck.cards[cardIndex]} onPress={value => this.submitAnswer(value)} />
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    id,
    deck: decks[id],
    totalCards: decks[id].cards.length,
  };
};

export default connect(mapStateToProps)(Quiz);
