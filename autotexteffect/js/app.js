//UI
const textel = document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";

// console.log(pgh.length);

let idx = 1;
let speed = 1000;

function autotext(){
    // console.log('hay');
    textel.innerText = pgh.slice(0,idx);

    idx++;
    if(idx > pgh.length){
        idx = 1;
    }

    setTimeout(autotext,speed);
}

// autotext();
setTimeout(autotext,200);

//Event Lisener
speedel.addEventListener('input',function (){
    // console.log('hay');
    // console.log(speedel.value);

    speed = 1000 / speedel.value;
});