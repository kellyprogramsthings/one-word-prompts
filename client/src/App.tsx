import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar"
import Main from "./pages/Main";
import About from "./pages/About";
import PreviousPrompts from "./pages/PreviousPrompts";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {

  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="*" element={<NotFound />} />
          
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/previousPrompts" element={<PreviousPrompts />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}

export default App;