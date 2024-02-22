import videos from '../../data/videos.json';



function VideoList({}) {
    return(
        <aside className='video-list'>
        <h2 className='video-list__tittle'>NEXT VIDEO</h2>
          {videos.map((video) => (
        <div>
            {video.title}
            {video.channel}
        </div>
      ))}  
    </aside>
    )
}












export default VideoList;