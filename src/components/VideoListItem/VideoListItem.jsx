import "./VideoListItem.scss";

function VideoListItem( {video,  handleClick} ) {
    return(
        <article className="video-list" onClick={handleClick}>
          <img className="video-list__image" src={video.image} alt={video.title}/>
          <div className="video-list__container">
            <p className="video-list__title">{video.title}</p>
            <p className="video-list__author">{video.channel}</p>
        </div> 
          
    </article>
    );
}
export default VideoListItem;