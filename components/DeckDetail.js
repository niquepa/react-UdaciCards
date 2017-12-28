import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { UdacityBtn } from '../utils/helpers';

class DeckDetail extends Component {

  render() {
    const { navigation, totalCards, deck } = this.props;
    console.log(`PROPS EN RENDER DETAIL: ${JSON.stringify(this.props)}`);
    // console.log(`STYLES ${styles.iosSubmitBtn}`)
    return (
      <View>
        <Text>PROPS: {JSON.stringify(this.props)}</Text>
        <Text>{deck.title}</Text>
        <Text>{totalCards} cards</Text>
        <UdacityBtn
          text="Start Quiz"
          onPress={() => (navigation.navigate('Quiz', { id: this.props.id }))}
          disabled={totalCards > 0 ? false : true}
          color={totalCards > 0 ? '' : 'gray'}
        />
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

export default connect(mapStateToProps)(DeckDetail);
