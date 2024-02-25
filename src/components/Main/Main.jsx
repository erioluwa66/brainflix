import React, { useState } from 'react';
import Data from '../../data/video-details.json'; // Import your dataset here
import VideoPlayer from './VideoPlayer'; // Assuming VideoPlayer, VideoDetail, Comment, and VideoList are components in the same directory
import VideoD
import Comment from './Comment';
import VideoList from '../VideoList/VideoList';

function Main() {
  const [videoData, setVideoData] = useState(Data);
  const [selected, setSelected] = useState(Data[0]);

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
