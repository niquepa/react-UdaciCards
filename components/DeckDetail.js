import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { UdacityBtn } from '../utils/helpers';
import { styles } from '../utils/styles';

class DeckDetail extends Component {
  render() {
    const { navigation, totalCards, deck } = this.props;
    console.log(`PROPS EN RENDER DETAIL: ${JSON.stringify(this.props)}`);
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.h1}>{deck.title}</Text>
        <Text style={[styles.h3, styles.secondaryText]}>{totalCards} cards</Text>
        <View>
          <UdacityBtn
            text="Start Quiz"
            onPress={() => (navigation.navigate('Quiz', { id: this.props.id }))}
            disabled={!(totalCards > 0)}
            color={totalCards > 0 ? '' : 'gray'}
          />
        </View>
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
