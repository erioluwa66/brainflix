import videos from '../../data/videos.json';



function VideoList({}) {
    return(
        <aside className='video-list'>
        <h2 className='video-list__tittle'>NEXT VIDEOS</h2>
          {videos.map((video) => (
        <div key={video.id}>
            <img src={video.image} alt={video.title}/>
            {video.title}
            {video.channel}
        </div>
      ))}  
    </aside>
    )
}












export default VideoList;