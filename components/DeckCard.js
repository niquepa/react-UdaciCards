import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

class DeckCard extends Component {
  render() {
    return (
      <View>
        <Text>THIS IS: {this.props.data}</Text>
      </View>
    );
  }
}

const mapStateToProps = decks => ({
  //decks,
});

// function mapStateToProps(decks, { navigation }) {
//   // const { entryId } = navigation.state.params;
//
//   return {
//     // entryId,
//     decks,
//   };
// }

export default connect(mapStateToProps)(DeckCard);