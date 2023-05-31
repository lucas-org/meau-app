import { db } from '../config/firebase/firebase';
import { query, collection, getDocs } from 'firebase/firestore';

const animalService = {
    async getAnimals() {
        const q = query(collection(db, "animais"));
        const querySnapshot = await getDocs(q);
        const animals = querySnapshot.docs.map(doc => doc.data());
        return animals;
    },
    async createAnimal(animal) {
        const docRef = await addDoc(collection(db, "animais"), animal);
        console.log("Document written with ID: ", docRef.id);
    }
}

export default animalService;