//detect click
//adding evenListener for all the drum class elements
for(let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        let btnInnerHTML = this.innerHTML; //the actual value of 'w', 's', 'a',.....
        makeSound(btnInnerHTML); //make sound when click
        animation(btnInnerHTML);
    })
}

//detect key
document.addEventListener("keydown", function(event){ //when the function is called, pass in the event that triggered the key press 
    makeSound(event.key);//that event contains a property called 'key' that is the actual key value that was pressed
    animation(event.key);
});

//make sound based on whether it is keydown or click
function makeSound(key){
    switch(key){
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');//predefined property Audio by JS
            audio.play();
        break;  

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break; 

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break; 

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break; 

        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break; 

        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break; 

        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break; 

        default: console.log(key);
    }
}

//animation

function animation(currentKey){
    let pressedAnimation = document.querySelector("."+currentKey);
    pressedAnimation.classList.add("pressed");
    setTimeout(function(){
        pressedAnimation.classList.remove("pressed")
    },100);
}
