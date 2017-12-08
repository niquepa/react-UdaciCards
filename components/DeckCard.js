import React, { Component }                                   from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect }                                            from 'react-redux';
// import { NavigationActions } from 'react-navigation';
import { red, purple, white }                                 from '../utils/colors';
// import { AppBtn }                                             from '../utils/helpers';

function AppBtn({ onPress, text }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>{text}</Text>
    </TouchableOpacity>
  );
}

class DeckCard extends Component {
  render() {
    const { deckId, title, cards } = this.props;
    return (
      <View>
        <AppBtn onPress={`onPress`} text={title} />
        {/*<TouchableOpacity*/}
          {/*style={styles.button}*/}
          {/*onPress={() => this.props.navigation.navigate(*/}
            {/*'DeckDetail',*/}
            {/*{ deckId },*/}
          {/*)}*/}
        {/*>*/}
          {/*<Text style={styles.countText}>{title}</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: purple,
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF',
    fontSize: 22,
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
  submitBtnText: {
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
