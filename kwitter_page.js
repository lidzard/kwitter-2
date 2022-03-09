//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDnLx34jBAbN2fwldBqFH_ycuGkOoOhRNI",
      authDomain: "quinten-fbf3d.firebaseapp.com",
      databaseURL: "https://quinten-fbf3d-default-rtdb.firebaseio.com",
      projectId: "quinten-fbf3d",
      storageBucket: "quinten-fbf3d.appspot.com",
      messagingSenderId: "177292981598",
      appId: "1:177292981598:web:b96a258132b80666554bcf",
      measurementId: "G-DC0Q19046X"
};

firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data('name');
                        like = message_data('message');
                        name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'></h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";

                        row = name_with_tag + message_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();
var room_name = localStorage.getItem("Roomname");
var user_name = localStorage.getItem("Username");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
      console.log()
}
function updateLike(message_id) {
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}