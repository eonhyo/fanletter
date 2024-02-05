import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import DetailFanletter from "pages/DetailFanletter";
import { useState } from "react";
import { FanLettersContext } from "context/FanLettersContext";

const Router = () => {
  const [fanLetters, setFanLetters] = useState([]);
  return (
    <BrowserRouter>
      <FanLettersContext.Provider
        value={{
          fanLetters,
          setFanLetters
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<DetailFanletter />} />
        </Routes>
      </FanLettersContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
