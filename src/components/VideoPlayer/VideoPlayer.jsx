import './VideoPlayer.scss'

function VideoPlayer({ clicked }) {
    return (
        <div className="video-player__container">
            <video className="video-player__editor" poster={clicked.image} controls>
                <source src={clicked.video} type="video/mp4"/>
            </video>
        </div>
    );
}

export default VideoPlayer;