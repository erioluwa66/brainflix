import VideoListItem from '../VideoListItem/VideoListItem';
import './VideoList.scss'


function VideoList( {videoData, selected, handleClick} ) {
    return(
        <aside className="video-list">
        <h2 className="video-list__tittle">NEXT VIDEOS</h2>
          {videoData.map((video) => {
            if(video.id !== selected.id){
              return (
                <VideoListItem
                  key={video.id}
                  videoData={video}
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

// function VideoList({}) {
//     return(
//         <aside className='video-list'>
//         <h2 className='video-list__tittle'>NEXT VIDEOS</h2>
//           {videos.map((video) => (
//         <div key={video.id}>
//             <img src={video.image} alt={video.title}/>
//             {video.title}
//             {video.channel}
//         </div>
//       ))}  
//     </aside>
//     )
// }