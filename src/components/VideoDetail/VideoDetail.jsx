import dateConvertor from '../../Utils';
import ViewIcon from '../../assets/icons/views.svg';
import LikeIcon from '../../assets/icons/likes.svg';
import './VideoDetail.scss';

function VideoDetail({ selected }) {
    return (
        <section className="video-info">
            <h1 className="video-info__title"><span className="mobile-only">Tech Trends:</span> {selected.title}</h1>
            <article className="video-info__detail">
                <div className="video-info__subtitle">
                    <h2 className="video-info__author">By {selected.channel}</h2>
                    <p className="video-info__date">{dateConvertor(selected.timestamp)}</p>
                </div>
                <div className="video-info__data">  
                    <img className="video-info__data-icon" src={ViewIcon} alt="eye" />
                    <p className="video-info__data-views">{selected.views}</p>            
                    <img className="video-info__data-icon" src={LikeIcon} alt="heart" />
                    <p className="video-info__data-views">{selected.likes}</p>
                    
                </div>
            </article>
            <p className="video-info__text">{selected.description}</p>
        </section>
    );
}

export default VideoDetail;
