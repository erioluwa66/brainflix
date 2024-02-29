import './VideoPlayer.scss'

function VideoPlayer({ selected }) {
    return (
        <div className="video-player__container">
            <video className="video-player__player" poster={selected.image} controls>
                <source src={selected.video} type="video/mp4"/>
            </video>
        </div>
    );
}

export default VideoPlayer;