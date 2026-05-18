let email = document.getElementById("email");

let password = document.getElementById("password");

let loginBtn = document.getElementById("loginBtn");

let eyeIcon = document.querySelector(".fa-solid");

let dummyUsers = [
    {
        fullName: "Hassan Rizwan",
        email: "hassan@gmail.com",
        password: "5678"
    },
    {
        fullName: "Mohammad Bilal",
        email: "bilal@gmail.com",
        password: "abcd"
    },
    {
        fullName: "Arham Maqsood",
        email: "arham@gmail.com",
        password: "1234"
    },
];

const sweetAlert = (error, title, message) => {
    Swal.fire({
        icon: error,
        title: title,
        text: message,
    });
};

const loginHandler = () => {

    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        return sweetAlert(
            "error",
            "Something Went Wrong",
            "Please fill out all fields"
        );
    }

    let isAccountExist = false;
    let currentUser = null;

    for (let i = 0; i < dummyUsers.length; i++) {

        let user = dummyUsers[i];

        if (user.email === emailValue) {

            isAccountExist = true;

            if (user.password === passwordValue) {

                currentUser = user;
                break;

            } else {

                return sweetAlert(
                    "error",
                    "Login Error",
                    "Please enter correct password!"
                );
            }
        }
    }

    if (isAccountExist === false) {

        return sweetAlert(
            "error",
            "Account Not Exist",
            "You don't have an account, Please create your account!"
        );
    }

    if (currentUser) {

        sweetAlert(
            "success",
            "Success",
            "Login Successfully"
        );

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1500);
    }
};

loginBtn.addEventListener("click", loginHandler);


// Toggle Eye
function toggleEye() {

    if (password.type == "password") {

        password.type = "text";
        eyeIcon.className = "fa-solid fa-eye-slash";
        console.log("may chala");
        
        return;
    }

    if (password.type == "text") {

        password.type = "password";
        eyeIcon.className = "fa-solid fa-eye";
        return;
    }
}