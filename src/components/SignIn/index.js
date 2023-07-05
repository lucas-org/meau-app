
import React, { useState, useRef, useEffect } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { signInUser } from '../../config/firebase/autenticacao';
import axios from 'axios';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';


const sendNotification = async (expoPushToken) => {
  const url = 'https://fcm.googleapis.com/fcm/send';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'key=AAAAOFcssY4:APA91bFdJbB6tsXdvbDIkTdrWhUB0An1CpdQQLFPxQnOUIZ_KUsTZB9WjQEdQJLZVyUEag0kfuFLon7OBMGQh1N5jPbkxrJhpzIQkwKRWYdMHC_j87Ke-OHDMj_hSy9tWtoN2MUFeWnz',
  };
  const data = {
    to: expoPushToken,
    priority: 'normal',
    data: {
      experienceId: '@akrasia42/meau',
      scopeKey: '@akrasia42/meau',
      title: "📧 You've got mail",
      message: 'Hello world! 🌐',
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log(token);
    console.log(Device.brand);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}


export default function SignIn({ navigation }) {

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ marginTop: 64 }}>
      <View>
        <Formik
          initialValues={{ email: '', senha: '' }}
          onSubmit={(values) => {
            setLoading(true);
            console.log("values: ", values)
            signInUser(values).then(() => { [setLoading(false)] });
            //navigation.navigate('Home');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                placeholder='E-mail'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder='Senha'
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
              />
              <Button
                onPress={handleSubmit}
                loading={loading}
              >
                ENTRAR
              </Button>
            </View>
          )}
        </Formik>
        <View>
          <Button
            icon="facebook"
            onPress={() => console.log('facebook')}
          >
            ENTRAR COM FACEBOOK
          </Button>
          <Button
            icon="google"
            onPress={() => console.log('aye')}
          >
            ENTRAR COM GOOGLE
          </Button>
          <Button
            onPress={() => navigation.navigate('Cadastro Pessoal')}
          >
            cadastrar
          </Button>

          <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text>Title: {notification && notification.request.content.title} </Text>
              <Text>Body: {notification && notification.request.content.body}</Text>
              <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
            </View>
            <Button
              onPress={async () => {
                await sendNotification(expoPushToken);
              }}
            >
              Enviar Notificação
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}