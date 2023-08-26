import "./topbar.css"
import { Search } from "@mui/icons-material";
const Topbar = () => {
    return (
        <> <nav className="navbartop">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">dribble</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Find talent</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">For designers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Inspiration</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Learn design</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Go Pro</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <nav className="navcenter">
                <Search className="searchicon" />
                <input className="search-bar" type="text" placeholder="search here" />
            </nav>
            <nav className="navbarright">
                <div className="navrightbuttons">
                    <div className="navrightbutton">
                        <button className="button-login">Login</button>
                    </div>
                    <div className="navrightbutton">
                        <button className="button-signup">Sign up</button>
                    </div>
                    <div className="navrightbutton">
                        <button className="button-hire">Hire creator</button>
                    </div>
                </div>
            </nav>
        </nav>
        </>
    );
}

export default Topbar;
