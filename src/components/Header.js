import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {

    return (
        <header className="Header">
            <h1>Dojo-React-Redux Application</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="post">New Post</Link></li>
                    <li><Link to="user">Users</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header