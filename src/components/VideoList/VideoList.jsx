import { Link } from 'react-router-dom';
import VideoListItem from '../VideoListItem/VideoListItem';
import './VideoList.scss';

function VideoList({ videos, selected }) {
    // Filter out the selected video
    const filteredVideos = Array.isArray(videos) ? videos.filter(video => video.id !== selected.id) :[]

    return (
        <aside className="video-list">
            <h2 className="video-list__title">NEXT VIDEOS</h2>
            {/* Map through filtered videos */}
            {filteredVideos.map(video => (
                <Link className="video-list__link" to={`/${video.id}`} key={video.id}>
                    <VideoListItem video={video} />
                </Link>
            ))}
        </aside>
    );
}

export default VideoList;
