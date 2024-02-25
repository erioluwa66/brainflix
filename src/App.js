import { useState } from 'react';
import Dataset from './data/video-details.json';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main'


function App() {
  const [videoData, setVideoData] = useState(Dataset);
  return (
   <>
   <Header update={setVideoData}/>
   <Main videoData={videoData}/>
   </>
    
  );
}

export default App;
