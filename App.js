import React, { useEffect, useState } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
//npm install @react-navigation/drawer
//npx expo install react-native-gesture-handler react-native-reanimated
import { PaperProvider } from 'react-native-paper';


import Home from './src/components/Home';
import TelaErroAutorizacao from './src/components/Error/TelaErroAutorizacao.jsx';
import SignIn from './src/components/SignIn';
import MenuButton from './src/utils/MenuButton';
import CadastroAnimal from './src/components/Register/CadastroAnimal';
import CadastroPessoal from './src/components/Register/CadastroPessoal';
import Introducao from './src/components/Introducao/Introducao';
import ListaAnimais from './src/components/ListaAnimais';
import { currentUser, isLogged } from './src/config/firebase/autenticacao';
import { RoutesLogged, RoutesNotLogged } from './src/routes/routes';

import 'react-native-gesture-handler';
//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import { auth } from './src/config/firebase/firebase';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((_user) => {
      setUser(_user)
    });
  }, []);

  return (
    <PaperProvider>
      {user ? (
        <RoutesLogged />
      ) : (
        <RoutesNotLogged />
      )
      }
    </PaperProvider>
  );
}