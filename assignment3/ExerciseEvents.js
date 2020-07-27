/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
//Done

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
//Done


/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
function passCheck(){
  
  
  if(document.getElementById("password").value !== document.getElementById("confirmpassword").value){
    alert("Different passwords entered");
  }

}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
function manage(){
  
if(document.getElementById("username"))===0)
  {
    document.getElementsByClassName("btn btn-primary btn-block").disabled = true;
  }
  else
  document.getElementsByClassName("btn btn-primary btn-block").disabled = false;
}


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function succReg(){
  alert("Successful Registration")
}
