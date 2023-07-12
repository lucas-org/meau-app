import { db } from '../config/firebase/firebase';
import { currentUser } from '../config/firebase/autenticacao';
import { collection, addDoc, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';

async function sendPushNotification(message) {
    /* const message = {
        to: expoPushToken,
        sound: 'default',
        title: 'Original Title',
        body: 'And here is the body!',
        data: { someData: 'goes here' },
    }; */

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}

const usuarioService = {
    
    async SendNotificationToAnimalOwner(animal) {
        // DEPOIS QUE O USUARIO ENTRAR NA LISTA DE INTERESSADOS
        // get user expoPushToken by animal.responsavelId
        const docRef = doc(db, "usuarios", animal.responsavelId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            if (docSnap.data().expoPushToken) {
                // send notification to user
                console.log("expoPushToken: ", docSnap.data().expoPushToken);
                const message = {
                    to: docSnap.data().expoPushToken,
                    sound: 'default',
                    title: 'Seu pet tem um novo interessado!',
                };
                sendPushNotification(message);
            }
        } else {
            console.log("Usuario nao encontrado");
        }
    }
}

export default usuarioService;
// Pegar o animalId
        // Pegar o responsavelId do animal
        // Pegar o expoPushToken do responsavelId
        // Enviar a notificação