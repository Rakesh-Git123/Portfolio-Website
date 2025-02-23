import "./Navbar.css";
import {useLocation, NavLink,useNavigate} from "react-router-dom";
const Navbar = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const openMenu=()=>{
        document.getElementById("location").style.right="0"
    }
    const closeMenu=()=>{
        document.getElementById("location").style.right="-180px";
      }
    return (
        <div className="Navbar">
            <nav>
                <div onClick={()=>navigate("/")}  className="logo"><p>R<span>akesh</span>.</p></div>
                <ul id="location">
                    <i onClick={closeMenu} className="cross fa-solid fa-xmark"></i>
                    <li><NavLink style={{color:location.pathname==='/'?'cyan':'white'}} to="/">Home {location.pathname==='/'?<hr/>:<></>}</NavLink></li>
                    <li><NavLink style={{color:location.pathname==='/about'?'cyan':'white'}} to="/about">About {location.pathname==='/about'?<hr/>:<></>}</NavLink></li>
                    <li><NavLink style={{color:location.pathname==='/skills'?'cyan':'white'}} to="/skills">Skills {location.pathname==='/skills'?<hr/>:<></>}</NavLink></li>
                    <li><NavLink style={{color:location.pathname==='/project'?'cyan':'white'}} to="/project">Projects {location.pathname==='/project'?<hr/>:<></>}</NavLink></li>
                    <li><NavLink style={{color:location.pathname==='/contact'?'cyan':'white'}} to="/contact">Contact {location.pathname==='/contact'?<hr/>:<></>}</NavLink></li>
                </ul>
                <div className="menu">
                <i onClick={openMenu} className='bx bx-menu'></i>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;