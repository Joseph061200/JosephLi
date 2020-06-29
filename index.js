var menu_state = false;
function menuToggle(){
    if(menu_state == false){
        document.querySelector("#menu").style.opacity = "1";
        document.querySelector("#menu").style.width = "100vw";
        document.querySelector("#menu").style.height = "100vh";
        document.querySelector("#menu1").style.width = "30vw";
        menu_state = true;
    } else if(menu_state == true){
        document.querySelector("#menu").style.opacity = "0";
        document.querySelector("#menu").style.width = "0vw";
        document.querySelector("#menu").style.height = "0vh";
        document.querySelector("#menu1").style.width = "0vw";
        menu_state = false;
    }
}

function about(){
    window.scrollTo(0,800);
}