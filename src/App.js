import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
