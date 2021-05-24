//YOUR FIREBASE LINKS
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDDJLH0xZ4L36My4mGouiwLpRInldQkcbM",
      authDomain: "kwitter-544ec.firebaseapp.com",
      databaseURL: "https://kwitter-544ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-544ec",
      storageBucket: "kwitter-544ec.appspot.com",
      messagingSenderId: "81078051268",
      appId: "1:81078051268:web:d4bc6ad44c6fbb64d20491"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("AddRoomName");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>" + name + "<img  class='user_tick'src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>" +message+"</h4>";
like_button="<button class='btn-btn-warning' id="+firebase_message_id+" value="+like+ "onclick='updatelike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output2").innerHTML+=row;
//End code
      } });  }); }
getData();
function logout()
{
      window.location="index.html";
}

function send()
{
      message=document.getElementById("input").value;
      firebase.database().ref(roomname).push(
            {
                  name:username,
                  message:message,
                  like:0
            }
      );document.getElementById("input").value=" ";
}
