
import '../components/Contact.styles.css';

const Contact = () => {
    return ( 
        <div className="contact">
          <h2 className="heading">Contact <span className="highlight"> me</span></h2>
             <p className="sub-heading">I will like to hear from you. Whether it's a project, job opportunity, or just a chat, feel free to contact me</p> 
              <div className="seperator"></div>
              
             <form action="POST" data-netlify="true" className="contact-form">
               <div className="name">
                 <input type="text" id="first-name" className="first-name" name="first-name" placeholder="first name" required/>
                 <input type="text" id="last-name" className="last-name" name="last-name" placeholder="last name" required/>
               </div>
               <input type="email" id="email" className="email" name="email" placeholder=" your email" required />
              <textarea  className="message" placeholder="Your message"></textarea>
             <button type="submit" value="send message" className="btn contact-btn">Contact me</button>
            </form> 
              
             
        </div>
     );
}
 
export default Contact;