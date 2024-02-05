import { Link } from "react-router-dom";
import {
  FanLetterList,
  Fanletter,
  FanletterContent,
  FanletterDetail,
  Profile,
} from "../Styled";

const Fanletters = ({ item }) => {
  return (

    <Link to={`/detail/${item.id}`} state={{ item }}>
      <FanLetterList>
        <Fanletter>
          <Profile src={item.avatar} alt="" />
          <FanletterContent>
            <p>{item.name}</p>
            <p>{new Date(item.date).toLocaleString()}</p>
            <FanletterDetail>{item.detail}</FanletterDetail>
          </FanletterContent>
        </Fanletter>
      </FanLetterList>
    </Link>
  );
};

export default Fanletters;
