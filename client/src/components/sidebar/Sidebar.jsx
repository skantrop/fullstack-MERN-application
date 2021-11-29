import "./sidebar.css"
import { useState, useEffect } from "react"
import axios from "axios"
import {Link} from "react-router-dom"


export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://i.pinimg.com/236x/8c/8c/b6/8c8cb62bb4acf017e73f7e8549254b12.jpg" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aut dignissimos voluptatum facilis possimus impedit,
                perspiciatis eveniet. Nisi, culpa voluptatem,
                libero sit ratione eaque tempore repudiandae assumenda, 
                aliquam totam aperiam. Iusto!</p>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                    {cats.map(c=> (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}
                        </li>
                        </Link>
            ))};
                    </ul>
                </div>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                    </div>
                </div>
        </div>
    )
}
