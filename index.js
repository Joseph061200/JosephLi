var menu_state = false;
var popup_state = 0;

// navigation
function about(){
    document.querySelector(".main").scrollTo(0, window.innerHeight);
    menu_state = true;
    menuToggle();
}

function portfolio(){
    document.querySelector(".main").scrollTo(0, window.innerHeight*3);
    menu_state = true;
    menuToggle();
}

function projects(){
    document.querySelector(".main").scrollTo(0, window.innerHeight*4);
    menu_state = true;
    menuToggle();
}

function contact(){
    document.querySelector(".main").scrollTo(0, window.innerHeight*10);
    menu_state = true;
    menuToggle();
}

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

// gallery

function expand(num){  
    popup_state = num;
    if(num === 2 || num === 5 || num === 7){
    document.querySelector(".item"+num).style.display = "block";
    }
    document.querySelector(".item"+num).style.width = "50vh";
    document.querySelector(".item"+num).style.height = "auto";
    document.querySelector(".item"+num).style.position = "fixed";
    document.querySelector(".item"+num).style.top = "10vh";
    document.querySelector(".item"+num).style.zIndex = "1";

    document.querySelector(".popupText").innerHTML = popupText[num].text;

    document.querySelector(".popup").style.display = "flex";
}

function shrink(){
    if(popup_state === 2 || popup_state === 5 || popup_state === 7){
    document.querySelector(".item"+popup_state).style.display = "none";
    }
    document.querySelector(".item"+popup_state).style.width = "25vw";
    document.querySelector(".item"+popup_state).style.height = "25vw";
    document.querySelector(".item"+popup_state).style.position = "relative";
    document.querySelector(".item"+popup_state).style.top = "0";
    document.querySelector(".item"+popup_state).style.zIndex = "0";

    document.querySelector(".popup").style.display = "none";
}

function next(){
    setTimeout(function(){
        popup_state++;
        expand(popup_state);
        if(popup_state === 3 || popup_state === 6 || popup_state === 8){
            document.querySelector(".item"+(popup_state-1)).style.display = "none";
            }
    }, 1);
}

function back(){
    setTimeout(function(){
        popup_state--;
        expand(popup_state);
        if(popup_state === 1 || popup_state === 4 || popup_state === 6){
            document.querySelector(".item"+(popup_state+1)).style.display = "none";
            }
    }, 1);
}

var popupText = [
    {text: ""
    },
    {text: "<strong>Tools:</strong></br> Adobe Photoshop <br><strong>Project:</strong></br> Photo Retouching, Adjustments & Blending <br><br><strong>Description:</strong><br>This was one of the first big projects we were given in our photoshop class. It was also my first real attempt at double exposure photography. Through this assignment, I learned the basic process of photo retouching, adjustments, and basic conceptualization. This portrait specifically was inspired by a more dystopian mood. I personally chose to blend the images this way rather than just having it placed in the background because I thought it fit the mood better. I also just wanted to challenge myself. <br><br>Credits:</br> Josh Mountain | Model"
    },
    {text: "<strong>Tools:</strong></br> Adobe Photoshop <br><strong>Project:</strong></br> Photo Retouching, Adjustments & Blending <br><br><strong>Description:</strong><br>For our final project, we were tasked with creating a double exposure portrait. This gave me the opportunity to continue to experiment with the concept. I was able to play around with blending modes a bit more and really mix the two images together. However, in this second attempt I was not able to get the desired quality that I had in the first one. This was mostly a result of my lesser experience in the area of photography. But as a result, I learned the importance of taking good photos."
    },
    {text: "<strong>Tools:</strong></br> Adobe Illustrator <br><strong>Project:</strong></br> Illustration & Object Manipulation <br><br><strong>Description:</strong><br> This piece was done in my vector graphics class. The goal was to recreate a mechanical object in order to practice using global colours, gradients and the pathfinder and pen tools. It also helped me become more confortable with the technical process and strategically arranging the objects to create the illusion of realism. Organization of layers and components was a critical part of the project. <br><br>Credits:</br> Google | Photography"
    },
    {text: "<strong>Tools:</strong></br> Adobe Illustrator <br><strong>Project:</strong></br> Typography & Design <br><br><strong>Description:</strong><br> I was tasked with creating a poster that was to be made up of primarily text and a minimal amount of graphics. It was to evoke the International Typographic Style or Swiss Style. And so, I was given a document with plain text which I organized based on informational hierarchy. Based on the information, I used colors, fonts, and graphics that displayed a more classical or orchestral feeling."
    },
    {text: "<strong>Tools:</strong></br> Adobe Illustrator <br><strong>Project:</strong></br> Typography & Design <br><br><strong>Description:</strong><br>"
    },
    {text: "Text for the Westside post 1"
    },
    {text: "Text for the Westside post 2"
    },
    {text: "Text for the VibeCheck"
    },
    
];