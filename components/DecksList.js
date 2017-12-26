import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import DeckCard from './DeckCard';
import { NavigationActions } from 'react-navigation';
import { purple, white } from '../utils/colors';
import { fetchDecks } from '../actions/index';

class DecksList extends Component {
  componentDidMount() {
    this.props.getDecks();
  }

  render() {
    const { decks } = this.props;
    const { navigate } = this.props.navigation;
    console.log(`DECKS: ${JSON.stringify(decks)}`);
    console.log(`DECKS SIZE: ${decks.size}`);
    return (
      <View>
        <Text>List of Decks {JSON.stringify(this.props)}</Text>
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // paddingHorizontal: 10,
    marginTop: 10,
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});

const mapStateToProps = decks => ({
  decks,
});

const mapDispatchToProps = dispatch => ({
  getDecks: () => dispatch(fetchDecks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
