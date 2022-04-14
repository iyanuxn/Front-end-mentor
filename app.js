document.getElementById("myInput").addEventListener("invalid", myFunction);
var email = document.querySelector(".mail")
var error = document.querySelector(".errortext")
var success = document.querySelector(".successtext")

function myFunction() {
    this.setCustomValidity(" ");
}

function ValidateEmail(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegex)) {
      email.classList.remove("wrong-mail")  
      email.classList.add("right-mail");
      success.style.display = "block";
      error.style.display = "none";
      return true;
    } 
    else {
        success.style.display = "none";
        email.classList.add("wrong-mail");
        email.classList.remove("right-mail");
        error.style.display = "block";
        return false
    }
  
  }