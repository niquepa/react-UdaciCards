import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { UdacityBtn } from '../utils/helpers';

class CardDetail extends Component {
  state = {
    showAnswer: false,
  }

  render() {
    const { navigation, card } = this.props;
    const text = this.state.showAnswer ? card.answer : card.question;
    const link = this.state.showAnswer ? 'View Question' : 'View Answer';
    console.log(`PROPS EN CARD DETAIL: ${JSON.stringify(card)}`);
    return (
      <View>
        <Text>PROPS: {JSON.stringify(this.props)}</Text>
        <Text>{text}</Text>
        <Text>{link}</Text>
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
    );
  }
}

const mapStateToProps = (decks, { navigation }) => ({
});

export default connect(mapStateToProps)(CardDetail);
