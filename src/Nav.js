import React,{useState, useEffect} from 'react';
import "./Nav.css"

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
            // so that the scroll event is not fired when the window is closed + to avoid multiple EventListeners
        };
    },[]);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"            
                alt="Netflix Logo" 
            />
            <img 
                className="nav__avatar" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="Netflix Avatar" 
            />
        </div>
    )
}

export default Nav
