var firebaseConfig = {
      apiKey: "AIzaSyB6pgpXI6NCSCSCs8kRnNMQMqwDFv2YOqM",
      authDomain: "kwitter-1-e7373.firebaseapp.com",
      databaseURL: "https://kwitter-1-e7373-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-e7373",
      storageBucket: "kwitter-1-e7373.appspot.com",
      messagingSenderId: "1056692403669",
      appId: "1:1056692403669:web:1d50724bfd3502f2b4915c"
    };
    
    // Initialize Firebase
       firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
