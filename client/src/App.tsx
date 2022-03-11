import React, { Fragment } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "./components/Sidebar"
import Main from "./pages/Main";
import About from "./pages/About";
import PreviousPrompts from "./pages/PreviousPrompts";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import "react-slidedown/lib/slidedown.css";
import "./App.css";
import "./css/main.css";

const App = () => {
  return (
    <Fragment>
      <ToastContainer 
        pauseOnFocusLoss={false}
        pauseOnHover={false}
      />
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
    </Fragment>
  );
}

export default App;