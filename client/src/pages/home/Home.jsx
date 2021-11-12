import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import './home.css'
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <>
            <Header /> 
        <div className="home">
            <Link className="link" to="/post/:postId"><Posts /></Link>
            <Sidebar />
        </div>
        </>
    )
}
