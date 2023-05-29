// Navegação
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Botões
import { Button, Icon } from '@rneui/themed';

import { View, Text } from 'react-native';
import CadastroPessoal from '../Register/CadastroPessoal';
import CadastroAnimal from '../Register/CadastroAnimal';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase/firebaseConfig';


export default function Home({ navigation }) {

  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((_user) => {
      setUser(_user)
    })
  }, []);

    return (
        <View>
          <Text>Usuario logado</Text>
          <Text>{user?.email}</Text>
        </View>
    );
}