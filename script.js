
let number=1;
let p1;
let p2;

document.getElementById("main").addEventListener("click",()=>{
    if(number%2==0){
        p1=true;

    }else{
        p2=true;
    }

})
//function to check for victory
let text = document.getElementsByClassName("box");
let check=()=> {
    if (text[0].innerHTML===text[1].innerHTML&&text[0].innerHTML===text[2].innerHTML&& text[0].innerHTML!=="") {
        declare();
        return
    }
    if (text[3].innerHTML===text[4].innerHTML&&text[4].innerHTML===text[5].innerHTML&& text[5].innerHTML!=="") {
        declare();
        return
    }
    if (text[6].innerHTML===text[7].innerHTML&&text[7].innerHTML===text[8].innerHTML&& text[8].innerHTML!=="") {
        declare();
        return
    }
}
//declares victory 
function declare() {
    let print = document.getElementById("winner")
    document.getElementById("players").innerHTML=``;
    if(number%2==0){
        print.innerHTML=`WINNER: PLAYER2`

    }else{
        print.innerHTML=`WINNER: PLAYER1`
    }
}
// check  between cross and circle, what to add  
function cross(box_no) {

    let  a = document.getElementById(box_no);
    a.innerHTML=`<div class="mark">X</div>`
}
function circle(box_no) {

    let  a = document.getElementById(box_no);
    a.innerHTML=`<div class="mark">O</div>`
}
// checks if user has clicked a  particular box 
document.getElementById("box1").addEventListener("click",()=>{
    if(document.getElementById("box1").innerHTML===``){
    if(p1==true){
        p1=false;
        number=number+1;
        cross("box1");
    }else{
        circle("box1")
        number=number+1;
    }
    check();
}
})
document.getElementById("box2").addEventListener("click",()=>{
    if(document.getElementById("box2").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box2");
        }else{
            circle("box2")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box3").addEventListener("click",()=>{
    if(document.getElementById("box3").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box3");
        }else{
            circle("box3")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box4").addEventListener("click",()=>{
    if(document.getElementById("box4").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box4");
        }else{
            circle("box4")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box5").addEventListener("click",()=>{
    if(document.getElementById("box5").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box5");
        }else{
            circle("box5")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box6").addEventListener("click",()=>{
    if(document.getElementById("box6").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box6");
        }else{
            circle("box6")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box7").addEventListener("click",()=>{
    if(document.getElementById("box7").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box7");
        }else{
            circle("box7")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box8").addEventListener("click",()=>{
    if(document.getElementById("box8").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box8");
        }else{
            circle("box8")
            number=number+1;
        }
        check();
    }
})
document.getElementById("box9").addEventListener("click",()=>{
    if(document.getElementById("box9").innerHTML===``){
        if(p1==true){
            p1=false;
            number=number+1;
            cross("box9");
        }else{
            circle("box9")
            number=number+1;
        }
        check();
    }
}) 

// reset button

let reset_btn = document.getElementById("btn-reset");
reset_btn.addEventListener("click",()=>{
    let res = document.getElementsByClassName("box")
    res.innerHTML=``;
    for (let i = 0; i < res.length; i++) {
        res[i].innerHTML=``;
        
    }
    document.getElementById("players").innerHTML=`Player1 X Player2`;
    document.getElementById("winner").innerHTML=``;
})
