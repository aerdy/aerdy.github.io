// Initialize Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyAEQIoXbPvHsYQrAlnGL_vrBKnf_KkISzA",
    authDomain: "necis-research.firebaseapp.com",
    databaseURL: "https://necis-research.firebaseio.com",
    projectId: "necis-research",
    storageBucket: "necis-research.appspot.com",
    messagingSenderId: "1017923930975",
    appId: "1:1017923930975:web:c0d21999211049ce0b04ea"
  };
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function pushData(){
  var name = document.getElementById("fname").value;
  var message = document.getElementById("message").value;
  var dataRef = database.ref('/nikahincom').push();
  dataRef.set({
    name: name,
    message: message
  });
  ClearFields();
}


database.ref('/nikahincom').once('value', function(snapshot){

  snapshot.forEach(function(data){
    document.getElementById('idnamewish').innerHTML = data.val().name
    document.getElementById('idmesswish').innerHTML = data.val().message
    console.log(data.val().name);
    console.log(data.val().message);
  });
  console.log(Object.keys(snapshot.val()));
});

function ClearFields() {
     document.getElementById("fname").value = "";
     document.getElementById("message").value = "";
}