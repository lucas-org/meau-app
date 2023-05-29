import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home';
import TelaErroAutorizacao from './src/components/Error/TelaErroAutorizacao.jsx';
import SignIn from './src/components/SignIn';
import MenuButton from './src/utils/MenuButton';
import CadastroAnimal from './src/components/Register/CadastroAnimal';
import CadastroPessoal from './src/components/Register/CadastroPessoal';
import Introducao from './src/components/Introducao/Introducao';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {

  const [user, setUser] = useState(null);

  /* useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      setUser(_user)
    })
  }, []);  */

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={user ? "Home" : "Introducao"}>
            {user ? (
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name='Introducao' component={Introducao} options={{ title: '', headerLeft: () => <MenuButton />, headerStyle: { backgroundColor: '#fff' } }} />
            )}
            <Stack.Screen name="Cadastro Animal" component={CadastroAnimal} options={{ title: 'Cadastro Animal', headerLeft: () => <MenuButton />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name="Cadastro Pessoal" component={CadastroPessoal} options={{ title: 'Cadastro Pessoal', headerLeft: () => <MenuButton />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Login', headerLeft: () => <MenuButton />, headerStyle: { backgroundColor: '#cfe9e5' } }} />
            <Stack.Screen name='Tela Erro Autorizacao' component={TelaErroAutorizacao} options={{ headerShown: false }} /> 
            
              
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}