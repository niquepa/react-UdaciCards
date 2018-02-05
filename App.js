import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import thunk from 'redux-thunk';
import MainNav from './components/Navigators/MainNav';
import reducer from './reducers';
import { purple } from './utils/colors';
import { setLocalNotification } from './utils/helpers';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNav />
        </View>
      </Provider>
    );
  }
}
