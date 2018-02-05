import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import CardDetail from './CardDetail';
import QuizResult from './QuizResult';
import { styles } from '../utils/styles';

class Quiz extends Component {
  state = {
    cardIndex: 0,
    correct: 0,
  }

  submitAnswer = (value) => {
    this.setState(prevState => ({
      correct: prevState.correct + value,
      cardIndex: prevState.cardIndex + 1,
    }));
  }

  toDeck = () => {
    // this.props.navigation.goBack(null);
    this.props.navigation.navigate('DeckDetail', { id: this.props.id });
  }

  toQuiz = () => {
    this.props.navigation.navigate('Quiz', { id: this.props.id });
  }

  render() {
    const { id, totalCards, deck } = this.props;
    const { correct, cardIndex } = this.state;

    if (cardIndex >= totalCards) {
      const percentage = Math.floor((correct / totalCards) * 100);
      return (
        <View style={styles.containerCenter}>
          <QuizResult id={id} correct={correct} percentage={percentage} totalCards={totalCards} toDeck={this.toDeck} toQuiz={this.toQuiz} />
        </View>
      );
    }
    return (
      <View style={styles.containerQuiz}>
        <ScrollView>
          <Text style={[styles.h3, styles.left]}>{cardIndex + 1}/{totalCards}</Text>
          <CardDetail card={deck.cards[cardIndex]} onPress={value => this.submitAnswer(value)} />
        </ScrollView>
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
