
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBt8ABZmXpJJzmKUbvTs-0I-vNdMlzndIk",
      authDomain: "kwitter-bfbb2.firebaseapp.com",
      databaseURL: "https://kwitter-bfbb2-default-rtdb.firebaseio.com",
      projectId: "kwitter-bfbb2",
      storageBucket: "kwitter-bfbb2.appspot.com",
      messagingSenderId: "198722514197",
      appId: "1:198722514197:web:b89d65416114b35b890d1c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome  "+user_name+"!!!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose:"addingroomname"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html"
}
function getData() {
 firebase.database().ref("/").on('value', function(snapshot) {
 document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
 childKey  = childSnapshot.key;
 Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });
});
}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}