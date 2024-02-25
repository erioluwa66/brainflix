
import dateConvertor from '../../Utils';
import ViewIcon from '../../assets/icons/views.svg';
import LikeIcon from '../../assets/icons/likes.svg';
import './VideoDetail.scss';

function VideoDetail({ selected }) {
    return (
        <section className="video-detail">
            <h1 className="video-detail__title">{selected.title}</h1>
            <article className="video-detail__detail">
                <div className="video-detail__subtitle">
                    <h2 className="video-detail__creator">By {selected.channel}</h2>
                    <p className="video-detail__date">{dateConvertor(selected.timestamp)}</p>
                </div>
                <div className="video-detail__stats-wrapper">
                    <img className="video-detail__view-icon" src={ViewIcon} alt="view icon" />
                    <p className="video-detail__view-num">{selected.views}</p>
                    <img className="video-detail__like-icon" src={LikeIcon} alt="like icon" />
                    <p className="video-detail__like-num">{selected.likes}</p>
                </div>
            </article>
            <p className="video-detail__text">{selected.description}</p>
        </section>
    );
}

export default VideoDetail;
