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
  var dataRef = database.ref('/nikahincom').push();
  dataRef.set({
    name: name,
    message: message
  });
  ClearFields();
  loaddata();
}


function loaddata(){
    var itemwish = '';
    database.ref('/nikahincom').once('value', function(snapshot){
    snapshot.forEach(function(data){
      itemwish += '<div class="testimony-slide active text-center">'+
                      '<figure>'+
                        '<img src="images/bride.jpg" alt="user">'+
                      '</figure>'+
                      `<span id="idnamewish">${data.val().name}, via <a href="#" class="twitter">Twitter</a></span>`+
                      `<small id="idmesswish" class="block">"${data.val().message}"</small>`+
                    '</div>';
      // document.getElementById('idnamewish').innerHTML = data.val().name
      // document.getElementById('idmesswish').innerHTML = data.val().message

     //document.getElementById('itemwish').innerHTML = '<div class="testimony-slide active text-center"><figure><img src="images/bride.jpg" alt="user"></figure><span id="idnamewish">John Doe, via <a href="#" class="twitter">Twitter</a></span><small id="idmesswish" class="block">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics"</small></blockquote></div>'

      console.log(data.val().name);
      console.log(data.val().message);
    });
    document.getElementById("itemwish").innerHTML = itemwish;
    console.log(Object.keys(snapshot.val()));
  });
}


function ClearFields() {
     document.getElementById("fname").value = "";
     document.getElementById("message").value = "";
}