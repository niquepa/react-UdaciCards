import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import DeckCard from './DeckCard';
import { NavigationActions } from 'react-navigation';
import { purple, white } from '../utils/colors';
import CardDetail from './CardDetail';

class Quiz extends Component {
  state = {
    cardIndex: 0,
    percentage: 0,
    ok: 0,
  }

  submitAnswer = (value) => {
    // if (correct) {
      this.setState(prevState => ({ ok: prevState.ok + value, cardIndex: prevState.cardIndex + 1 }));
    // }
  }

  render() {
    return (
      <View>
        <Text>PROPS: {JSON.stringify(this.props.deck.cards)}</Text>
        <Text>Quiz view {this.props.id}</Text>
        <Text>{this.state.cardIndex + 1}/{this.props.deck.cards.length}</Text>
        <Text>Correct: {this.state.ok}</Text>
        <CardDetail card={this.props.deck.cards[this.state.cardIndex]} onPress={value => this.submitAnswer(value)} />
      </View>
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

export default connect(mapStateToProps)(Quiz);
