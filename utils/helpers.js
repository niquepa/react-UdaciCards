import React from 'react';
import { TouchableOpacity, Text, Platform, Alert, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';
import { styles } from './styles';

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

const NOTIFICATION_KEY = 'UdaciCards:notifications';

export function clearLocalNotification() {
  console.log('CLEAR NOTIFICATIONS');
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification() {
  return {
    title: "It's Quiz time!",
    body: "👋 don't forget to practice!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              const tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(20);
              tomorrow.setMinutes(0);

              // tomorrow.setTime(tomorrow.getTime() + 60000); DEBUG PURPOSES

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                },
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          });
      }
    });
}