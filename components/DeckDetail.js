import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { UdacityBtn } from '../utils/helpers';

class DeckDetail extends Component {
  // static navigationOptions = ( { navigation }) => {
  //   console.log(`NAV OPTIONS: ${JSON.stringify(navigation)}`);
  //   // const title = this.props.deck ? this.props.deck.title : 'NO TITULO';
  //   return {
  //     title: 'HOLA',
  //   };
  // }
  // constructor(props) {
  //   super(props);
  //   if (props.deck) {
  //     props.navigation.setParams({ deck: props.deck });
  //   }
  // }

  // static navigationOptions = ({ navigation }) => {
  //   // const title = (((((navigation || '').state || '').params || '').deck || '').title || '') !== '' ? navigation.state.params.deck.title : 'NO TITLE';
  //   const title = navigation.state.params.id;
  //   return {
  //     title,
  //   };
  // }

  // componentWillReceiveProps(nextProps) {
  //   console.log('ENTRO A WILL RECEIVE');
  //   if (nextProps.deck && nextProps.deck !== this.props.deck) {
  //     console.log('ENTRO A RECEIVE DECK');
  //     this.props.navigation.setParams({ deck: nextProps.deck });
  //   }
  // }
  // componentDidMount() {
  //   console.log(`ENTRO A DIDMOUNT ${JSON.stringify(this.navigation)}`);
  //   if(this.props.deck) {
  //     this.props.navigation.setParams({ deck: this.props.deck });
  //   }
  // }

  render() {
    console.log(`PROPS EN RENDER DETAIL: ${JSON.stringify(this.props)}`);
    // console.log(`STYLES ${styles.iosSubmitBtn}`)
    return (
      <View>
        <Text>PROPS: {JSON.stringify(this.props)}</Text>
        <Text>{this.props.deck.title}</Text>
        <Text>{this.props.deck.cards.length} cards</Text>
        <UdacityBtn text="Add Card" />
        <UdacityBtn text="Start Quiz" />
      </View>
    );
  }
}

const mapStateToProps = (decks, { navigation }) => {
  const { id } = navigation.state.params;
  return {
    deck: decks[id],
  };
};

export default connect(mapStateToProps)(DeckDetail);
