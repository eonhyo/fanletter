import {
  BoxButton,
  Detail,
  DetailBoxButtons,
  DetailIveName,
  DetailMain,
  ImgUserName,
  LetterDetailBox,
  LetterUser,
  MoveHomeButton,
  UserImg,
} from "components/Styled";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function DetailFanletter({ fanLetters, setFanLetters }) {
  const navigaete = useNavigate();
  const location = useLocation();
  const foundData = location.state.item;

  console.log(foundData);

  const [onFix, setOnFix] = useState(true);


  const editButton = () => {
    setOnFix(false);

  };

  const [test, setTest] = useState(foundData.detail);
  const changDetail = (event) => {
    const inputValue = event.target.value;
    setTest(inputValue);
  };


  const addButton = () => {
    if (foundData.detail === test) {
      alert("수정되지않았습니다.");
    } else {
      const addFanLetter = fanLetters.map((item) =>
        item.id === foundData.id ? { ...item, detail: test } : item
      );
      setFanLetters(addFanLetter);
      setOnFix(true);
      navigaete("/");
    }
  };
  // 삭제 버튼
  const deleteButton = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const updatFanletters = fanLetters.filter(
        (item) => item.id !== foundData.id
      );
      setFanLetters(updatFanletters);
      navigaete("/");
    }
  };
  return (
    <>
      <Link to={"/"}>
        <MoveHomeButton>홈</MoveHomeButton>
      </Link>
      <DetailMain>
        <LetterDetailBox>
          <section>
            <LetterUser>
              <ImgUserName>
                <UserImg src={foundData.avatar} alt="이미지" />
                <p>{foundData.name}</p>
              </ImgUserName>
              <time>{new Date(foundData.date).toLocaleString()}</time>
            </LetterUser>
            <DetailIveName>To: {foundData.iveName}</DetailIveName>
            <Detail disabled={onFix} onChange={changDetail}>
              {test}
            </Detail>
          </section>
          <DetailBoxButtons>
            {onFix ? (
              <>
                <BoxButton onClick={editButton}>수정</BoxButton>
                <BoxButton onClick={deleteButton}>삭제</BoxButton>
              </>
            ) : (
              <BoxButton onClick={addButton}>수정완료</BoxButton>
            )}
          </DetailBoxButtons>
        </LetterDetailBox>
      </DetailMain>
    </>
  );
}

export default DetailFanletter;
