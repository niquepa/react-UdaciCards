import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import DeckCard from './DeckCard';
import { NavigationActions } from 'react-navigation';
import { purple, white } from '../utils/colors';

class Quiz extends Component {
  render() {
    return (
      <View>
        <Text>Quiz view {this.props.id}</Text>
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

// function mapStateToProps(decks, { navigation }) {
//   // const { entryId } = navigation.state.params;
//
//   return {
//     // entryId,
//     decks,
//   };
// }

export default connect(mapStateToProps)(Quiz);
