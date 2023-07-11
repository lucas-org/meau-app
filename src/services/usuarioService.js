import { db } from '../config/firebase/firebase';
import { query, collection, getDocs, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { currentUser } from '../config/firebase/autenticacao';

const usuarioService = {
    
    async SendNotificationToAnimalOwner(animalId) {
        // DEPOIS QUE O USUARIO ENTRAR NA LISTA DE INTERESSADOS
        // Pegar o animalId
        // Pegar o responsavelId do animal
        // Pegar o expoPushToken do responsavelId
        // Enviar a notificação
    }
}

export default usuarioService;