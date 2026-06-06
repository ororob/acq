
window.addEventListener('scroll', () => {

    const navbar = document.querySelector('.navbar');

    if(window.scrollY > 50){
        navbar.style.background = '#021019';
    }
    else{
        navbar.style.background = '#062033';
    }

});
// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// NAVBAR SHADOW ON SCROLL
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if(window.scrollY > 50){
        header.style.background = "#0f172a";
    }else{
        header.style.background = "rgba(15, 23, 42, 0.9)";
    }
});
function trackOrder() {

    const input = document.getElementById("trackInput").value.trim();
    const result = document.getElementById("trackingResult");

    const statusText = document.getElementById("statusText");

    // ONLY VALID TRACKING ID
    const validID = "AWF-2047";

    if(input !== validID){
        alert("Invalid Tracking ID. Please try AWF-2047");
        result.style.display = "none";
        return;
    }

    result.style.display = "block";

    const steps = [
        "Order Confirmed",
        "Fish Packed",
        "Shipped",
        "Out for Delivery",
        "Delivered"
    ];

    const stepElements = [
        document.getElementById("s1"),
        document.getElementById("s2"),
        document.getElementById("s3"),
        document.getElementById("s4"),
        document.getElementById("s5")
    ];

    let i = 0;

    function updateSteps() {

        if(i > 0){
            stepElements[i - 1].classList.add("active");
        }

        statusText.innerText = steps[i];

        if(i === steps.length){
            clearInterval(timer);
            return;
        }

        i++;
    }

    updateSteps();
    const timer = setInterval(updateSteps, 1500);
}
// TESTIMONIAL SLIDE ANIMATION
const cards = document.querySelectorAll(".testimonial-card");

cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";

    setTimeout(() => {
        card.style.transition = "0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, index * 300);
});
// CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const successMessage =
document.getElementById("successMessage");


// ======================
// REAL TIME VALIDATION
// ======================

// NAME
nameInput.addEventListener("input", () => {

    if(nameInput.value.trim() !== ""){
        removeError(nameInput);
    }

});

// EMAIL
emailInput.addEventListener("input", () => {

    if(validateEmail(emailInput.value)){
        removeError(emailInput);
    }

});

// SUBJECT
subjectInput.addEventListener("input", () => {

    if(subjectInput.value.trim() !== ""){
        removeError(subjectInput);
    }

});

// MESSAGE
messageInput.addEventListener("input", () => {

    if(messageInput.value.trim().length >= 10){
        removeError(messageInput);
    }

});


// ======================
// FORM SUBMIT
// ======================

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    // CLEAR ERRORS
    document.querySelectorAll(".error").forEach(error => {
        error.innerText = "";
    });

    // NAME
    if(nameInput.value.trim() === ""){
        showError(nameInput, "Please enter your name");
        valid = false;
    }

    // EMAIL
    if(emailInput.value.trim() === ""){
        showError(emailInput, "Please enter your email");
        valid = false;
    }
    else if(!validateEmail(emailInput.value)){
        showError(emailInput, "Invalid email address");
        valid = false;
    }

    // SUBJECT
    if(subjectInput.value.trim() === ""){
        showError(subjectInput, "Subject is required");
        valid = false;
    }

    // MESSAGE
    if(messageInput.value.trim() === ""){
        showError(messageInput, "Please type your message");
        valid = false;
    }
    else if(messageInput.value.trim().length < 10){
        showError(messageInput,
        "Message must be at least 10 characters");
        valid = false;
    }

    // SUCCESS
    if(valid){

        successMessage.innerHTML =
        "✅ Message received successfully!";

        successMessage.style.color = "#00ff95";

        form.reset();

        setTimeout(() => {
            successMessage.innerHTML = "";
        }, 4000);
    }

});


// ======================
// SHOW ERROR
// ======================

function showError(input, message){

    const inputBox = input.parentElement;
    const error = inputBox.querySelector(".error");

    error.innerText = message;

    input.style.borderColor = "red";
}


// ======================
// REMOVE ERROR
// ======================

function removeError(input){

    const inputBox = input.parentElement;
    const error = inputBox.querySelector(".error");

    error.innerText = "";

    input.style.borderColor = "#00d9ff";
}


// ======================
// EMAIL VALIDATION
// ======================

function validateEmail(email){

    const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);
}