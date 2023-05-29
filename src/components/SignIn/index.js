
import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
// Autentencação
//import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
//import { auth } from '../../config/firebase/firebaseConfig';

import { TextInput, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';


export default function SignIn({ navigation }) {

  /* const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth); */

  function handleSignIn(e) {
    e.preventDefault();
    //signInWithEmailAndPassword(email, password);
  }

/*   if (loading) {
    return <Text>carregando...</Text>;
  }

  if (user) {
    return console.log(user);
    <CadastroPessoal />
  }

  if (error) {
    return console.log(error.code);
  } */

  return (
    <SafeAreaView style={{ marginTop: 64 }}>
      <Formik
        initialValues={{ email: '', senha: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>

            <View style={{ marginEnd: 10, marginStart: 10 }}>
              <TextInput
                placeholder='E-mail'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                placeholder="Password"
                //secureTextEntry={true}
                onChangeText={handleChange('senha')}
                onBlur={handleBlur('senha')}
                value={values.senha}
              />
            </View>

            <View style={{ flexDirection: 'col', justifyContent: 'center', alignItems: 'center' }}>
              <Button
                buttonStyle={{
                  backgroundColor: '#88c9bf',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'normal', fontSize: 13, color: '#434343' }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                onPress={handleSignIn}
              >
                ENTRAR
              </Button>
              <Button
                icon="facebook"
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                buttonStyle={{
                  backgroundColor: '#194f7c',
                  borderRadius: 5,
                }}
                onPress={() => console.log('facebook')}
              >
                ENTRAR COM FACEBOOK
              </Button>
              <Button radius={'sm'} type="solid"
                titleStyle={{ fontWeight: 'normal', fontSize: 13 }}
                icon="google"
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                buttonStyle={{
                  backgroundColor: '#f15f5c',
                  borderRadius: 5,
                }}
                onPress={() => console.log('aye')}
              >
                ENTRAR COM GOOGLE
              </Button>
              <Button
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: '#88c9bf',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'normal', fontSize: 13, color: '#434343' }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 200,
                  marginVertical: 10,
                }}
                onPress={() => navigation.navigate('Tela Erro Autorizacao')}
              >
                teste tela de erro de autorização
              </Button>

            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#397af8',
    marginBottom: 20,
    width: '100%',
    paddingVertical: 15,
  },
  heading: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerRight: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  subheaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});