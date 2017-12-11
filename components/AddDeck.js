import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addDeck } from '../actions';
import { red, purple, white } from '../utils/colors';
import { keyGenerator } from '../utils/helpers';

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}
    >
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}

class AddDeck extends Component {
  state = {
    title: 'My Deck',
  }
  handleTextChange = (title) => {
    this.setState({ title });
  }
  submit = () => {
    const deck = this.state.title;
    const key = keyGenerator(deck);

    this.props.dispatch(addDeck({
      [key]: {
        title: deck,
        cards: [],
      },
    }));

    // console.log(`SUBMIT ACTION: key:${key}-deck:${deck}`);

    this.setState({ title: 'My Deck' });

    this.toHome();

    // submitEntry({ key, entry });
  }
  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }));
  }
  render() {
    return (
      <View style={styles.center}>
        <Text>Add Decks {JSON.stringify(this.props)}</Text>
        <Text style={styles.questionText}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
          style={styles.inputText}
        />
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
  inputText: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: purple,
    fontSize: 22,
    margin: 20,
  },
  questionText: {
    fontSize: 60,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
});

const mapStateToProps = state => ({

});


// const key = timeToString();
//
// return {
//   alreadyLogged: state[key] && typeof state[key].today === 'undefined',
// };

export default connect(mapStateToProps)(AddDeck);
