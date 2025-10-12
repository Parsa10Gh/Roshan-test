import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Archive from "./components/Archive/Archive";
import NotFound from "./components/Notfound/NotFound";
import Speech from "./components/Speech/Speech";
import Upload from "./components/Upload/Upload";
import LinkTab from "./components/LinkTab/LinkTab";

function App() {
  return (
    <div className="flex h-screen">
      <Routes>
        <Route path="/" element={<Navigate to="/speech" replace />} />

        <Route path="/speech" element={<Home />}>
          <Route index element={<Speech/>} />
          <Route path="upload" element={<Upload/>} />
          <Route path="link" element={<LinkTab/>} />
        </Route>

        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Navbar />
    </div>
  );
}

export default App;
