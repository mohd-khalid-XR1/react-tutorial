import './Navbar.css'
import { Link} from 'react-router-dom'
const Navbar = (props) => {
    // console.log(props);
    const { websiteImage } = props
    // props.websiteImage = '' ❎ 
    // console.log(props);
    return <header>
        <nav>
            <div className="logo-container">
                <img src={websiteImage} alt="activa" />
                <h1>{props.websiteName}</h1>
            </div>

            <div className="links">
                {props.element}
                <Link to={'/'}>Home</Link>
                <Link to={'/login'}>Login</Link>
                <Link to={'/signup'}>Signup</Link>
                <span href="#" className="bell">
                    <span>2</span>
                    🔔
                </span>
            </div>

            <div className="nav-btn">
                <Link to={`/login`}><button>Login</button></Link>
                <button>Signup</button>
                <button id="menu">Menu</button>
            </div>
        </nav>
    </header>
}

export default Navbar