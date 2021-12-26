import { useEffect, useState } from "react"
import initializeaFirebase from "../components/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword , GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth";


initializeaFirebase()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isLoading, setIsloading] = useState(true)
    const [authError ,  setAuthError] = useState('')


    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password) => {
      setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
            // ..
          })
          .finally(() => setIsloading(false));
        
    }

    const loginUser = (email, password) => {
      setIsloading(true)

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsloading(false));


    }

    const singInGoolge = (location ,  history) => {
      setIsloading(true)

      signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const user = result.user;
    setAuthError('');

    
  }).catch((error) => {
    setAuthError(error.message);

  })  
  .finally(() => setIsloading(false));


    }





// observer user state
    useEffect( () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUser(user)
          
        } else {
          setUser({})
        }
        setIsloading(false);
      });
      return () =>  unsubscribe;
    } ,[]  )


    const logout = () => {
        setIsloading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsloading(false))          
          
    }

    return{
        user,
        isLoading,
        authError,
        registerUser,
        singInGoolge,
        loginUser,
        logout,

    }


}
export default useFirebase