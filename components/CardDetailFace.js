import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';

export class CardDetailFace extends Component {
  render() {
    const { onPress, text, link } = this.props;
    return (
      <View>
        <Text>{text}</Text>
        <Text onPress={onPress}>{link}</Text>
      </View>
    );
  }
}

export class Face extends Component {
  render() {
    return (
      <View
        style={[this.props.style]}
      >
        {this.props.children}
      </View>
    );
  }
}

export class Back extends Component {
  render() {
    const transform = [];
    transform.push({ scaleX: -1 });
    if (Platform.OS === 'android') {
      transform.push({ perspective: this.props.perspective });
    }

    return (
      <View
        style={[
          this.props.style,
          { transform },
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}
