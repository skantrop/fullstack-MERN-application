import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
    const user = true;
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
                    <li className="topListItem">
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
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" 
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
