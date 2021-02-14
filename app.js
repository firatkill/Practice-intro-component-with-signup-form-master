const claimbutton = document.getElementById("claim");
const buttoncontainer = document.getElementById("buttoncontainer");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

claimbutton.addEventListener("click", () => {
  firstnamecontrol();
  lastnamecontrol();
  emailcontrol();
  passwordcontrol();
});

function firstnamecontrol() {
  if (input1.value === "") {
    buttoncontainer.appendChild(small1);
    buttoncontainer.appendChild(img1);
  }
}

function lastnamecontrol() {
  if (input2.value === "") {
    buttoncontainer.appendChild(small2);
    buttoncontainer.appendChild(img2);
  }
}

function emailcontrol() {
  const email = input3.value;
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    buttoncontainer.appendChild(small3);
    buttoncontainer.appendChild(img3);
  }
}

function passwordcontrol() {
  if (input4.value === "") {
    buttoncontainer.appendChild(small4);
    buttoncontainer.appendChild(img4);
  }
}
// CREATEELEMENT
const small1 = document.createElement("small");
const small2 = document.createElement("small");
const small3 = document.createElement("small");
const small4 = document.createElement("small");

const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");
const img4 = document.createElement("img");

// element specialities

small1.id = "small1";
small1.textContent = "First Name cannot be empty";

small2.id = "small2";
small2.textContent = "Last Name cannot be empty";

small3.id = "small3";
small3.textContent = "Looks like this is not an Email";

small4.id = "small4";
small4.textContent = "Password cannot be empty";

img1.id = "img1";
img1.src = "./images/icon-error.svg";

img2.id = "img2";
img2.src = "./images/icon-error.svg";

img3.id = "img3";
img3.src = "./images/icon-error.svg";

img4.id = "img4";
img4.src = "./images/icon-error.svg";
