let fan = document.getElementById("img");

function switchOn(){
    fan.style.animationDuration = 1 + "s";
    let onbtn = document.getElementById("on");
    toggleActiveButton(onbtn);
}

function switchOff(){
    fan.style.animationDuration = 0 + "s";
    let offbtn = document.getElementById("off");
    toggleActiveButton(offbtn);
}

function levelOne(){
    fan.style.animationDuration = 1 + "s";
    let one = document.getElementById("1");
    toggleActiveButton(one);
}

function levelTwo(){
    fan.style.animationDuration = 0.5 + "s";
    let two = document.getElementById("2");
    toggleActiveButton(two);
}

function levelThree(){
    fan.style.animationDuration = 0.2 + "s";
    let three = document.getElementById("3");
    toggleActiveButton(three);
}

function toggleActiveButton(clickedButton) {
    
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.remove("active");
    });
    
    
    clickedButton.classList.add("active");
}