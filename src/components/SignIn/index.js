
import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { signInUser } from '../../config/firebase/autenticacao';

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

        </View>
      </View>
    </SafeAreaView>
  );
}