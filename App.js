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


import 'react-native-gesture-handler';
//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import { auth } from './src/config/firebase/firebase';

export default function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((_user) => {
      setUser(_user)
    })
    return unsubscribe;
    //setUser(isLogged());
    //console.log(user);
    console.log("isLogged: ", isLogged());
  }, []);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            {user ? (
              <>
                <Drawer.Screen name='Introducao' component={Introducao} options={{ title: 'Introducao', headerStyle: { backgroundColor: '#fff' } }} />
                <Drawer.Screen name="Cadastro Animal" component={CadastroAnimal} options={{ title: 'Cadastro Animal', headerStyle: { backgroundColor: '#cfe9e5' } }} />
                <Drawer.Screen name='Tela Erro Autorizacao' component={TelaErroAutorizacao}/>
                <Drawer.Screen name='Lista Animais' component={ListaAnimais}/>
              </>
            ):(
              <>
                <Drawer.Screen name="SignIn" component={SignIn} options={{ title: 'Login', headerStyle: { backgroundColor: '#cfe9e5' } }} />
                <Drawer.Screen name="Cadastro Pessoal" component={CadastroPessoal} options={{ title: 'Cadastro Pessoal', headerStyle: { backgroundColor: '#cfe9e5' } }} />
                <Drawer.Screen name="Home" component={Home} options={{ title: 'Home', headerStyle: { backgroundColor: '#cfe9e5' } }}/>
                <Drawer.Screen name='Tela Erro Autorizacao' component={TelaErroAutorizacao}/>
              </>
            )}
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}