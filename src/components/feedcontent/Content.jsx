import Carousel from 'react-bootstrap/Carousel';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import "./Content.css";
function Content() {
    return (
        <div className="contentcontainer ">
            <div className="contentwrapper">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src="./assets/first.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./assets/second.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./assets/third.png"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
                <div className="contentwrite">
                    <div className="writewrapper">
                        <p className="text">Hey all,</p>
                        <p className='text'>
                            I've decided to make a redesign and animation for the Ahead app. Please review<br />and happy to read your feedback!<br />
                        </p>
                        <p className="text">Design — Figma<br />Illustrations — Adobe Illustrator<br />Animation — Adobe After Effects</p>
                        <p className="text">******* </p>
                        <p className="text"> <MailOutlineIcon className="mailicon" style={{ color: "blue" }} /> I am open to new projects! <a classname="link" style={{ color: "black", fontWeight: "550" }} href='/'>hey@migulko.cz</a></p>
                        <p className="text">*******</p>
                        <p className="text"><a href="/" className="morelinks" style={{ color: "black" }}>Instagram</a> | <a href="/" className="morelinks" style={{ color: "black" }}>Linkedin</a> | <a href="/" className="morelinks" style={{ color: "black" }}>Github</a></p>
                    </div>
                </div>
                <div className="contentimage">
                    <div className="imagewrapper">
                        <img src="./assets/hompage.jpg" alt="hello guys" className="img" />
                    </div>
                </div>
                <div className="contentbottom">
                    <div className="bottomwrapper">
                        <div className="bottomprofile">
                            <hr className="hr" />
                            <img src="/assets/2.jpeg" alt="" className="proflile" />
                            <hr className="hr" />
                        </div>
                        <div className="bottomprofiletext">
                            <p className="bottomtext" style={{ fontWeight: "550" }}>Taras Migulko</p>
                            <p className="bottomtext" style={{ fontWeight: "400", fontSize: "15px" }}>Email me hey@migulko. cz</p>
                            <button className="hirebtn"><MailIcon style={{ color: "white", marginRight: "5px" }} /> Hire me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;