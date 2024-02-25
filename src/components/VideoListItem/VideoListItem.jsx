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

// function VideoNavItem({video, isActive, updateActiveVideo }) {
//     let className = "Video-nav-item";
//     if (isActive) {
//         className += "video-nav-item--selected";
//     }
// }
// const handleClick = () => {
//     updateActiveVideo(video.id);
// }

// return (
//     <li onClick={handleClick} className={className}>
//         <img className="video-nav-item__image" src={video.image} alt={video.tittle} /> {video.tittle} {video.channel}
//     </li>
// )
