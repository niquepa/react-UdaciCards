import React from 'react';
import { TouchableOpacity, Text, Platform, Alert } from 'react-native';
import { styles } from './styles';

export const keyGenerator = title => title.replace(/\s/gi, '');

export const UdacityBtn = props => (
  <TouchableOpacity
    style={[Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.androidSubmitBtn, props.color ? { backgroundColor: props.color } : '']}
    onPress={props.onPress}
    disabled={props.disabled}
  >
    <Text style={styles.cardTitle}> {props.text} </Text>
  </TouchableOpacity>
);

export const alert = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'OK' },
    ],
  );
};
