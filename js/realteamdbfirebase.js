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

loaddata()
function pushData(){
  var name = document.getElementById("fname").value;
  var message = document.getElementById("message").value;
  var confirm = document.getElementById("confirm").value;
  if(name != null && message != null && confirm !='not'){
    var dataRef = database.ref('/nikahincom').push();

    dataRef.set({
      name: name,
      message: message,
      confirm: confirm
    });
    ClearFields();
    loaddata();
  }
  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}


function loaddata(){
  var itemwish = [];
    database.ref('/nikahincom').orderByChild("date").on('value', function(snapshot){
    snapshot.forEach(function(data){
      itemwish.push(
                      '<div class="testimony-slide active text-center">'+
                      `<span id="idnamewish">${data.val().name}, <small><a class="twitter">${data.val().confirm}</a></small></span>`+
                      `<small  class="block">"${data.val().message}"</small>`+
                    '</div>');
      
    });
    document.getElementById("itemwish").innerHTML = itemwish.reverse();
  });
}

function uploadImage(namefile) {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#photowisher").files[0];
    const name = namefile+ "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);task
    .then(snapshot => snapshot.ref.getDownloadURL())
    .then(url => {
    console.log(url);
    alert('image uploaded successfully');
    document.querySelector("#image").src = url;
    })
    .catch(console.error);
}

function ClearFields() {
     document.getElementById("fname").value = "";
     document.getElementById("message").value = "";
}

