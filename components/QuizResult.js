import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from '../utils/styles';
import { UdacityBtn, clearLocalNotification, setLocalNotification } from '../utils/helpers';

class QuizResult extends Component {
  componentDidMount() {
    clearLocalNotification()
      .then(setLocalNotification);
  }

  render() {
    return (
      <View>
        <View style={styles.containerCenter}>
          <Text style={styles.h3}>{this.props.correct} correct answers out of {this.props.totalCards}, your score is:</Text>
          <Text style={[styles.h1, styles.result]}>{this.props.percentage} %</Text>
        </View>
        <View style={styles.container}>
          <UdacityBtn text="Start over!" onPress={this.props.toQuiz} />
          <UdacityBtn text="Return to deck" onPress={this.props.toDeck} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => ({
});

QuizResult.propTypes = {
  percentage: PropTypes.number,
  totalCards: PropTypes.number,
  correct: PropTypes.number,
  toQuiz: PropTypes.func,
  toDeck: PropTypes.func,
};

export default connect(mapStateToProps)(QuizResult);
