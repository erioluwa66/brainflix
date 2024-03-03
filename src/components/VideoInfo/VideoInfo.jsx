import dateConvertor from '../../Utils/Utils';
import ViewIcon from '../../assets/icons/views.svg';
import LikeIcon from '../../assets/icons/likes.svg';
import './VideoInfo.scss';

function VideoInfo({ selected }) {
    return (
        <section className="video-info">
            <h1 className="video-info__title">{selected.title}</h1>
            <article className="video-info__detail">
                <div className="video-info__subtitle">
                    <h2 className="video-info__author">By {selected.channel}</h2>
                    <p className="video-info__date">{dateConvertor(selected.timestamp)}</p>
                </div>
                <div className="video-info__data">  
                    <div className='video-info__data-block'>
                    <img className="video-info__data--icon" src={ViewIcon} alt="eye" />
                    <p className="video-info__data--views">{selected.views}</p>            
                    </div>
                    <div className='video-info__data-block'>
                    <img className="video-info__data--icon" src={LikeIcon} alt="heart" />
                    <p className="video-info__data--views">{selected.likes}</p>
                    </div>
                </div>
            </article>
            <p className="video-info__text">{selected.description}</p>
        </section>
    );
}

export default VideoInfo;
