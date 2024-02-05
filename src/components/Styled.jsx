import styled from "styled-components";

export const Main = styled.main`
  flex-direction: column;
`;

export const MemberNames = styled.section`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #ccd1cc;
  margin: 10px 0;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
`;

export const NameButton = styled.button`
  width: 100px;
  padding: 5px;
  background-color: ${(props) => (props.selected ? "pink" : "black")};
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: pink;
  }
`;

export const FillBox = styled.section`
  width: 600px;
  background-color: #ccd1cc;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FillBoxTexts = styled.article`
  display: flex;
`;

export const FillContent = styled.p`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameText = styled.input`
  width: 100%;
  padding: 5px 10px;
`;

export const ContentText = styled.input`
  height: 80px;
  width: 100%;
  padding: 5px 10px;
`;

export const RegisterButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  height: 30px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const FanLetterList = styled.section`
  width: 600px;
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Profile = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 100%;
`;

export const Fanletter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
  padding: 10px;
  color: white;
`;

export const FanletterContent = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const FanletterDetail = styled.p`
  width: 450px;
  background-color: gray;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DetailMain = styled.main`
  margin-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoveHomeButton = styled.button`
  position: absolute;
  left: 30px;
  background-color: black;
  color: white;
  width: 100px;
  height: 50px;
  border-color: aliceblue;
  font-size: 15px;
  cursor: pointer;
`;

export const LetterDetailBox = styled.div`
  width: 800px;
  min-height: 500px;
  padding: 16px;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const LetterUser = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const ImgUserName = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font: bold;
`;

export const DetailIveName = styled.p`
  padding-top: 20px;
  font-size: 25px;
`;

export const Detail = styled.textarea`
  width: 100%;
  height: 300px;
  background-color: black;
  font-size: 20px;
  line-height: 40px;
  border-radius: 10px;
  margin: 20px 0;
  color: white;
`;

export const DetailBoxButtons = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

export const BoxButton = styled.button`
  background-color: black;
  color: white;
  font-size: 25px;
  padding: 5px 10px;
  cursor: pointer; 
`;

