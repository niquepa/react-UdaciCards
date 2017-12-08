import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import DeckCard from './DeckCard';

class DecksList extends Component {
  render() {
    const { decks } = this.props;
    console.log(`DECKS: ${JSON.stringify(decks)}`);
    console.log(`DECKS SIZE: ${JSON.stringify(decks.size)}`);
    return (
      <View>
        <Text>List of Decks {JSON.stringify(this.props)}</Text>
        {
          Object.keys(decks).map(key => (
            <DeckCard key={key} deckId={key} title={decks[key].title} cards={decks[key].cards.length} />
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = decks => ({
  decks,
});

// function mapStateToProps(decks, { navigation }) {
//   // const { entryId } = navigation.state.params;
//
//   return {
//     // entryId,
//     decks,
//   };
// }

export default connect(mapStateToProps)(DecksList);
