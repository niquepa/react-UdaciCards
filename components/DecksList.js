import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import DeckCard from './DeckCard';
import { NavigationActions } from 'react-navigation';
import { purple, white } from '../utils/colors';

class DecksList extends Component {
  render() {
    const { decks } = this.props;
    const { navigate } = this.props.navigation;
    console.log(`DECKS: ${JSON.stringify(decks)}`);
    console.log(`DECKS SIZE: ${JSON.stringify(decks.size)}`);
    console.log(`PROPS LIST: ${JSON.stringify(this.props.navigation.navigate)}`);
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
            // <TouchableOpacity
            //   style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
            //   key={key}
            //   onPress={() => navigate('DeckDetail', {id: key})}
            // >
            //   <Text style={styles.CardText}> {decks[key].title} ({decks[key].cards.length} Card(s)) </Text>
            // </TouchableOpacity>
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

// function mapStateToProps(decks, { navigation }) {
//   // const { entryId } = navigation.state.params;
//
//   return {
//     // entryId,
//     decks,
//   };
// }

export default connect(mapStateToProps)(DecksList);
