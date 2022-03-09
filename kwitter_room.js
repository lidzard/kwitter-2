
// Your web app's Firebase configuration
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

user_name = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("Roomname", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  //End code
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}
function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("Username", room_name)

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("Roomname", name);
      window.location = "kwitter_page.html";
}

getData();
var user1 = localStorage.getItem("Username");
document.getElementById("welcome_user_name").innerHTML = "Welcome: " + user1;