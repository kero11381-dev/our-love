// ===== شاشة البداية =====
const loader = document.getElementById("loader");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

loader.addEventListener("click", () => {
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 700);

    music.play().catch(() => {});
});

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "⏸ Pause";
    } else {
        music.pause();
        musicBtn.innerHTML = "▶ Our Song";
    }
});

// ===== الرسالة =====
const message = `Every love story is beautiful,
but ours is my favorite.

Thank you for every smile,
every laugh,
every memory,
and every moment.

You are my safe place,
my happiness,
and the best thing that ever happened to me.

I will choose you,
today,
tomorrow,
and every day after that.

I love you forever ❤️`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();

// ===== عداد العلاقة =====
// غير التاريخ ده لتاريخ بداية ارتباطكم
const startDate = new Date("2025-11-19 00:00:00");

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    diff %= (1000 * 60 * 60 * 24);

    let hours = Math.floor(diff / (1000 * 60 * 60));

    diff %= (1000 * 60 * 60);

    let minutes = Math.floor(diff / (1000 * 60));

    diff %= (1000 * 60);

    let seconds = Math.floor(diff / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter,1000);

updateCounter();

// ===== قلوب متحركة =====
function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,250);

// ===== نجوم الخلفية =====
const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

function resize(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
resize();

window.addEventListener("resize",resize);

let stars=[];

for(let i=0;i<180;i++){

stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*0.8
});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

stars.forEach(s=>{

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

s.y+=s.d;

if(s.y>canvas.height){
s.y=0;
s.x=Math.random()*canvas.width;
}

});

requestAnimationFrame(animate);

}

animate();