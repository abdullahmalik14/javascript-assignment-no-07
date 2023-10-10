// //Question:01

// function message(){
//   alert("Hello")
// }


// //Question:02

// var elementToHide = document.getElementById('element-to-hide');
// var button = document.getElementById('button');

// button.addEventListener('click',function(){
//   elementToHide.style.display = 'none';
// })

// //Question:04
// function click() {
  
//   window.scrollTo({top:0,});
// }

//Question:05
var clicktoplayaudio = document.getElementById('click-to-play-audio');
var soundaudio = document.getElementById('sound-audio');

clicktoplayaudio.addEventListener('click', function(a){
  a.preventDefault();
  soundaudio.play();
})


//Question:07
var btnClick = document.getElementById('btn-click');
btnClick.addEventListener('click',function(){
  alert("Hello!");
})


//Question:09
var playsoundbutton = document.getElementById('play-sound-button');
var sound = document.getElementById('audio-sound');

playsoundbutton.addEventListener('click',function(){
  sound.play();
})


//Question:11
function hover(){
  alert('Hello i am a hover function');
}

//Question:12
function hover(){
 var hoverme = document.getElementById('hover-me');
 hoverme.style.display = 'none';
}

//Chapter 49, 50 (Reading and Setting field values) --
//Question:01

function set(){
  var userInput =document.getElementById('userinput').value;
  console.log(userInput)
}

//Question:02
function printCheckboxValue() {
  var checkbox = document.getElementById("checkbox");
 var isChecked = checkbox.checked;
  
  if (isChecked) {
      console.log("Checkbox is checked.");
  } else {
      console.log("Checkbox is not checked.");
  }
}

//Question:03
function printvalue(){
  var selectBox = document.getElementById("selectbox");
  var selected = selectBox;
  console.log(selected.value)
}

//Question:05
function updateStatus() {
  var maritalStatus = document.getElementById("maritalStatus");
 var statusField = document.getElementById("status");
 
var married = maritalStatus.value;

  if (married === "false") {
      statusField.value = "available";
  }  
  else if (married === "true") {
      statusField.value = "okay thnku";
  }
}

//Question:06
function fillInput(){
  var textInput = document.getElementById('textInput');
  var inputvalue = textInput.value.trim();

  if(inputvalue===""){
    textInput.value = "Default text"
  }
}

//Question:07
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMessages = document.getElementById("errorMessages");

  errorMessages.innerHTML = "";

  if (name.trim() === "") {
      errorMessages.innerHTML += "Name is required.<br>";
  }

  if (email.trim() === "") {
      errorMessages.innerHTML += "Email is required.<br>";
  } else if (!isValidEmail(email)) {
      errorMessages.innerHTML += "Invalid email address.<br>";
  }

  if (password.trim() === "") {
      errorMessages.innerHTML += "Password is required.<br>";
  }

  if (confirmPassword.trim() === "") {
      errorMessages.innerHTML += "Confirm Password is required.<br>";
  } else if (password !== confirmPassword) {
      errorMessages.innerHTML += "Passwords do not match.<br>";
  }

  if (errorMessages.innerHTML !== "") {
      return false; // Prevent form submission if there are errors
  }

  return true; // Allow form submission if no errors
}

function isValidEmail(email) {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
























