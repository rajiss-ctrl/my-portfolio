import Indicator from '../images/arrow-indicator.gif';
import RajiImg from '../images/rajis_image.png';
import '../components/About.styles.css';

const About = () => {
    return ( 
        <div className="about">
           <h1 className="heading">about <span className="highlight">me</span></h1>
             <p className="sub-heading">My name is Raji Sarafadeen Sanjo</p>
            <div className="seperator"></div>
            <div className="about-me-container">
                <div className="left-col">
                    <img src={RajiImg}  className="about-image" alt="" /> 
                </div>
                <div className="right-col">
                    <p className="about-para">
                I'm a passionate Frontend Web Developer using web technologies to build amazing products
                and focusing on solving problems for different niches and different industries using the power of technology.
                    </p>
                    <a href="/" className="btn">Download CV</a>
                </div>
            </div>
            <h2 className="heading">language and framework i know</h2>
            <div className="seperator"></div>
            <div className="skill-container">
                <div className="skill-card-html" >
                    <p className="skill">HTML</p>
                </div>
                <div className="skill-card-css" >
                    <p className="skill">CSS</p>
                </div>
                <div className="skill-card-scss" >
                    <p className="skill">SCSS</p>
                </div>
                <div className="skill-card-js" >
                    <p className="skill">JAVASCRIPT</p>
                </div>
                <div className="skill-card-react" >
                    <p className="skill">REACTJS</p>
                </div>
                <div className="skill-card-mtui" >
                    <p className="skill">MATERIAL-UI</p>
                </div>
                <div className="skill-card-bootstrap" >
                    <p className="skill">BOOTSTRAP</p>
                </div>
                <div className="skill-card-firebase" >
                    <p className="skill">FIREBASE</p>
                </div>
            </div>
            <img src={Indicator} className="indicator" alt="down arrow indicator" />
        </div>
     );
}
 
export default About;
