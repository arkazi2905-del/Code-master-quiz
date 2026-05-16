// AUTH SYSTEM

let isLogin = true;

const loginTab =
document.getElementById("loginTab");

const signupTab =
document.getElementById("signupTab");

const authTitle =
document.getElementById("authTitle");

const authBtn =
document.getElementById("authBtn");

const email =
document.getElementById("email");

const confirmPassword =
document.getElementById("confirmPassword");

const authMessage =
document.getElementById("authMessage");

// LOGIN TAB
loginTab.addEventListener("click",()=>{

isLogin = true;

loginTab.classList.add("active-tab");
signupTab.classList.remove("active-tab");

authTitle.innerText = "Login";

email.style.display = "none";

confirmPassword.style.display = "none";

authBtn.innerText = "Login";

});

// SIGNUP TAB
signupTab.addEventListener("click",()=>{

isLogin = false;

signupTab.classList.add("active-tab");
loginTab.classList.remove("active-tab");

authTitle.innerText = "Signup";

email.style.display = "block";

confirmPassword.style.display = "block";

authBtn.innerText = "Signup";

});

// AUTH BUTTON
authBtn.addEventListener("click",()=>{

const username =
document.getElementById("username").value;

const password =
document.getElementById("password").value;

// EMPTY CHECK
if(username==="" || password===""){

alert("Fill all fields");
return;

}

// SIGNUP
if(!isLogin){

const userEmail =
document.getElementById("email").value;

const confirm =
document.getElementById("confirmPassword").value;

if(userEmail===""){

alert("Enter Email");
return;

}

if(password !== confirm){

alert("Passwords do not match");
return;

}

// SAVE USER
const userData = {

username: username,
email: userEmail,
password: password

};

localStorage.setItem(
"user",
JSON.stringify(userData)
);

authMessage.innerText =
"Signup Successful ✅";

}

// LOGIN
else{

const savedUser =
JSON.parse(localStorage.getItem("user"));

if(savedUser===null){

alert("No account found. Please signup first.");
return;

}

if(
username !== savedUser.username ||
password !== savedUser.password
){

alert("Invalid Username or Password");
return;

}

authMessage.innerText =
"Login Successful ✅";

}

// ENTER WEBSITE
setTimeout(()=>{

document.getElementById("authContainer")
.style.display="none";

document.getElementById("mainWebsite")
.style.display="block";

document.getElementById("userDisplay")
.innerText=username;

},1000);

});

// MOBILE MENU
const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// DARK MODE
document.getElementById("darkBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("light");

});

// TYPING EFFECT
const words = [
"HTML",
"CSS",
"JavaScript",
"React"
];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.getElementById("typing");

function typeEffect(){

if(charIndex < words[wordIndex].length){

typing.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,150);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex]
.substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,100);

}else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex = 0;
}

setTimeout(typeEffect,200);

}

}

typeEffect();

// QUIZ VARIABLES
let selectedDifficulty = "";
let selectedCategory = "";
let currentQuestion = 0;
let score = 0;
let timer;
let timerValue = 15;

// START BUTTON
document.getElementById("beginBtn")
.addEventListener("click",()=>{

document.getElementById("startScreen")
.style.display="none";

document.getElementById("difficultyScreen")
.style.display="block";

});

// SELECT DIFFICULTY
function selectDifficulty(level){

selectedDifficulty = level;

if(level==="easy"){
timerValue = 15;
}

if(level==="medium"){
timerValue = 10;
}

if(level==="hard"){
timerValue = 5;
}

document.getElementById("difficultyScreen")
.style.display="none";

document.getElementById("categoryScreen")
.style.display="block";

}

