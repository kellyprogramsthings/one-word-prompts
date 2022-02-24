import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;