import { StackNavigator }     from 'react-navigation';
import HomeTabNav             from './HomeTabNav';
import { red, purple, white } from '../../utils/colors';
import DeckTabNav             from './DeckTabNav';
import Quiz                   from "../Quiz";

const MainNav = StackNavigator({
  Home: {
    screen: HomeTabNav,
  },
  DeckDetail: {
    screen: DeckTabNav,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
});

export default MainNav;
