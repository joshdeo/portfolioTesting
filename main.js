// Animate on Scroll initialization
AOS.init({});

// PROGRESS BAR
window.onscroll = function() {
    myFunction();
};

function myFunction(){
    var winscroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winscroll / height) * 100;
    document.getElementById('progressbar').style.width = scrolled + "%";
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZfWxbXKzhUgy0bKU0xn1K-Hz9mEQw9vM",
    authDomain: "verification-form-contact.firebaseapp.com",
    databaseURL: "https://verification-form-contact.firebaseio.com",
    projectId: "verification-form-contact",
    storageBucket: "verification-form-contact.appspot.com",
    messagingSenderId: "318491163104",
    appId: "1:318491163104:web:48bc62efbec8abfa105385",
    measurementId: "G-S5GZ60SMEL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Reference messages collection 
var messagesRef = firebase.database().ref('messages');

// Event listener 

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var subject = getInputVal('subject');
    var email = getInputVal('email');
    var message = getInputVal('message');

    //Save message 
    saveMessage(name, subject, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after three seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.querySelector('form').reset();
}

//funtion to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase

function saveMessage(name, subject, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        email: email,
        message: message
    })
}