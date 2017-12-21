import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { View, StatusBar } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import MainNav from './components/Navigators/MainNav';
import reducer from './reducers';
import { red, purple, white } from './utils/colors';

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNav />
        </View>
      </Provider>
    );
  }
}
