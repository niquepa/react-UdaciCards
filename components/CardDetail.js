import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import FlipCard from 'react-native-flip-card';
import { UdacityBtn } from '../utils/helpers';
import { styles } from '../utils/styles';


class CardDetail extends Component {
  render() {
    const { card } = this.props;

    return (
      <View>
        <FlipCard>
          <View style={styles.face}>
            <Text style={styles.h1}>{card.question}</Text>
          </View>
          <View style={styles.back}>
            <Text style={styles.h1}>{card.answer}</Text>
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
