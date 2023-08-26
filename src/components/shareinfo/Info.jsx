import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import "./info.css";
const Info = () => {
    return (
        <>
            <div className="feedcontainer">
                <div className="feedwrapper">
                    <div className="feedtop">
                        <div className="feedtopleft">
                            <img src="/assets/2.jpeg" alt="" className="feedprofile" />
                            <span className="feedtoptexts">
                                <p className="text1">Ahead app redesign concept</p>
                                <div className="decs">
                                    <ul className="listitems">
                                        <li className="listitem liststyle">
                                            <a href="/" className="link1  ">Taras Migulko</a>
                                        </li>
                                        <li className="listitem">
                                            <a href="/" className="link1">Follow</a>
                                        </li>
                                        <li>
                                            <a href="/" className="link1">Hire me</a>
                                        </li>
                                    </ul>
                                </div>
                            </span>
                        </div>
                        <div className="feedtoprighticons">
                            <div className="righticon"><FavoriteBorderIcon /></div>
                            <div className="righticon"><BookmarkBorderOutlinedIcon /></div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default Info