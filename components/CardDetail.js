import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import FlipCard from 'react-native-flip-card';
import { UdacityBtn } from '../utils/helpers';


class CardDetail extends Component {
  state = {
    showAnswer: false,
  }

  render() {
    const { card } = this.props;
    const text = this.state.showAnswer ? card.answer : card.question;
    const link = this.state.showAnswer ? 'View Question' : 'View Answer';
    return (
      <View>
        <FlipCard
          friction={6}
          perspective={1000}
          flipHorizontal
          flipVertical={false}
          flip={false}
          clickable
          onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd); }}
          useNativeDriver={true}
          clickable={true}
        >
          <View >
            <Text>{card.question}</Text>
          </View>
          <View >
            <Text>{card.answer}</Text>
          </View>
        </FlipCard>
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
