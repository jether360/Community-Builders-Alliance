import { initializeApp } from "firebase/app";
import { signInWithPopup, GoogleAuthProvider, getAuth, FacebookAuthProvider } from "firebase/auth";
import "firebase/analytics";
import "firebase/messaging";
import {
  getFirestore,
//  doc,
//  setDoc,
  collection,
 // getDocs,
 // onSnapshot,
  addDoc,
 // query,
 // where,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

//import { makeAutoObservable, reaction } from "mobx";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "voting-platform-926cc.firebaseapp.com",
  projectId: "voting-platform-926cc",
  storageBucket: "voting-platform-926cc.appspot.com",
  messagingSenderId: "203123926973",
  appId: "1:203123926973:web:9c3e136c4f206b36fad4d4"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export const logout = () => {
  authentication.signOut();
};

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authentication, provider)
      .then(async (re) => {
      //  onSnapshot(collection(db, "users"), async (snapshot) => {
         // const user = re.user;
          // collection(db, "users");
           // where("uid", "==", re.user.uid)
           //   getDocsconst user = re.user;
        //   const colRef = collection(db, "users");
        //   const q =  query(colRef, where("uid", "==", user.uid));
       //  await getDocs(q);
     //     if (snapshot.docs.length === 0 ) {
            const collectionRef = collection(db, "users")
            const payload = {
              id: re.user.uid,
              name: re.user.displayName,
              email: re.user.email,
            }
            await addDoc(collectionRef, payload);
            //console.log(re.user.displayName);
            
            //console.log(re.user.uid);
            //console.log(re.user.email);
            //    }
       //   }
        //});
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(error);
  }
};

export const signInWithFacebook = async () => {
  try {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(authentication, provider)
      .then(async (re) => {
      //  onSnapshot(collection(db, "users"), async (snapshot) => {
         // const user = re.user;
          // collection(db, "users");
           // where("uid", "==", re.user.uid)
           //   getDocsconst user = re.user;
        //   const colRef = collection(db, "users");
        //   const q =  query(colRef, where("uid", "==", user.uid));
       //  await getDocs(q);
     //     if (snapshot.docs.length === 0 ) {
            const collectionRef = collection(db, "users")
            const payload = {
              id: re.user.uid,
              name: re.user.displayName,
              email: re.user.email,
            }
            await addDoc(collectionRef, payload);
            //console.log(re.user.displayName);
            
            //console.log(re.user.uid);
            //console.log(re.user.email);
            //    }
       //   }
        //});
      })
      .catch((err) => {
        console.log(err.message);
      });
  } catch (error) {
    console.log(error);
  }
};
