import Home from "./pages/Home";
import React,{useState} from "react";
import {Routes,Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Detail from "./pages/Detail";
import AddEditBlog from "./pages/AddEditBlog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./style.scss";
import "./media-query.css";
import Header from "./Components/Header";
import Auth from "./pages/Auth";
function App() {
    const [active,setActive]=useState("home");
  return (
    <div className="App">
        <Header setActive={setActive} active={active}/>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<AddEditBlog/>}/>
        <Route path="/update/:id" element={<AddEditBlog/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/auth" element={<Auth/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
