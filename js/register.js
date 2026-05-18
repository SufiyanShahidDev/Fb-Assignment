
let firstName = document.getElementById("firstname");

let lastName = document.getElementById("lastname");

let day = document.getElementById("day");

let month = document.getElementById("month");

let year = document.getElementById("year");

let gender = document.getElementsByName("gender");

let email = document.getElementById("email");

let password = document.getElementById("password");

let signUpBtn = document.getElementById("signupBtn");

let userDataArr = [];

const signupHandler = () => {
    const sweetAlert = (error, title, message) => {
        Swal.fire({
            icon: error,
            title: title,
            text: message,
        });
    };

    if (firstName.value.trim() == "" || lastName.value.trim() == "") {
        sweetAlert("error", "Something Went Wrong", "Please enter a name")
        return;
    };

    if (day.value == "") {
        sweetAlert("error", "Something Went Wrong", "Please Enter a day")
        return;
    };

    if (month.value == "") {
        sweetAlert("error", "Something Went Wrong", "Please Enter a month")
        return;
    };

    if (year.value == "") {
        sweetAlert("error", "Something Went Wrong", "Please Enter a year")
        return;
    };

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value.trim())) {
        sweetAlert("error", "Something Went Wrong", "Please Enter a valid email")
        return;
    };

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password.value)) {
        sweetAlert("error", "Weak Password", "Password must contain uppercase, number & special character");
        return;
    };

    let userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        day: day.value,
        month: month.value,
        year: year.value,
        email: email.value,
        password: password.value
    };

    let isGenderValid = false;

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userData.gender = gender[i].value;
            isGenderValid = true;
            break;
        }
    }

    if (!isGenderValid) {
        sweetAlert("error", "Something Went Wrong", "Please select your gender");
        return;
    };

    userDataArr.push(userData);

    sweetAlert("success", "Signup Successfully", "Congratulations")

    firstName.value = "";

    lastName.value = "";

    day.value = "";

    month.value = "";

    year.value = "";

    email.value = "";

    password.value = "";

    for (let i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    };

};

// Toggle Eye
function toggleEye() {

    if (password.type == "password") {

        password.type = "text";
        eyeIcon.className = "fa-solid fa-eye-slash";

        return;
    }

    if (password.type == "text") {

        password.type = "password";
        eyeIcon.className = "fa-solid fa-eye";
        return;
    }
}

signUpBtn.addEventListener("click", signupHandler);