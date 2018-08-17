function valider()
//validation de la longueur du mot de passe

{
    alert("dgfhj")
    let psw = document.getElementById("psw").value;

    if (psw.length < 6) {

        alert("invalid length");
    }
    //Confirmation du mot de passe
    var password = document.getElementById("psw");
    confirm_password = document.getElementById("psw-repeat");

    if (password.value != confirm_password.value) {
        alert("Passwords Don't Match");
    }


    //password.onchange = validatePassword;
    //confirm_password.onkeyup = validatePassword;

    //validation de la longueur du nom



    var textbox = document.getElementById("nom");
    if (textbox.value.length > 20 || textbox.value.length < 6) {


        alert("longeur invalide");
    }







    // validation si le pseudo nom contient combinaison of lettres et nombre ou non
    var pseudo = document.getElementById('pseudo')
    var letters = /^[0-9a-zA-Z]+$/;
    if (pseudo.value.match(letters)) {
        alert('Your registration number have accepted : you can try another');

        return true;
    } else {
        alert('Please input alphanumeric characters only');
        return false;
    }
}