import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import CardDetail from './CardDetail';
import QuizResult from './QuizResult';
import { styles } from '../utils/styles';
import FlipCard from 'react-native-flip-card';
import { UdacityBtn } from '../utils/helpers';

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
      <View style={styles.containerQuiz}>
        <ScrollView>
          <Text style={[styles.h3, styles.left]}>{cardIndex + 1}/{totalCards}</Text>
          {/* <CardDetail card={deck.cards[cardIndex]} onPress={value => this.submitAnswer(value)} /> */}
          <View>
            <FlipCard style={styles.card}>
              <View style={styles.face}>
                <Text style={styles.h1}>{deck.cards[cardIndex].question}</Text>
              </View>
              <View style={styles.back}>
                <Text style={styles.h1}>{deck.cards[cardIndex].answer}</Text>
              </View>
            </FlipCard>
          </View>
          <View style={styles.buttons}>
            <UdacityBtn
              text="Correct"
              onPress={() => this.props.onPress(1)}
              color="green"
            />
            <UdacityBtn
              text="Incorrect"
              onPress={() => this.props.onPress(0)}
              color="red"
            />
          </View>
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
