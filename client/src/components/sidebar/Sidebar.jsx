import "./sidebar.css"

export default function Sidebar() {
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
                        <li className="sidebarListItem">Life</li>
                        <li className="sidebarListItem">Music</li>
                        <li className="sidebarListItem">Style</li>
                        <li className="sidebarListItem">Sport</li>
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Cinema</li>
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
