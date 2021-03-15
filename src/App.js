import firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import firebaseConfig from './firebase.config';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

function App() {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    firebase.auth()
    .signInWithPopup(providerGoogle)
    .then((result) => {
      var credential = result.credential;
      var token = credential.accessToken;
      var user = result.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  //Facebook 
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  const handleFacebookSignIn = () => {
    firebase.auth()
    .signInWithPopup(providerFacebook)
    .then((result) => {
      var credential = result.credential;
      var user = result.user;
      var accessToken = credential.accessToken;

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  return (
    <div className="App">
       <button onClick={handleGoogleSignIn}>Sign in using google</button>
       <br/>
       <button onClick={handleFacebookSignIn}>Sign in using facebook</button>
    </div>
  );
}

export default App;
