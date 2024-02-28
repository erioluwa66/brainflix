import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import Header from "./components/Header/Header";



function App() {
  return (
   <BrowserRouter>
      <Header/>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/upload" element={<UploadPage  />}  />
      <Route path="/:id" element={<HomePage />} />
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
