import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addDeck } from '../actions';
import { red, purple, white } from '../utils/colors';

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

class AddCard extends Component {
  state = {
    question: 'The Question?',
    answer: 'The Answer',
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  submit = () => {
    const deck = this.state.title;
    // const key = keyGenerator(deck);
    const key = deck;

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
        <Text>Add Card to Deck {JSON.stringify(this.props)}</Text>
        <TextInput
          value={this.state.question}
          onChangeText={this.handleInputChange}
          style={styles.inputText}
        />
        <TextInput
          value={this.state.answer}
          onChangeText={this.handleInputChange}
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

export default connect(mapStateToProps)(AddCard);