// QUESTIONS
const questions = {

html:{
easy:[
{
question:"HTML stands for?",
options:[
"Hyper Text Markup Language",
"Markup Tool",
"Machine Language",
"Programming Language"
],
answer:"Hyper Text Markup Language"
},
{
question:"Which tag creates paragraph?",
options:["<p>","<img>","<h1>","<div>"],
answer:"<p>"
},
{
question:"Which tag inserts image?",
options:["<img>","<image>","<src>","<pic>"],
answer:"<img>"
},
{
question:"HTML is used for?",
options:[
"Structure",
"Styling",
"Logic",
"Database"
],
answer:"Structure"
},
{
question:"Which tag creates links?",
options:["<a>","<link>","<url>","<href>"],
answer:"<a>"
}
],

medium:[
{
question:"Which attribute opens link in new tab?",
options:[
"target='_blank'",
"blank",
"newtab",
"open"
],
answer:"target='_blank'"
},
{
question:"Semantic tags improve?",
options:[
"SEO",
"Storage",
"Gaming",
"Animation"
],
answer:"SEO"
},
{
question:"Which tag defines navigation?",
options:["<nav>","<menu>","<section>","<div>"],
answer:"<nav>"
},
{
question:"Which input type hides password?",
options:[
"password",
"text",
"hidden",
"secure"
],
answer:"password"
},
{
question:"Which tag creates table row?",
options:["<tr>","<td>","<th>","<table>"],
answer:"<tr>"
}
],

hard:[
{
question:"HTML5 introduced?",
options:[
"Semantic Tags",
"Python",
"Database",
"Server"
],
answer:"Semantic Tags"
},
{
question:"Canvas graphics use?",
options:[
"<canvas>",
"<draw>",
"<svg>",
"<graphic>"
],
answer:"<canvas>"
},
{
question:"Local storage stores data in?",
options:[
"Browser",
"Server",
"RAM",
"Cloud"
],
answer:"Browser"
},
{
question:"Accessibility attribute?",
options:[
"alt",
"href",
"src",
"title"
],
answer:"alt"
},
{
question:"Drag and Drop is?",
options:[
"API",
"Tag",
"Framework",
"Database"
],
answer:"API"
}
]
},

css:{
easy:[
{
question:"CSS stands for?",
options:[
"Cascading Style Sheets",
"Creative Style System",
"Computer Styling",
"Color Sheet"
],
answer:"Cascading Style Sheets"
},
{
question:"Which property changes text color?",
options:[
"color",
"font-color",
"text-color",
"background"
],
answer:"color"
},
{
question:"Which property changes background?",
options:[
"background",
"bgcolor",
"color",
"image"
],
answer:"background"
},
{
question:"CSS is used for?",
options:[
"Styling",
"Database",
"Logic",
"Server"
],
answer:"Styling"
},
{
question:"Which property changes font size?",
options:[
"font-size",
"text-size",
"size",
"font"
],
answer:"font-size"
}
],

medium:[
{
question:"Flexbox is used for?",
options:[
"Layout",
"Animation",
"Database",
"Security"
],
answer:"Layout"
},
{
question:"Which property adds space inside?",
options:[
"padding",
"margin",
"spacing",
"border"
],
answer:"padding"
},
{
question:"Which property adds shadow?",
options:[
"box-shadow",
"shadow",
"text-shadow",
"drop-shadow"
],
answer:"box-shadow"
},
{
question:"Which display creates flex layout?",
options:[
"flex",
"block",
"inline",
"grid"
],
answer:"flex"
},
{
question:"Media queries are used for?",
options:[
"Responsive Design",
"Animation",
"Database",
"Storage"
],
answer:"Responsive Design"
}
],

hard:[
{
question:"CSS Grid is used for?",
options:[
"2D Layout",
"Animation",
"Database",
"Security"
],
answer:"2D Layout"
},
{
question:"Backdrop filter creates?",
options:[
"Glassmorphism",
"Flexbox",
"Animation",
"Grid"
],
answer:"Glassmorphism"
},
{
question:"Which unit is responsive?",
options:[
"%",
"px",
"cm",
"mm"
],
answer:"%"
},
{
question:"z-index controls?",
options:[
"Layer Order",
"Animation",
"Width",
"Height"
],
answer:"Layer Order"
},
{
question:"Transform scale does?",
options:[
"Resize Element",
"Rotate",
"Translate",
"Hide"
],
answer:"Resize Element"
}
]
},

javascript:{
easy:[
{
question:"JavaScript is used for?",
options:[
"Interactivity",
"Database",
"Storage",
"Hosting"
],
answer:"Interactivity"
},
{
question:"Which keyword declares variable?",
options:[
"let",
"img",
"style",
"link"
],
answer:"let"
},
{
question:"Which symbol is used for comments?",
options:[
"//",
"**",
"##",
"<!--"
],
answer:"//"
},
{
question:"Which company created JavaScript?",
options:[
"Netscape",
"Google",
"Microsoft",
"IBM"
],
answer:"Netscape"
},
{
question:"alert() shows?",
options:[
"Popup",
"Image",
"Table",
"Video"
],
answer:"Popup"
}
],

medium:[
{
question:"Which method selects element?",
options:[
"querySelector",
"selectElement",
"getItem",
"fetch"
],
answer:"querySelector"
},
{
question:"DOM stands for?",
options:[
"Document Object Model",
"Data Object",
"Display Object",
"Document Order"
],
answer:"Document Object Model"
},
{
question:"setInterval() is used for?",
options:[
"Repeating Task",
"Database",
"Storage",
"Animation"
],
answer:"Repeating Task"
},
{
question:"LocalStorage stores?",
options:[
"Browser Data",
"Images",
"Videos",
"Database"
],
answer:"Browser Data"
},
{
question:"Which keyword creates function?",
options:[
"function",
"create",
"define",
"method"
],
answer:"function"
}
],

hard:[
{
question:"JSON stands for?",
options:[
"JavaScript Object Notation",
"Java Syntax",
"Java Source",
"JSON Object"
],
answer:"JavaScript Object Notation"
},
{
question:"fetch() is used for?",
options:[
"API Requests",
"Animation",
"Storage",
"Database"
],
answer:"API Requests"
},
{
question:"addEventListener() handles?",
options:[
"Events",
"Images",
"Videos",
"Database"
],
answer:"Events"
},
{
question:"Async/Await handles?",
options:[
"Asynchronous Code",
"Animation",
"Storage",
"Loops"
],
answer:"Asynchronous Code"
},
{
question:"Which method converts JSON?",
options:[
"JSON.parse",
"parseJSON",
"convert",
"stringify"
],
answer:"JSON.parse"
}
]
},

gk:{
easy:[
{
question:"Capital of France?",
options:[
"Paris",
"London",
"Rome",
"Berlin"
],
answer:"Paris"
},
{
question:"Red Planet?",
options:[
"Mars",
"Earth",
"Venus",
"Jupiter"
],
answer:"Mars"
},
{
question:"Largest ocean?",
options:[
"Pacific",
"Indian",
"Atlantic",
"Arctic"
],
answer:"Pacific"
},
{
question:"National bird of India?",
options:[
"Peacock",
"Eagle",
"Crow",
"Sparrow"
],
answer:"Peacock"
},
{
question:"Fastest land animal?",
options:[
"Cheetah",
"Lion",
"Tiger",
"Horse"
],
answer:"Cheetah"
}
],

medium:[
{
question:"Who invented telephone?",
options:[
"Alexander Graham Bell",
"Newton",
"Edison",
"Tesla"
],
answer:"Alexander Graham Bell"
},
{
question:"Smallest continent?",
options:[
"Australia",
"Asia",
"Europe",
"Africa"
],
answer:"Australia"
},
{
question:"Currency of Japan?",
options:[
"Yen",
"Dollar",
"Euro",
"Rupee"
],
answer:"Yen"
},
{
question:"How many continents?",
options:[
"7",
"5",
"6",
"8"
],
answer:"7"
},
{
question:"Tallest mountain?",
options:[
"Mount Everest",
"K2",
"Alps",
"Himalaya"
],
answer:"Mount Everest"
}
],

hard:[
{
question:"Who discovered gravity?",
options:[
"Newton",
"Einstein",
"Tesla",
"Edison"
],
answer:"Newton"
},
{
question:"Largest desert?",
options:[
"Sahara",
"Gobi",
"Arctic",
"Antarctica"
],
answer:"Antarctica"
},
{
question:"Deepest ocean trench?",
options:[
"Mariana Trench",
"Pacific Ridge",
"Atlantic Trench",
"Java Trench"
],
answer:"Mariana Trench"
},
{
question:"Which gas is most abundant?",
options:[
"Nitrogen",
"Oxygen",
"Carbon",
"Helium"
],
answer:"Nitrogen"
},
{
question:"Who painted Mona Lisa?",
options:[
"Leonardo da Vinci",
"Picasso",
"Van Gogh",
"Michelangelo"
],
answer:"Leonardo da Vinci"
}
]
}

};

