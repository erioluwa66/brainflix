import './VideoPlayer.scss'

function VideoPlayer({ videoData }) {
    return (
        <div className="video-player__container">
            <video className="video-player__player" poster={videoData.image} controls>
                <source src={videoData.video} type="video/mp4"/>
            </video>
        </div>
    );
}

export default VideoPlayer;