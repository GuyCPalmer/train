{/*<script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>*/}

window.firebase = function () {
      
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA8Y55aG3LSjT0SqWWI8AVBWiociNJlp_M",
        authDomain: "train-4526b.firebaseapp.com",
        databaseURL: "https://train-4526b.firebaseio.com",
        projectId: "train-4526b",
        storageBucket: "train-4526b.appspot.com",
        messagingSenderId: "284438291495"
      };
      firebase.initializeApp(config);
  return firebase;
  }()