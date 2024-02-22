import videos from '../../data/videos.json';

function VideoList({}) {
    return(
        <aside>
          {videos.map((video) => (
        <div>
        {video.title}
        </div>
      ))}  
    </aside>
    )
}












export default VideoList;