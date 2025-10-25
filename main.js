let menu= document.querySelector("#menu-icon");
let navbar= document.querySelector(".navbar");

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// Modal Elements
const signInBtn = document.querySelector(".sign-in");
const signUpBtn = document.querySelector(".sign-up");
const signInModal = document.getElementById("signin-modal");
const signUpModal = document.getElementById("signup-modal");
const closeBtns = document.querySelectorAll(".close");

// Open modals
signInBtn.onclick = () => signInModal.style.display = "block";
signUpBtn.onclick = () => signUpModal.style.display = "block";

// Close modals
closeBtns.forEach(btn => btn.onclick = () => {
  signInModal.style.display = "none";
  signUpModal.style.display = "none";
});

// Switch between forms
document.getElementById("switch-to-signup").onclick = (e) => {
  e.preventDefault();
  signInModal.style.display = "none";
  signUpModal.style.display = "block";
};

document.getElementById("switch-to-signin").onclick = (e) => {
  e.preventDefault();
  signUpModal.style.display = "none";
  signInModal.style.display = "block";
};

// Close when clicking outside
window.onclick = (e) => {
  if (e.target === signInModal) signInModal.style.display = "none";
  if (e.target === signUpModal) signUpModal.style.display = "none";
};
