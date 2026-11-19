// String method
// var y =  x.length;
// var y =  x.indexOf('l',3 );
// var y =  x.lastIndexOf('l ',5 );
// var y =  x.search('1');
// var y =  x.includes('l');
// var y =  x.charAt('5');
// var z = x.slice(6);
// var z = x.substring(6,0);
// var z = x.substr(6,5);
// var z = x.replace(/world/ig,'adel');
// var z = x.trim();
// var z = x.toUpperCase();
// var z = x.toLowerCase();
// var x = 'hallo World!';
// alert(z);

// =========================================================
// =========================================================
// =========================================================

function validateData() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var result = document.getElementById("result");

  result.setAttribute("class", "alert theme-danger p-4 my-5");

  if (user == "" && email == "" && password == "" && confirm == "") {
    result.innerHTML = "Enter Data";
    return false;
  } else if (user.length < 5 || user.length > 15) {
    result.innerHTML = "Enter 5-15 Charact name";
    return false;
  } else if (
    email.indexOf("@", 5) == -1 ||
    email.indexOf(".com", 6) == -1 ||
    email.length < 15
  ) {
    result.innerHTML = "Enter vaild email";
    return false;
  } else if (password == "") {
    result.innerHTML = "Enter Password";
    return false;
  } else if (password.length < 8) {
    result.innerHTML = "Week Password";
    return false;
  } else if (confirm != password) {
    result.innerHTML = "Matched Password";
    return false;
  } else {
    return ture;
  }
}
