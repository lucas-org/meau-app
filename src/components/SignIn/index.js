
import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';


//npm install --save react-firebase-hooks
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from '../../config/firebase/firebase';

import Intruducao from '../Introducao/Introducao';
import TelaErroAutorizacao from '../Error/TelaErroAutorizacao';

export default function SignIn({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  function handleSignIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  if (loading) {
    console.log(email);
    console.log(password);
    return <Text>carregando...</Text>;
  }

  if (user) {
    return <Intruducao />
    //return console.log(user);
    /*<CadastroPessoal />*/
  }

  if (error) {
      console.log(error.code);
      return <TelaErroAutorizacao />
  }

  return (
    <SafeAreaView style={{ marginTop: 64 }}>
      <View>
        <View>
          <TextInput
            placeholder='E-mail'
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <View>
          <Button
            onPress={handleSignIn}
          >
            ENTRAR
          </Button>
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