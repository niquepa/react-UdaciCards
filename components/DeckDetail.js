import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';

class DeckDetail extends Component {
  // static navigationOptions = ( { navigation }) => {
  //   console.log(`NAV OPTIONS: ${JSON.stringify(navigation)}`);
  //   // const title = this.props.deck ? this.props.deck.title : 'NO TITULO';
  //   return {
  //     title: 'HOLA',
  //   };
  // }
  static navigationOptions = ({ navigation }) => {
    const title = navigation.params && navigation.params.deck ? navigation.params.deck : 'NO TITULO';
    return {
      title,
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('ENTRO A WILL RECEIVE');
    if (nextProps.deck) {
      console.log('ENTRO A RECEIVE DECK');
      this.props.navigation.setParams({ deck });
    }
  }

  render() {
    return (
      <View>
        <Text>Detail of Deck: {this.props.deck.title}</Text>
        <Text>PROPS: {JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    deck: decks[id],
  };
};

export default connect(mapStateToProps)(DeckDetail);
