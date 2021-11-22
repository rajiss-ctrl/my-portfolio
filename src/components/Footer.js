import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return ( 
        <footer>
           <a href="hht://www.facebook.com/omosanjos" > <img src={`${process.env.PUBLIC_URL}/facebook01.png`} className="fb" alt="facebook profile" /></a>
           <a href="www.twitter.com/rajisanjo" > <img src={`${process.env.PUBLIC_URL}/twitter01.png`} alt="twitter profile" /></a>
           <a href="www.facebook.com/omosanjos" > <img src={`${process.env.PUBLIC_URL}/instagram01.jpg`} alt="instagram profile" /></a>
           <a href="www.facebook.com/omosanjos" > <img src={`${process.env.PUBLIC_URL}/linkedin01.png`} alt="linkedin profile" /></a>
        </footer>
     );
}
 
export default Footer;