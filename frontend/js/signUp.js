const visibility = document.querySelector(".visibility");
const cPassword = document.querySelector(".confirmPasswordVisible");
const signUp_btn = document.querySelector(".register-button");

document.addEventListener("DOMContentLoaded", () => {
  displaySignIn();
});

function displaySignIn() {
  visibility.addEventListener("click", function () {
    const check = visibility.src.includes("visible.png");
    const password = document.querySelector("#password");

    if (check) {
      visibility.src = "../assets/icons/visible-off.png";
      password.type = "text";
    } else {
      visibility.src = "../assets/icons/visible.png";
      password.type = "password";
    }
  });

  cPassword.addEventListener("click", function () {
    const check = cPassword.src.includes("visible.png");
    const confirmPassword = document.querySelector("#confirmPassword");

    if (check) {
      cPassword.src = "../assets/icons/visible-off.png";
      confirmPassword.type = "text";
    } else {
      cPassword.src = "../assets/icons/visible.png";
      confirmPassword.type = "password";
    }
  });

  signUp_btn.addEventListener("click", function () {
    const name = document.querySelector("#fullName");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirmPassword");

    const userNameInput = name.value.trim();
    const userEmailInput = email.value.trim();
    const userPasswordInput = password.value.trim();
    const userConfirmInput = confirmPassword.value.trim();

    document.querySelector("#originalPassword").style.borderColor = "black";
    document.querySelector("#retypedPassword").style.borderColor = "black";

    const checkUserName = userNameInput === "" ? false : true;

    const checkUserEmail = userEmailInput === "" ? false : true;

    const checkUserPassword = userPasswordInput === "" ? false : true;

    const checkUserConfirmPassword = userConfirmInput === "" ? false : true;

    const checkTwoPasswordsEqual =
      userPasswordInput === userConfirmInput ? true : false;

    const checkAllUserInput =
      checkUserName &&
      checkUserEmail &&
      checkUserPassword &&
      checkUserConfirmPassword &&
      checkTwoPasswordsEqual;

    if (checkAllUserInput) {
      const data = {
        userName: name,
        userEmail: email,
        userPassword: password,
      };
      console.log("signUpSccessfull");

      signUpDataSend(data);
    } else {
      if (!userNameInput) name.style.borderColor = "red";
      if (!userEmailInput) email.style.borderColor = "red";
      if (!userPasswordInput) {
        document.querySelector("#originalPassword").style.borderColor = "red";
      }
      if (!userConfirmInput) {
        document.querySelector("#retypedPassword").style.borderColor = "red";
      }
      alert("Check the Input");
    }
  });
}

async function signUpDataSend(data) {
  const url = "http://192.168.1.40:8080/api/signUp";

  try {
    const response = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log("Success:", responseData);
    return responseData;
  } catch {
    console.error("Error:", error);
    throw error;
  }
}
