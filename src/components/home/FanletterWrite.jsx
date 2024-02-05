import { members } from "assets/ivemembers";
import {
  ContentText,
  FillBox,
  FillBoxTexts,
  FillContent,
  NameText,
  RegisterButton,
} from "components/Styled";
import { useState } from "react";

const FanletterWrite = ({ addButton }) => {
  const [userName, setUserName] = useState("");
  const [detail, setDetail] = useState("");
  const [iveMember, setIveMember] = useState("장원영");

  const onChangeName = (event) => {
    const inputValue = event.target.value;
    setUserName(inputValue);
  };
  const onChangeDetail = (event) => {
    const inputValue = event.target.value;
    setDetail(inputValue);
  };
  const onChangeIveName = (event) => {
    const inputValue = event.target.value;
    setIveMember(inputValue);
  };

  return (
    <FillBox>
      <FillBoxTexts>
        <FillContent>닉네임</FillContent>
        <NameText
          type="text"
          placeholder="최대 10글자까지 작성할 수 있습니다."
          value={userName}
          onChange={onChangeName}
        />
      </FillBoxTexts>
      <FillBoxTexts>
        <FillContent>내용</FillContent>
        <ContentText
          type="text"
          placeholder="최대 100자까지만 작성할 수 있습니다."
          value={detail}
          onChange={onChangeDetail}
        />
      </FillBoxTexts>
      <article>
        누구에게 보내실 건가요?
        <select onChange={onChangeIveName} value={iveMember}>
          {members.map((member) => {
            return (
              <option value={member} key={member}>
                {member}
              </option>
            );
          })}
        </select>
      </article>
      <RegisterButton
        onClick={() => {
          addButton({ userName, detail, iveMember });
         setUserName("");
         setDetail("");
        }}
      >
        등록하기
      </RegisterButton>
    </FillBox>
  );
};

export default FanletterWrite;
