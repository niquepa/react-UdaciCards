import React from 'react';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import Quiz from '../Quiz';
import { purple, white } from '../../utils/colors';
import DeckDetail from '../DeckDetail';
import AddCard from '../AddCard';

const DeckTabNav = TabNavigator({
  DecksList: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
      tabBarLabel: 'Deck detail',
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add Card',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
    },
  },
  // Quiz: {
  //   screen: Quiz,
  //   navigationOptions: {
  //     tabBarLabel: 'Start Quiz',
  //     tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
  //   },
  // },
}, {
  // navigationOptions: {
  //   header: null,
  // },
  navigationOptions: props => ({
    title: props.navigation.state.params.id,
  }),
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
});

export default DeckTabNav;
