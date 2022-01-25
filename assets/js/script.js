let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');
let digitalelement = document.querySelector('.digital');


function analogico (){
    let dt = new Date();
    let hor = dt.getHours();
    let min = dt.getMinutes(); 
    let seg = dt.getSeconds();

 
    hor < 10 ? hor = '0' + hor : hor;
    min < 10 ? min = '0' + min : min;
    seg < 10 ? seg = '0' + seg : seg;
 
    digitalelement.innerHTML = `${hor}:${min}:${seg}`;

    let sDeg = ((360/60)*seg)-90;
    let mDeg = ((360/60)*min)-90;
    let hDeg = ((360/12) * hor) + ((30/60) * min) - 90;


    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

setInterval(analogico, 1000);
analogico();