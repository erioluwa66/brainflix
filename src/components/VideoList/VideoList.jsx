import { Link } from 'react-router-dom';
import VideoListItem from '../VideoListItem/VideoListItem';
import './VideoList.scss';

function VideoList({ videoData, selected }) {
    const filteredVideos = videoData.filter(video => video.id !== selected.id);

    return (
        <section className="video-list">
            <h2 className="video-list__title">NEXT VIDEO</h2>
            {filteredVideos.map(video => (
                <Link className="video-list__link" to={`/video/${video.id}`} key={video.id}>
                    <VideoListItem videoData={video} />
                </Link>
            ))}
        </section>
    );
}

export default VideoList;;
