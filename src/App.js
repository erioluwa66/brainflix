import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <Route path="/video/:id" element={<HomePage />} />
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
