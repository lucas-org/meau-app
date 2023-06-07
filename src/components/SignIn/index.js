
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


//npm install --save react-firebase-hooks
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../config/firebase/firebase';

import Intruducao from '../Introducao/Introducao';
import TelaErroAutorizacao from '../Error/TelaErroAutorizacao';
import { Formik } from 'formik';
import * as yup from 'yup';
import { signInUser } from '../../config/firebase/autenticacao';
import { set } from 'react-native-reanimated';

export default function SignIn({ navigation }) {

  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={{ marginTop: 64 }}>
      <View>
        <Formik
          initialValues={{ email: '', senha: '' }}
          onSubmit={(values) => {
            setLoading(true);
            console.log("values: ", values)
            signInUser(values).then(() => {[setLoading(false)]});
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

        </View>
      </View>
    </SafeAreaView>
  );
}