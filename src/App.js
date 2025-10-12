import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home"
import Archive from "./components/Archive/Archive"
import  NotFound from "./components/Notfound/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
