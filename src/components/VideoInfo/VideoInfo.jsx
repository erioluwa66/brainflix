import dateConvertor from '../../Utils/Utils';
import ViewIcon from '../../assets/icons/views.svg';
import LikeIcon from '../../assets/icons/likes.svg';
import './VideoInfo.scss';

function VideoInfo({ clicked }) {
    return (
        <section className="video-info">
            <h1 className="video-info__title">{clicked.title}</h1>
            <article className="video-info__detail">
                <div className="video-info__subtitle">
                    <h2 className="video-info__author">By {clicked.channel}</h2>
                    <p className="video-info__date">{dateConvertor(clicked.timestamp)}</p>
                </div>
                <div className="video-info__data">  
                    <div className='video-info__data-block'>
                    <img className="video-info__data--icon" src={ViewIcon} alt="eye" />
                    <p className="video-info__data--views">{clicked.views}</p>            
                    </div>
                    <div className='video-info__data-block'>
                    <img className="video-info__data--icon" src={LikeIcon} alt="heart" />
                    <p className="video-info__data--views">{clicked.likes}</p>
                    </div>
                </div>
            </article>
            <p className="video-info__text">{clicked.description}</p>
        </section>
    );
}

export default VideoInfo;
