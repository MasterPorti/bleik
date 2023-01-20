import { useState } from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default App;
