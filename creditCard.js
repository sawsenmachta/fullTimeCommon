function valider()
//validation de la longueur du mot de passe

{

    //password.onchange = validatePassword;
    //confirm_password.onkeyup = validatePassword;

    //validation de la longueur du nom


    let textbox = document.getElementById("nom");
    if (textbox.value.length > 20 || textbox.value.length < 6) {


        alert("longeur invalide");
    }







    // validation si le pseudo nom contient combinaison of lettres et nombre ou non
    var pseudo = document.getElementById('nom')
    var letters = /^[0-9a-zA-Z]+$/;
    if (pseudo.value.match(letters)) {
        alert('Your registration number have accepted : you can try another');

        return true;
    } else {
        alert('Please input alphanumeric characters only');
        return false;
    }
}


// Prevent dropdown menu from closing when click inside the form
$(document).on("click", ".navbar-right .dropdown-menu", function (e) {
    e.stopPropagation();
});