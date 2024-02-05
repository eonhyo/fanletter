import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import DetailFanletter from "pages/DetailFanletter";
import { useState } from "react";

const Router = () => {
  const [fanLetters, setFanLetters] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home fanLetters={fanLetters} setFanLetters={setFanLetters} />} />
        <Route path="detail/:id" element={<DetailFanletter fanLetters={fanLetters} setFanLetters={setFanLetters} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
