// Botões
import { View, Text } from 'react-native';
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