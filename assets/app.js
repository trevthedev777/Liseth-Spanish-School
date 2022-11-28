function validateForm() {
  let fName= document.forms["myForm"]["fname"].value;
  let email= document.forms["myForm"]["email"].value;
  if (fName == "" || email == "") {
    alert("Name and email cannot be empty");
    return false;
  }
};

