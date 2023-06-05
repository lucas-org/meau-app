// Botões
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import CadastroPessoal from '../Register/CadastroPessoal';
import CadastroAnimal from '../Register/CadastroAnimal';
import { useEffect, useState } from 'react';
import { currentUser } from '../../config/firebase/autenticacao';

export default function Home({ navigation }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(currentUser());
  }, []);

    return (
        <View>
          <Text>Usuario logado</Text>
          <Text>{user?.email}</Text>
        </View>
    );
}