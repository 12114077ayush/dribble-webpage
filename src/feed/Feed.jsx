import "./Feed.css";
import Info from "../components/shareinfo/Info";
import Content from "../components/feedcontent/Content";
import FeedbackIcon from '@mui/icons-material/Feedback';
import SendIcon from '@mui/icons-material/Send';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Feed = () => {
    return (<>
        <div >
            <Info />
        </div>
        <div className="contentbar">
            <Content />
            <div className="rightcontent">
                <img src="./assets/2.jpeg" alt="" className="rightprofile" style={{ zIndex: 1 }} />
                <FeedbackIcon className="rightbaricon" style={{ zIndex: 1 }} />
                <SendIcon className="rightbaricon" />
                <InfoOutlinedIcon className="rightbaricon" />
            </div>
        </div>
    </>

    );
}

export default Feed;