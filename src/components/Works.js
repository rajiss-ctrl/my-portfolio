
import './Works.css';
const Works = () => {
    return (
        <div className="project">
            <h1 className="heading">Project<span className="highlight">s</span></h1>
            <p className="sub-heading">Some of my resent projects</p>
            <div className="seperator"></div>


            <ul className="project-list">
                <li>
                    <div className="title-card">
                    <img src={`${process.env.PUBLIC_URL}/responsiveweb.png`} />
                    <div className="title">
                    <h3>Fully responsive static website</h3>
                    <a href="">Check it out</a>
                    </div>
                    </div>
                    
                   
                </li>
                <li>
                      
                  <div className="title-card">
                    <img src={`${process.env.PUBLIC_URL}/responsiveweb.png`} />
                    <div className="title">
                    <h3>Fully responsive static website</h3>
                    <a href="">Check it out</a>
                    </div>
                    </div>  
                   
                </li>
                <li>
                
                    <div className="title-card">
                    <img src={`${process.env.PUBLIC_URL}/techadvise.png`} />
                    <div className="title">
                    <h3>Localstorage project</h3>
                    <a href="">Check it out</a>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Works;