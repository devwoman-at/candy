/// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const form = document.getElementById('contact');
 
  var firebaseConfig = {
    apiKey: "AIzaSyAiKH42G5tGLTQwVljm_WO1Nj0IdiOwVF8",
    authDomain: "contform-1e6ed.firebaseapp.com",
    databaseURL: "https://contform-1e6ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "contform-1e6ed",
    storageBucket: "contform-1e6ed.appspot.com",
    messagingSenderId: "949039442012",
    appId: "1:949039442012:web:5183da5f194e2a75d11e99",
    measurementId: "G-YS8CPVGV0V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference message collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form 
function submitForm(e) {
    e.preventDefault();

    // Get values
    var firstname = getInputValue('firstName');
    var lastname = getInputValue('lastName');
    var phone = getInputValue('phone');
    var email = getInputValue('email');
    var message = getInputValue('message');
    //Save Message
saveMessage(firstname, lastname, phone, email, message);
//Show alert 
document.querySelector('.alert').style.display = 'block';

//Hide alert after 3 second 

setTimeout(function() {
  document.querySelector('.alert').style.display = 'none';
}, 3000);

//Clear form

form.reset();

}
// Function to get form value
function getInputValue(id){
return document.getElementById(id).value;
}
// Save message to firebase

function saveMessage (firstName, lastName, phone, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        message: message
    });
}












// $(function () {
//     $(document).scroll(function () {
//         var $nav = $("#mainNavbar");
//         $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
//     });
// });