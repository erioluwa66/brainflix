import VideoListItem from '../VideoListItem/VideoListItem';
import './VideoList.scss'


function VideoList( {videos, selected, handleClick} ) {
    return(    
       <aside className="video-list">   
        <h2 className="video-list__tittle">NEXT VIDEOS</h2>
          {videos.map((video) => {
            if(video.id !== selected.id){
              return (
                <VideoListItem
                  key={video.id}
                  video={video}
                  handleClick={() => handleClick(video.id)}
                  />
              );
            } else {
              return null
            }
          
        })}  
    </aside>
    );
}


export default VideoList;

