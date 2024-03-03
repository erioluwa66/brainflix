import "./VideoListItem.scss";

function VideoListItem( {videoData} ) {
    return(
        <article className="video-list__item">
          <img className="video-list__image" src={videoData.image} alt={videoData.title}/>
          <div className="video-list__container">
            <p className="video-list__name">{videoData.title}</p>
            <p className="video-list__author-name">{videoData.channel}</p>
        </div> 
          
    </article>
    );
}
export default VideoListItem;