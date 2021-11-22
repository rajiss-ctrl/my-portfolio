import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../components/NavBar.styles.css'

const NavBar = () => {
    const [open ,setOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);
    
    const trackScrenWidth = ()=>{
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width > 800){
            setOpen(true)
    
        }
    }

    useEffect(()=>{
trackScrenWidth();
window.addEventListener('resize',trackScrenWidth);
return ()=>window.addEventListener('resize',trackScrenWidth);

    },[])

    return ( 
        <nav className="navbar">
            <div className="nav-wrapper">
            <div className="logo">
               <Link to="/"> 
               <h1>
                   <div className="line-1"></div>
                   <div className="line-2"></div>
                   <span className="logospan1">rajiss</span>-<span className="logospan2">ctrl</span>
                   <div className="line-1"></div>
                   <div className="line-2"></div>
               </h1>
               </Link>
            </div>
                <div className="list-wrapper">
                    <img 
                    src={`${process.env.PUBLIC_URL}/menu.png`} 
                    alt="menu icon"
                    style={{opacity: !open ? 1 : 0}} 
                    onClick={()=>{
                        setOpen(!open)
                    }}/>
                    <img 
                    src={`${process.env.PUBLIC_URL}/close.png`} 
                    alt="cross icon"
                    style={{opacity: open ? 1 : 0}}
                     onClick={()=>{
                        setOpen(!open)
                    }} />
                    <ul style={{left: open ? "0" : "-100vw"}}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        
                        <li>
                            <Link to="/works">Works</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
            
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;