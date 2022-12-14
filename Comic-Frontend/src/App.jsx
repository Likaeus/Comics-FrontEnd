import "./App.css";
import { Route, Routes } from "react-router-dom";
import ComicList from "./Components/comic-list";
import ComicDetails from "./Components/comic-details";
import Navbar from "./Components/nav-bar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComicList />} />
      <Route path="/comicDetails/:id" element={<ComicDetails />} />
    </Routes>
  );
}

export default App;
