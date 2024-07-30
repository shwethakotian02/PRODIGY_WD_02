const playbutton = document.getElementsByClassName("play")[0];
const lapsbutton = document.getElementsByClassName("lap")[0];
const resetbutton = document.getElementsByClassName("reset")[0];
const clearbutton = document.getElementsByClassName("laps-btnclear")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const centisecond= document.getElementsByClassName("msec")[0];
const laps= document.getElementsByClassName("laps")[0];
const bg= document.getElementsByClassName("innercircle")[0];

let isPlay=false;
let isReset=false;
let secCounter=0;
let sec;
let min;
let centisec;
let lapitem=0;
let centisecCounter=0;
let minCounter=0;

const togglebutton=() => {
    lapsbutton.classList.remove("hidden");
    resetbutton.classList.remove("hidden");
}

const play = () => {
    if(!isPlay && !isReset)
        {
            playbutton.innerHTML = 'pause';
            bg.classList.add("animation-bg");
            min=setInterval(()=>{
                minute.innerHTML=`${++minCounter} :`;
            },60*1000);

            sec=setInterval(()=>{
                if(secCounter === 60)
                {
                    secCounter=0;
                }
                second.innerHTML=`&nbsp;${++secCounter} :`;
            },1000);

            centisec=setInterval(()=>{
                if(centisecCounter === 100)
                {
                    centisecCounter=0;
                }
                centisecond.innerHTML=`&nbsp;${++centisecCounter}`;
            },10);
            isPlay = true;
            isReset=true;
        }
        else{
           playbutton.innerHTML = 'play';
           bg.classList.remove("animation-bg");
            clearInterval(min);
           clearInterval(sec);
            clearInterval(centisec);
            isPlay = false;
            isReset=false;
        }
    togglebutton();
   
}


const reset = () =>
{
    
    isReset=true;
    play();
    lapsbutton.classList.add("hidden");
    resetbutton.classList.add("hidden");
    
    minute.innerHTML=' 0:';
    second.innerHTML='&nbsp; 0:';
    centisecond.innerHTML='&nbsp; 0';
}

const lap = () =>{
    const li=document.createElement("li");
    const number=document.createElement("span");
    const timeStamp=document.createElement("span");

    li.setAttribute("class","lapitem");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","timestamp");

    number.innerText=` #${++lapitem} `;
     timeStamp.innerHTML=`${minCounter} : ${secCounter} : ${centisecCounter}`;
    li.append(number,timeStamp);
    laps.append(li);
    clearbutton.classList.remove("hidden");

}  
const clearAll = () =>{
    laps.innerHTML=' ';
    laps.append(clearbutton);
    clearbutton.classList.add("hidden");
    lapitem=0;
}

playbutton.addEventListener("click",play);
resetbutton.addEventListener("click",reset);
lapsbutton.addEventListener("click",lap);
clearbutton.addEventListener("click",clearAll);