// START QUIZ
function startQuiz(category){

selectedCategory = category;

document.getElementById("categoryScreen")
.style.display="none";

document.getElementById("quizBox")
.style.display="block";

currentQuestion = 0;
score = 0;

loadQuestion();

}

// LOAD QUESTION
function loadQuestion(){

clearInterval(timer);

const currentQuestions =
questions[selectedCategory]
[selectedDifficulty];

const current =
currentQuestions[currentQuestion];

document.getElementById("question")
.innerText = current.question;

document.getElementById("questionCount")
.innerText =
`${currentQuestion+1}/5`;

const optionsDiv =
document.getElementById("options");

optionsDiv.innerHTML="";

document.getElementById("timer")
.innerText = timerValue;

timer = setInterval(()=>{

timerValue--;

document.getElementById("timer")
.innerText = timerValue;

if(timerValue<=0){

clearInterval(timer);

nextQuestion();

}

},1000);

current.options.forEach(option=>{

const button =
document.createElement("button");

button.innerText = option;

button.addEventListener("click",()=>{

if(option===current.answer){

button.classList.add("correct");

score++;

}else{

button.classList.add("wrong");

}

Array.from(optionsDiv.children)
.forEach(btn=>{

btn.disabled = true;

if(btn.innerText===current.answer){
btn.classList.add("correct");
}

});

setTimeout(()=>{
nextQuestion();
},1000);

});

optionsDiv.appendChild(button);

});

document.getElementById("progressBar")
.style.width =
((currentQuestion/currentQuestions.length)
*100)+"%";

}

