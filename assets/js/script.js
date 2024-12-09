var loginTry = parseInt(localStorage.getItem("LoginTry")) || 0;

function validateForm() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let maxAttempts = 3; 
    let attemptCount = parseInt(localStorage.getItem("attemptCount")) || 0;

    while (attemptCount < maxAttempts) {
        if (!username || !password) {
            alert("Username dan password belum terisi");
            incrementLoginTry();
            return false;
        }

        if (password === "1234") {
            alert("BERHASIL LOGIN");
            localStorage.setItem("loginusername", username);
            location.reload();
            return false;
        }

        alert("Username atau password salah");
        incrementLoginTry();
        return false;
    }
}

function incrementLoginTry() {
    loginTry++;
    localStorage.setItem("LoginTry", loginTry);
    location.reload();
}

function resetTry() {
    localStorage.removeItem("LoginTry");
    location.reload();
}

function logout() {
    localStorage.removeItem("loginusername");
    resetTry();
}


window.addEventListener('load', function () {
    var getUsername = localStorage.getItem('loginusername');
    var loginUsernameElement = document.getElementById("loginusername");
    var loginUsernameFormElement = document.getElementById("loginusernameform");
    var loginFormsElement = document.getElementById("loginforms");
    var loginForms2Element = document.getElementById("loginforms2");
    var limitElement = document.getElementById("limit");
    var alreadyElement = document.getElementById("already");

    loginUsernameElement.textContent = getUsername || "Login";
    loginUsernameFormElement.textContent = getUsername || "Login";
    console.log(localStorage.getItem("loginusername"));


    if (limitElement && loginFormsElement) {
        if (loginTry >= 3) {
            limitElement.removeAttribute("hidden");
            loginForms2Element.setAttribute("hidden", "true");
        } else {
            limitElement.setAttribute("hidden", "true");
            loginFormsElement.removeAttribute("hidden");
        }
    }

    if (alreadyElement && loginFormsElement) {
        if (getUsername) {
            loginFormsElement.setAttribute("hidden", "true");
            alreadyElement.removeAttribute("hidden");
        } else {
            loginForms2Element.removeAttribute("hidden");
            alreadyElement.setAttribute("hidden", "true");
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const cardFooters = document.querySelectorAll('.card-gears-footer');

    cardFooters.forEach(footer => {
        const decrementBtn = footer.querySelector('.btnaddcart:nth-child(1)');
        const incrementBtn = footer.querySelector('.btnaddcart:nth-child(3)');
        const inputField = footer.querySelector('.addtocart');

        inputField.value = 0;

        decrementBtn.addEventListener('click', () => {
            let currentValue = parseInt(inputField.value, 10);
            if (currentValue > 0) {
                inputField.value = currentValue - 1;
            }
        });

        incrementBtn.addEventListener('click', () => {
            let currentValue = parseInt(inputField.value, 10);
            inputField.value = currentValue + 1;
        });
    });
});

const searchIcons = document.querySelectorAll('.search-icon');
searchIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = 'search.html';
    });
});
