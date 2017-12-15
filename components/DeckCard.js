import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { red, purple, white } from '../utils/colors';
import { UdacityBtn } from '../utils/helpers';

// const navigateAction = NavigationActions.navigate({
//   routeName: 'DeckDetail',
//   params: { id},
//
//   // navigate can have a nested navigate action that will be run inside the child router
//   action: NavigationActions.navigate({ routeName: 'SubProfileRoute' }),
// });

class DeckCard extends Component {
  render() {
    const { title, cards, onPress } = this.props;
    console.log(`PROPS: ${JSON.stringify(this.props.navigation)}`);

    return (
      <View style={styles.container}>
        <UdacityBtn text={`${title} (${cards} Cards)`} onPress={onPress} />
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
  // decks,
});

// function mapStateToProps(decks, { navigation }) {
//   // const { entryId } = navigation.state.params;
//
//   return {
//     // entryId,
//     decks,
//   };
// }

export default connect(mapStateToProps)(DeckCard);
