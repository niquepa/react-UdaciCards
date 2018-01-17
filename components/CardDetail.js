import React, { Component } from 'react';
import { Animated, View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import FlipCard from 'react-native-flip-card';
import { UdacityBtn } from '../utils/helpers';
import { Back, Face } from './CardDetailFace';
import { styles } from '../utils/styles';


class CardDetail extends Component {
  state = {
    showAnswer: false,
    isFlipped: false,
    isFlipping: false,
    rotate: new Animated.Value(0),
    height: 0,
    width: 0,
    face: { width: 0, height: 0 },
    back: { width: 0, height: 0 },
  }

  componentWillReceiveProps(nextProps) {
    console.log(`isFlipped: ${this.state.isFlipped} props:${JSON.stringify(nextProps)}`)
    if (this.state.isFlipped !== 1) {
      this._toggleCard();
    }
  }

  _toggleCard() {
    console.log('Flipping');
    this.setState({ isFlipping: true });
    // this.props.onFlipStart(this.state.isFlipped);
    this._animation(!this.state.isFlipped);
  }
  _animation(isFlipped) {
    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.setState({ isFlipped: !this.state.isFlipped });
        this.timer = null;
      }, 150);
    }
    Animated.spring(
      this.state.rotate,
      {
        toValue: Number(isFlipped),
        // toValue: 1,
        friction: 6,
        useNativeDriver: true,
      },
    ).start((param) => {
      this.setState({ isFlipping: false });
      console.log('Flipped');
      // this.props.onFlipEnd(this.state.isFlipped);
    });
  }

  render() {
    const { card } = this.props;
    const { isFlipped } = this.state;
    const text = this.state.isFlipped ? card.question : card.answer;
    const link = this.state.isFlipped ? 'View Answer' : 'View Question';
    const transform = [];
    const opacity = 1;
    // let transform = this.props.perspective ? [{ perspective: this.props.perspective }] : []

    transform.push({
      rotateY: this.state.rotate.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
      }),
    });

    let cardSide = null;
    console.log(`ISFLLIPPED: ${isFlipped}`);
    if (isFlipped) {
      cardSide = (
        <Back>
          <Text>{card.answer}</Text>
          <Text>Sin Link</Text>
        </Back>
      );
    } else {
      cardSide = (
        <Face>
          <Text>{card.question}</Text>
          <Text onPress={() => this._toggleCard()}>View Answer</Text>
        </Face>
      );
    }

    return (
      <View style={styles.container}>
        <FlipCard>
          {/* Face Side */}
          <View style={styles.face}>
            <Text>{card.question}</Text>
          </View>
          {/* Back Side */}
          <View style={styles.back}>
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