// NEXT QUESTION
function nextQuestion(){

clearInterval(timer);

currentQuestion++;

timerValue =
selectedDifficulty==="easy" ? 15 :
selectedDifficulty==="medium" ? 10 : 5;

const currentQuestions =
questions[selectedCategory]
[selectedDifficulty];

if(currentQuestion <
currentQuestions.length){

loadQuestion();

}else{

showResult();

}

}

// RESULT
function showResult(){

document.getElementById("question")
.innerText = "Quiz Completed 🎉";

document.getElementById("options")
.innerHTML = "";

const percentage =
(score/5)*100;

let message = "";

if(percentage>=80){
message = "Excellent Work 🔥";
}else if(percentage>=50){
message = "Good Job 👍";
}else{
message = "Keep Practicing 💡";
}

const resultCard =
document.getElementById("resultCard");

resultCard.style.display="block";

resultCard.innerHTML = `
<h2>Your Score: ${score}/5</h2>
<h3>${percentage}%</h3>
<p>${message}</p>
`;

saveLeaderboard(percentage);

}

// LEADERBOARD
function saveLeaderboard(scoreValue){

const username =
localStorage.getItem("username")
|| "Guest";

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard"))
|| [];

leaderboard.push({
name:username,
score:scoreValue
});

localStorage.setItem(
"leaderboard",
JSON.stringify(leaderboard)
);

showLeaderboard();

}

function showLeaderboard(){

const leaderboardDiv =
document.getElementById("leaderboard");

let leaderboard =
JSON.parse(localStorage.getItem("leaderboard"))
|| [];

leaderboard.sort((a,b)=>
b.score-a.score
);

leaderboardDiv.innerHTML="";

leaderboard.slice(0,5)
.forEach(player=>{

leaderboardDiv.innerHTML += `
<div class="leaderboard-item">
<span>${player.name}</span>
<span>${player.score}%</span>
</div>
`;

});

}

showLeaderboard();

// TECH CAROUSEL
const slides = [

{
image:"images/html.jpg",
title:"HTML",
text:"HTML creates structure of websites."
},

{
image:"images/css.jpg",
title:"CSS",
text:"CSS styles websites beautifully."
},

{
image:"images/js.jpg",
title:"JavaScript",
text:"JavaScript adds interactivity."
},

{
image:"images/react.jpg",
title:"React",
text:"React builds modern UI apps."
}

];

let slideIndex = 0;

function updateSlide(){

document.getElementById("carouselImage")
.src = slides[slideIndex].image;

document.getElementById("carouselTitle")
.innerText = slides[slideIndex].title;

document.getElementById("carouselText")
.innerText = slides[slideIndex].text;

}

document.getElementById("next")
.addEventListener("click",()=>{

slideIndex++;

if(slideIndex>=slides.length){
slideIndex=0;
}

updateSlide();

});

document.getElementById("prev")
.addEventListener("click",()=>{

slideIndex--;

if(slideIndex<0){
slideIndex=slides.length-1;
}

updateSlide();

});

// AUTO SLIDE
setInterval(()=>{

slideIndex++;

if(slideIndex>=slides.length){
slideIndex=0;
}

updateSlide();

},4000);

// QUOTES
const quotes = [

"First, solve the problem. Then, write the code.",

"Code is like humor. When you have to explain it, it’s bad.",

"Experience is the name everyone gives to their mistakes.",

"Simplicity is the soul of efficiency.",

"Fix the cause, not the symptom."

];

document.getElementById("quoteBtn")
.addEventListener("click",()=>{

const random =
Math.floor(Math.random()*quotes.length);

document.getElementById("quoteText")
.innerText = quotes[random];

});

// RESTART QUIZ
document.addEventListener("click",(e)=>{

if(e.target.id==="restartQuizBtn"){

// RESET VARIABLES
currentQuestion = 0;
score = 0;

selectedCategory = "";
selectedDifficulty = "";

timerValue = 15;

// HIDE QUIZ
document.getElementById("quizBox")
.style.display = "none";

// RESET RESULT CARD
document.getElementById("resultCard")
.style.display = "none";

document.getElementById("resultCard")
.innerHTML = `
<button id="restartQuizBtn"
class="restart-btn">
Play Again 🔄
</button>
`;

// RESET PROGRESS BAR
document.getElementById("progressBar")
.style.width = "0%";

// SHOW START SCREEN AGAIN
document.getElementById("startScreen")
.style.display = "block";

}

});