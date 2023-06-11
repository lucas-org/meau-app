import React, { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import { auth } from './src/config/firebase/firebase';
import { RoutesLogged, RoutesNotLogged } from './src/routes/routes';
import 'react-native-gesture-handler';

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