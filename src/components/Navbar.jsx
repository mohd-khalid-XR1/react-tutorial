import './Navbar.css'

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
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Create</a>
                <span href="#" className="bell">
                    <span>2</span>
                    🔔
                </span>
            </div>

            <div className="nav-btn">
                <button>Login</button>
                <button>Signup</button>
                <button id="menu">Menu</button>
            </div>
        </nav>
    </header>
}

export default Navbar