import FanletterMain from "components/home/FanletterMain";
import Header from "components/home/Header";
import React from "react";

function Home({ fanLetters, setFanLetters }) {
  return (
    <>
      <Header />
      <FanletterMain fanLetters={fanLetters} setFanLetters={setFanLetters} />
    </>
  );
}

export default Home;
