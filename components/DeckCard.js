import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from '../utils/styles';

class DeckCard extends Component {
  render() {
    const { title, cards, onPress } = this.props;

    return (
      <View >
        <TouchableOpacity
          style={[Platform.OS === 'ios' ? styles.iosDeckCard : styles.androidDeckCard]}
          onPress={onPress}
        >
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubTitle}>{cards} Cards</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = decks => ({
  // decks,
});

DeckCard.propTypes = {
  onPress: PropTypes.func,
  cards: PropTypes.number,
  title: PropTypes.string,
};

export default connect(mapStateToProps)(DeckCard);
