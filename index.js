//alert("Aman");
var arr=document.querySelectorAll(".drum");

//detects button press
for(var i=0;i<arr.length;i++)
    arr[i].addEventListener("click",function (){   
        playSound(this.innerHTML); 
        addAnimation(this.innerHTML);  
     });

//detects keyboard press
document.addEventListener("keydown",function(event){
    playSound(event.key);
    addAnimation(event.key);
});

function playSound(key){
    switch(key){
        case "w":
            var crash=new Audio('crash.mp3');
            crash.play();
            break;
        case "a":
            var kick=new Audio('kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare=new Audio('snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1=new Audio('tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2=new Audio('tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3=new Audio('tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4=new Audio('tom-4.mp3');
            tom4.play();
            break; 
        default:
            alert("error");    
   }
}
   function addAnimation(key){
        var activeButton=document.querySelector("." + key);
        activeButton.classList.add("pressed");
        setTimeout(()=>{
            activeButton.classList.remove("pressed");
        },100);
   }

