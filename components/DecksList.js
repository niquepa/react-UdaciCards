import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

class DecksList extends Component {
  render() {
    return (
      <View>
        <Text>List of Decks</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  // const key = timeToString();
  //
  // return {
  //   alreadyLogged: state[key] && typeof state[key].today === 'undefined',
  // };
}

export default DecksList;