import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import DeckCard from './DeckCard';
import { fetchDecks } from '../actions/index';
import { styles } from '../utils/styles';

class DecksList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {
          Object.keys(decks).map(key => (
            <DeckCard
              key={key}
              title={decks[key].title}
              cards={decks[key].cards.length}
              onPress={() => navigate('DeckDetail', { id: key })}
            />
          ))
        }
      </View>
    );
  }
}

const mapStateToProps = decks => ({
  decks,
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(fetchDecks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
