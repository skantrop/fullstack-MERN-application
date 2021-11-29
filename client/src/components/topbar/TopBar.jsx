import { Link } from "react-router-dom";
import "./topbar.css"
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function TopBar() {
  const {user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
      dispatch({type: "LOGOUT"});
  }
    return (
        <div className="top">
            <div className="topLeft">
            <a href="https://www.facebook.com/" target="blank"><i className="topIcon fab fa-facebook-square"></i></a>
            <a href="https://twitter.com/" target="blank"><i className="topIcon fab fa-twitter-square"></i></a>
            <a href="https://www.pinterest.com/" target="blank"><i className="topIcon fab fa-pinterest-square"></i></a>
            <a href="https://www.instagram.com/" target="blank"><i className="topIcon fab fa-instagram-square"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                        </li>
                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem"onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link className="link" to='/settings'>
                    <img 
                        className="topImg"
                        src={PF + user.profilePic} 
                        alt="" 
                    /> </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>

                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
