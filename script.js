
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {
    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML="✖";
    }else{
        menu.innerHTML="☰";
    }
}
const heroImage = document.querySelector(".hero-image");

document.addEventListener("mousemove", e => {

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".hero-content, .hero-image")
.forEach(el => observer.observe(el));
document.querySelectorAll(".stat-card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const x = e.offsetX / card.offsetWidth - 0.5;
        const y = e.offsetY / card.offsetHeight - 0.5;

        card.style.transform =
            `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "rotateX(0) rotateY(0)";

    });

});
/*=====================================
      SHIPPING SECTION ANIMATIONS
======================================*/

// Select Elements
const shipBoxes = document.querySelectorAll(".ship-box");
const shipIcons = document.querySelectorAll(".ship-icon");
const highlightItems = document.querySelectorAll(".highlight-item");
const shippingSection = document.querySelector(".shipping");

/*=====================================
      SCROLL REVEAL
======================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

shipBoxes.forEach(box=>{

    observer.observe(box);

});

/*=====================================
      STAGGERED ANIMATION
======================================*/

shipBoxes.forEach((card,index)=>{

    card.style.transitionDelay = `${index*0.12}s`;

});

/*=====================================
      FLOATING UNDERWATER EFFECT
======================================*/

window.addEventListener("scroll",()=>{

    const scroll = window.pageYOffset;

    shipBoxes.forEach((card,index)=>{

        const speed = (index+1)*0.12;

        const y = Math.sin(scroll*0.01+index)*8;

        card.style.transform =
        `translateY(${y}px)`;

    });

});

/*=====================================
      3D TILT EFFECT
======================================*/

shipBoxes.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = ((x/rect.width)-0.5)*16;

        const rotateX = ((y/rect.height)-0.5)*-16;

        card.style.transform =

        `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-10px)
        scale(1.02)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

/*=====================================
      FLOATING ICONS
======================================*/

shipIcons.forEach((icon,index)=>{

    setInterval(()=>{

        icon.animate([

            {
                transform:"translateY(0px)"
            },

            {
                transform:"translateY(-10px)"
            },

            {
                transform:"translateY(0px)"
            }

        ],{

            duration:2500+(index*200),

            iterations:1,

            easing:"ease-in-out"

        });

    },2500+(index*300));

});

/*=====================================
      AUTO BUBBLES
======================================*/

function createBubble(){

    const bubble=document.createElement("span");

    bubble.className="bubble";

    bubble.style.left=Math.random()*100+"%";

    const size=Math.random()*20+10;

    bubble.style.width=size+"px";

    bubble.style.height=size+"px";

    bubble.style.animationDuration=
    Math.random()*6+5+"s";

    shippingSection.appendChild(bubble);

    setTimeout(()=>{

        bubble.remove();

    },12000);

}

setInterval(createBubble,450);

/*=====================================
      PARALLAX BACKGROUND
======================================*/

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/50;

    const y=(window.innerHeight/2-e.clientY)/50;

    shippingSection.style.backgroundPosition=

    `${x}px ${y}px`;

});

/*=====================================
      HIGHLIGHT CARD HOVER
======================================*/

highlightItems.forEach(item=>{

    item.addEventListener("mousemove",(e)=>{

        const rect=item.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        item.style.background=

        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.35),
        #00bfff)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.background=
        "linear-gradient(135deg,#00bfff,#0077ff)";

    });

});

/*=====================================
      CARD GLOW EFFECT
======================================*/

shipBoxes.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.boxShadow=
        "0 30px 60px rgba(0,191,255,.35)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.boxShadow="";

    });

});

/*=====================================
      SMOOTH FADE FOR HEADER
======================================*/

const header=document.querySelector(".shipping-header");

window.addEventListener("scroll",()=>{

    const position=header.getBoundingClientRect().top;

    const screen=window.innerHeight;

    if(position<screen-120){

        header.style.opacity="1";

        header.style.transform="translateY(0)";

    }

});

header.style.opacity="0";
header.style.transform="translateY(50px)";
header.style.transition="1s";
document.querySelectorAll(".fish-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const x=e.offsetX/card.offsetWidth-.5;

const y=e.offsetY/card.offsetHeight-.5;

card.style.transform=
`perspective(1000px)
rotateY(${x*12}deg)
rotateX(${-y*12}deg)
translateY(-12px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(1000px) rotateY(0) rotateX(0)";

});

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
    const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

let target=+counter.dataset.target;

let count=0;

function update(){

count+=target/100;

if(count<target){

counter.innerHTML=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerHTML=target+"+";

}

}

update();

});

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
