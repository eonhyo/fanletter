import React from "react";
import styled from "styled-components";

const StHeader = styled.header`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("https://cdn.sisamagazine.co.kr/news/photo/202210/467688_474264_1544.jpg");
`;

const StHeaderH1 = styled.h1`
  font-size: 50px;
  color: #ff74c5;
  font-weight: bold;
  text-shadow: -1px 0px white, 0px 1px white, 1px 0px white, 0px -1px white;
`;

function Header() {
  return (
    <StHeader>
      <StHeaderH1>아이브 팬레터 콜렉션</StHeaderH1>
    </StHeader>
  );
}

export default Header;
