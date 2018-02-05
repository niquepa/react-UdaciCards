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
        <View>
          <FlipCard style={styles.card} perspective={1000}>
            <View style={styles.face}>
              <Text style={styles.h1}>{card.question}</Text>
            </View>
            <View style={styles.back}>
              <Text style={styles.h1}>{card.answer}</Text>
            </View>
          </FlipCard>
        </View>
        <View>
          <Text style={styles.secondaryText}>* Click the question to see the answer</Text>
        </View>
        <View style={styles.buttons}>
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
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => ({
});

export default connect(mapStateToProps)(CardDetail);
