import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Platform, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
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

      this.toHome();

      submitDeck({ key, deck });
    }
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({ key: 'AddDeck' }));
  }

  render() {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.h1}>What is the title of your new deck?</Text>
        <TextInput
          value={this.state.title}
          onChangeText={this.handleTextChange}
          style={styles.inputText}
        />
        <UdacityBtn text="Create Deck" onPress={this.submit} />
      </View>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(AddDeck);
