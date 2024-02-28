import { useState } from 'react';
import Dataset from './data/video-details.json';
import './App.scss';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main'


function App() {
  const [videoData, setVideoData] = useState(Dataset);
  return (
   <BrowserRouter>
   {/* <Nav />
   <Header update={setVideoData}/> */}
   <Routes>
   {/* <Main videoData={videoData}/> */}
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
