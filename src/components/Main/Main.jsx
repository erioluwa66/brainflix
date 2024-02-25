import { useState } from 'react'; 
import Dataset from '../../data/video-details.json'
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoDetail from '../VideoDetail/VideoDetail';
import Comment from '../Comment/Comment';
import VideoList from '../VideoList/VideoList';
import './Main.scss'

function Main({videoData}) {
  
  const [selected, setSelected] = useState(Dataset[0]);

  const handleClick = (id) => {
    const newSelected = videoData.find(video => video.id === id);
    setSelected(newSelected);
  };

  return (
    <main className="main">
      <section className="main__hero">
        <VideoPlayer videoData={selected} />
      </section>
      <section className="main__body">
        <div className="main__body-left">
          <VideoDetail selected={selected} />
          <Comment selected={selected} />
        </div>
        <div className="main__body-right">
          <VideoList
            videos={videoData}
            selected={selected}
            handleClick={handleClick}
          />
        </div>
      </section>
    </main>
  );
}

export default Main;