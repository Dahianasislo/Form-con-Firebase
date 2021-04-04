  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCwiCkuhCzjC8Wkts931XEeaOD91RSkThc",
    authDomain: "form-test-e86e8.firebaseapp.com",
    projectId: "form-test-e86e8",
    storageBucket: "form-test-e86e8.appspot.com",
    messagingSenderId: "882780638101",
    appId: "1:882780638101:web:968dc6879b5f98b30d449c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}