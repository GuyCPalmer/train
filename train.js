window.firebase = function () {
      
    var config = {
        apiKey: "AIzaSyCEc5N13B2maAatkr5PE5Rye_3yv_prHQU",
        authDomain: "train-choochoo.firebaseapp.com",
        databaseURL: "https://train-choochoo.firebaseio.com",
        projectId: "train-choochoo",
        storageBucket: "train-choochoo.appspot.com",
        messagingSenderId: "592089960011"
    };
  firebase.initializeApp(config);
  return firebase;
  }()