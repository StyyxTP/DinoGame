var personnage = document.getElementById("personnage");
var block = document.getElementById("block");

function jump(){
    if(personnage.classList != "animate"){
        personnage.classList.add("animate");
    }
    setTimeout(function(){
        personnage.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(personnage).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && persoTop >= -514){
        block.style.animation = "none";
        block.style.display = "none";
        alert("BOOM !! Tu as explosé.")
    }
}, 10)