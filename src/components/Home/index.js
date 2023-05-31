// Botões
import { View, Text } from 'react-native';
import CadastroPessoal from '../Register/CadastroPessoal';
import CadastroAnimal from '../Register/CadastroAnimal';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase/firebase';


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