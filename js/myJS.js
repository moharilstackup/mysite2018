var username = "selamat";
var email = "selamat@sg.ibm.com";

function getConfirmation() {
    var retVal = confirm("Do you want to continue?");

    if (retVal == true) {
        document.getElementById("name").value = username;
        document.getElementById("email").value = email;
        // document.write("User will proceed...");
        // return true;
    } else {
        // document.write("User has cancelled the operation...");
        // return false;
    }
}