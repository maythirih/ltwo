// UI 
const buttons = document.querySelectorAll('.btnripple');

buttons.forEach(button=>{
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log('i am working');

        const cx = e.clientX;
        // console.log(cx);
        const cy = e.clientY;
        // console.log(cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btnleft);

        const xinside = cx-btnleft;
        const yinside = cy-btntop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top=yinside + "px";
        circle.style.left=xinside + "px";

        e.target.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });

});