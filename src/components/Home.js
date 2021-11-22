import { Link } from 'react-router-dom';
import RajisImg from '../images/profile-vert.jpg';
import './Home.css';

const Home = () => {
   
    return ( 
        <div className="homecontent">
            <div className="hero-content">
                    
                <h1 className="hero-heading"><span className="highlight">Hi,</span> i am Raji</h1>
                 <p className="profession"> Web Developer</p>
                 <p className="info">I am a web developer with passion for making a user friendly,
                  responsive and professional web site and applications.</p>
                    <Link className="btn"to="/About"> About Me</Link>
            </div>
            <img className="profile-Image" src={RajisImg} alt='profile pic' />
        </div>
     );
}
 
export default Home;
