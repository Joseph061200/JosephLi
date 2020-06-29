import './app.css';

// importing comps
import Header from '../comps/header';

// importing images
const img1 = require('../img/img1.png');
const img2 = require('../img/img2.jpg');
const img3 = require('../img/img3.jpg');
const img4 = require('../img/img4.jpg');
const img5 = require('../img/img5.jpg');
const img6 = require('../img/img6.jpg');
const img7 = require('../img/img7.jpg');
const img8 = require('../img/img8.jpg');

const Index = () => <div>
    <Header/>
    {/* <!-- Main Content --> */}
        <main>
            <div id="landingpage">
                <div>
                    <p>Hello, I am</p>
                    <h1>JOSEPH LI</h1>
                    <hr/>
                    <p>Digital Designer / Frontend Developer</p>
                    <hr/>
                </div>
            </div>
            
            <div class="about">
                <img src={img1} alt="Image of Joseph Li"/>
                <div>
                    <h2>ABOUT</h2>
                    <p>"My passion is delivering high quality products to both the client and consumer that will exceed their expectations. I'm a student at the British Columbia Institute of Technology (BCIT), and I am eager to learn, grow, and help others succeed along the way.<br/><br/>

                    The past year I've been working with my classmates to complete projects that will enhance the user's experience and communicate a brand’s identity in the most effective way. As a Web/User Interface Designer, my goal is to build a product that clearly reflects the values of the client through compelling designs and seamless interaction."
                    </p>
                </div>
            </div>
            <video autoplay muted loop class="myVideo">
                <source src="Content/Project.mp4" type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
            <div id="Photoshop">
                <h2>GRAPHIC DESIGN</h2>
                <div class="gallery">
                    <div><img src={img2} alt=""/></div>
                    <div><img src={img3} alt=""/></div>
                    <div><img src={img4} alt=""/></div>
                    <div><img src={img5} alt=""/></div>
                    <div><img src={img6} alt=""/></div>
                    <div><img src={img7} alt=""/></div>
                    <div><img src={img8} alt=""/></div>
                </div>
                {/* <!-- <p>Photoshop</p> --> */}
            </div>
        </main>
</div>

export default Index;