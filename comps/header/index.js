import React, {useEffect} from 'react';
import './header.css';

export const Header = () => {

// var menu_state = false;
// function menuToggle(){
//     if(menu_state == false){
//         document.querySelector("#menu").style.opacity = "1";
//         document.querySelector("#menu").style.width = "100vw";
//         document.querySelector("#menu").style.height = "100vh";
//         document.querySelector("#menu1").style.width = "30vw";
//         menu_state = true;
//     } else if(menu_state == true){
//         document.querySelector("#menu").style.opacity = "0";
//         document.querySelector("#menu").style.width = "0vw";
//         document.querySelector("#menu").style.height = "0vh";
//         document.querySelector("#menu1").style.width = "0vw";
//         menu_state = false;
//     }
// }
    
return <div>
    <header>
        {/* <div id="menu">
            <div id="menu1">
                <i class="material-icons" onClick="menuToggle()">close</i>
                <ul>
                    <li>Home</li>
                    <li onClick="about()">About</li>
                    <li>Portfolio</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div> */}
        {/* <!-- Navigation Menu -->
        <!-- <div id="menubar"> --> */}
        <a href="index.html">Joseph.</a>
        <div id="navbar">
            <a href="index.html">HOME</a>
            <a onClick="about()">ABOUT</a>
            <a href="Portfolio">PORTFOLIO</a>
            <a href="Projects">PROJECTS</a>
            <a href="Contact">CONTACT</a>
        </div>
        {/* <i class="material-icons" onClick={menuToggle()}>menu</i> */}
        {/* <!-- </div> --> */}
    </header>
    
</div>
}

export default Header;