import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class QuizResult extends Component {
  render() {
    return (
      <View>
        <Text>Quiz Result {this.props.id}</Text>
        <Text>Correct: {this.props.correct}</Text>
        <Text>Percentage: {this.props.percentage}</Text>
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => ({
});

export default connect(mapStateToProps)(QuizResult);
