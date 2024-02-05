import GlobalStyle from "components/GlobalStyle";
import React, { useState } from "react";
import { Main} from "../Styled";
import Fanletters from "./Fanletters";
import IveMembers from "./IveMembers";
import FanletterWrite from "./FanletterWrite";

function FanletterMain({ fanLetters, setFanLetters }) {
  const addButton = ({ userName, detail, iveMember }) => {
    const newLetter = {
      date: Date(),
      name: userName,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaW3SfW7ZP7a7QSiL5_hliZmyZukjKufZQwg&usqp=CAU",
      detail,
      iveName: iveMember,
      id: crypto.randomUUID(),
    };
    if (
      newLetter.name.length <= 0 ||
      newLetter.name.length > 10 ||
      newLetter.detail.length <= 0 ||
      newLetter.detail.length > 100
    ) {
      alert(
        "닉네임, 내용이 형식에 맞지 않습니다.(닉네임 최대 10자 / 내용 최대 100자)"
      );
    } else {
      setFanLetters([...fanLetters, newLetter]);
    }
  };


  const [selectedMember, setSelectedMember] = useState("");

  const selectMembers = (event) => {
    const inputValue = event.target.value;
    setSelectedMember(inputValue);
  };

  const memberFilter = () => {
    const filteringMember = fanLetters.filter(
      (item) => selectedMember === "" || item.iveName === selectedMember
    );
    if (filteringMember.length > 0) {
      return filteringMember.map((item) => (
        <Fanletters key={item.id} item={item} />
      ));
    } else {
      return (
      <></>
      );
    }
  };

  return (
    <>
      <GlobalStyle />
      <Main>

        <IveMembers
          selectMembers={selectMembers}
          selectedMember={selectedMember}
        />

        <FanletterWrite addButton={addButton} />
        <>

          {memberFilter()}
        </>
      </Main>
    </>
  );
}

export default FanletterMain;
