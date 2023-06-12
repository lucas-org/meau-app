import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { db } from './firebase';
import { collection, addDoc } from "firebase/firestore";

const auth = getAuth();

export const signUpUser = (userDetails) => {
    //deconstruct the users details we will need these later
    const { nome, idade, email, estado, cidade, endereco, telefone, username, senha, foto } = userDetails;
    //user firebase using the appropriate firebase method
    createUserWithEmailAndPassword(auth, email, senha)
        .then((res) => {
            console.log("Resposta da criacao do User: ", res);
            //Once the user creation has happened successfully, we can add the currentUser into firestore
            //with the appropriate details.
            const currentUser = auth.currentUser
            const uid = currentUser.uid
            //create a user profile object
            const userProfileData = {
                id: uid,
                nome: nome,
                idade: idade,
                email: email,
                estado: estado,
                cidade: cidade,
                endereco: endereco,
                telefone: telefone,
                username: username,
                foto: foto
            }
            // create a users collection in firestore and add the userProfile object
            const usersRef = collection(db, "usuarios");
            addDoc(usersRef, userProfileData)
                .then(() => {
                    //console.log('User profile created successfully!')
                }
                )
                .catch(error => {
                    //console.log('Something went wrong with added user to firestore: ', error);
                }
                )
        })
        //we need to catch the whole sign up process if it fails too.
        .catch(error => {
            console.log('Something went wrong with sign up: ', error);
        }
        )
}


export const signInUser = (userData) => {

    const { email, senha } = userData;
    
    signInWithEmailAndPassword(auth, email, senha)
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

export const signOutUser = () => {
    signOut(auth)
        .then(() => {
            console.log('User signed out!')
        })
        .catch(error => {
            console.log('Something went wrong with sign out: ', error);
        }
        )
}

export const currentUser = () => {
    return auth.currentUser;
}

export const isLogged = () => {
    const user = currentUser();
    if (user) {
        return true;
    } else {
        return false;
    }
}