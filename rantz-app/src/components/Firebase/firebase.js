import app from 'firebase/app'

const config = {
  apiKey: "AIzaSyDS8Y8cYC-znev4BaEBtlryZx6VOHllDnE",
  authDomain: "rantz-f2723.firebaseapp.com",
  databaseURL: "https://rantz-f2723.firebaseio.com",
  projectId: "rantz-f2723",
  storageBucket: "rantz-f2723.appspot.com",
  messagingSenderId: "706659373311",
  appId: "1:706659373311:web:0b6b34d0059c3036003cca",
  measurementId: "G-EBC9QTQBTT"
};

class Firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export default Firebase;
