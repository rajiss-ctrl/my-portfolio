
import '../components/Contact.styles.css';

const Contact = () => {
    return ( 
        <div className="contact">
          <h2 className="heading">Contact <span className="highlight"> me</span></h2>
             <p className="sub-heading">I will like to hear from you. Whether it's a project, job opportunity, or just a chat, feel free to contact me</p> 
              <div className="seperator"></div>
              
             <div className="contact-form">
               <div className="name">
                 <input type="text" className="first-name" placeholder="first name" required/>
                 <input type="text" className="last-name" placeholder="last name" required/>
               </div>
               <input type="email" className="email" placeholder=" your email" required />
              <textarea  className="message" placeholder="Your message"></textarea>
             <button className="btn contact-btn">Contact me</button>
              </div> 
              
             
        </div>
     );
}
 
export default Contact;