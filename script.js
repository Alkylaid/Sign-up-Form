const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");
const content = document.getElementById('content');
const error_message = document.createElement("p");
const create_account = document.getElementById('create_account');

password.oninput = verify_password;
confirm_password.oninput = verify_password;


function verify_password() {

if (password.value != confirm_password.value) {
    
    password.classList.add("invalid");
    confirm_password.classList.add("invalid");
    if (!/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value) || !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(confirm_password.value)){
        error_message.innerHTML = "* Password does not meet requirement";
    } else {
    error_message.innerHTML = "* Passwords do not match";
    }
    error_message.style.color = 'red';
    content.appendChild(error_message);
    create_account.disabled = true;
} else if (/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value)) {
    password.classList.remove("invalid");
    confirm_password.classList.remove("invalid");
    password.classList.add("valid");
    confirm_password.classList.add("valid");
    error_message.innerHTML = "";
    create_account.disabled = false;
}
}
