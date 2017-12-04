import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import { receiveDecks } from '../actions';

class DecksList extends Component {
  // componentDidMount() {
  //   this.props.dispatch(receiveDecks(decks));
  // }
  render() {
    return (
      <View>
        <Text>List of Decks {JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks,
});

export default connect(mapStateToProps)(DecksList);
