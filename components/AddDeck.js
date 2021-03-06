import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { addDeck } from '../actions';
import { submitDeck } from '../utils/api';
import { alert, UdacityBtn } from '../utils/helpers';
import { styles } from '../utils/styles';

class AddDeck extends Component {
  state = {
    title: 'My Deck',
    cards: [],
  }
  handleTextChange = (title) => {
    this.setState({ title });
  }
  handleOnFocus = () => {
    if (this.state.title === 'My Deck') {
      this.setState({ title: '' });
    }
  }
  submit = () => {
    if (this.state.title === '' || this.state.title === 'undefined') {
      alert('Error creating new deck', 'You have to specify a title');
    } else {
      // const key = keyGenerator(deck);
      const key = this.state.title;
      const deck = this.state;

      this.props.dispatch(addDeck({
        [key]: deck,
      }));

      this.setState({ title: 'My Deck' });

      submitDeck({ key, deck });

      this.toNewDeck(key);
    }
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }));
  }

  toNewDeck = (id) => {
    this.props.navigation.navigate('DeckDetail', { id });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerCenter} behavior="padding">
        <Text style={styles.h1}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
          onFocus={this.handleOnFocus}
          style={styles.inputText}
        />
        <UdacityBtn text="Create Deck" onPress={this.submit} />
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({

});

AddDeck.propTypes = {
  dispatch: PropTypes.func,
  navigation: PropTypes.object,
};

export default connect(mapStateToProps)(AddDeck);
