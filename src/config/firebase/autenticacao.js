import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

export const signUpUser = (userDetails) => {
    const auth = getAuth();
    //deconstruct the users details we will need these later
    const { nome, idade, email, estado, cidade, endereco, telefone, username, password, foto } = userDetails;
    return () => {
        //user firebase using the appropriate firebase method
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                const currentUser = auth.currentUser
                const uid = currentUser.uid
                //create a user profile object
                const userProfileData = {
                    id: uid,
                    nome: userDetails.nome,
                    idade: userDetails.idade,
                    email: userDetails.email,
                    estado: userDetails.estado,
                    cidade: userDetails.cidade,
                    endereco: userDetails.endereco,
                    telefone: userDetails.telefone,
                    username: userDetails.username,
                    foto: userDetails.foto,
                    createdAt: new Date()
                }
                // create a users collection in firestore and add the userProfile object
                const usersRef = collection(db, "usuarios");
                addDoc(usersRef, userProfileData)
                    .then(() => {
                        console.log('User profile created successfully!')
                    }
                    )
                    .catch(error => {
                        console.log('Something went wrong with added user to firestore: ', error);
                    }
                    )
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            }
            )
    }
}

export const signInUser = (email, password) => {
    const auth = getAuth();
    return () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log('User signed in!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
}

export const signOutUser = () => {
    const auth = getAuth();
    return () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out!')
            })
            .catch(error => {
                console.log('Something went wrong with sign out: ', error);
            }
            )
    }
}

export const currentUser = () => { 
    const auth = getAuth();
    return () => {
        const user = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Current user: ', user);
            } else {
                console.log('No user signed in!');
            }
        });
        return user;
    }
}
