//UI

//hiddensearch
const inputel = document.getElementById('search'),
    searchbtn = document.querySelector('.search-btns'),
    searchel = document.querySelector('.searchs');

//autocount effect
const counters = document.querySelectorAll('.counters');

//autotext effect
const text = document.getElementById('text');
const pgh = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it';

//menulist
const menubtn = document.getElementById('btn');
const menulistcontainer = document.getElementById('menulist-container');

//Function
//autocount effect
counters.forEach(function(counter){
    counter.textContent = '0';

    function updatecounter(){
        const target = Number(counter.getAttribute('data-target'));
        // console.log(target);

        const ctr = +counter.textContent;
        // console.log(typeof ctr);

        const incerment = target/100;

        if(ctr<target){
            counter.textContent = Math.ceil(ctr + incerment);
            setTimeout(updatecounter,50);
        }
    }

    updatecounter();
});
//end autocounteffect

//autotext effect

let idx = 1;
let speed = 50;

function autotext(){
    
    text.textContent = pgh.slice(0,idx);

    idx++;

    if(idx > pgh.length){
        clearTimeout();
    }

    setTimeout(autotext,speed);
}

autotext();

//autotext end

//menulist start
function showlist(){
    menulistcontainer.classList.add('show');

    let lis = document.querySelectorAll('.menulist ul li');

    lis.forEach(function (li){
        // li.classList.add('animate__animated ');
        li.classList.add('animate__fadeInDown');

    });
}

function hidelist(){
    menulistcontainer.classList.remove('show');
    
    let lis = document.querySelectorAll('.menulist ul li');

    lis.forEach(function (li){
        // li.classList.add('animate__animated ');
        li.classList.remove('animate__fadeInDown');

    });

}

//Event Listener

//hiddensearch
searchbtn.addEventListener('click',function(){
    searchel.classList.toggle('active');

    inputel.focus();
});

//menulist start
menubtn.addEventListener('click',function(){
    menubtn.classList.toggle('changes');

    if(menubtn.classList.contains('changes')){
        showlist();
    }else{
        hidelist();
    }
});