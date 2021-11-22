
import './Works.css';
const Works = () => {
    return (
        <div className="project">
            <h1 className="heading">Project<span className="highlight">s</span></h1>
            <p className="sub-heading">Some of my resent projects</p>
            <div className="seperator"></div>


            <ul className="project-list">
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/responsiveweb.png`} />
                    <div className="title">
                        <h3>ZuriTrainig/hng/I4G</h3>
                        Responsive site..A project done in fullfilment of zuri trainning task.
                    </div>
                    </a>
                   
                </li>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/responsiveweb.png`} />
                   <div className="title">
                        <h3>Fully responsive static website</h3>
                        <p>Check it!</p>
                    </div>
                    </a>
                   
                </li>
                <li>
                    <a href="">
                        <img src={`${process.env.PUBLIC_URL}/techadvise.png`} />
                      <div className="title">
                        <h3>Localstorage project</h3>
                    
                    </div>
                    </a>
                    
                </li>
            </ul>
        </div>
    );
}

export default Works;