import styled from "styled-components";
import { Link } from "react-router";

function Profile( { name } ) {
  return (
    <Container>
        <ProfileImage src="/profile.png" alt="Profile" />
        <UserName>{name}</UserName> 
        <Page to ="/account/edit-name">이름 변경</Page>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

const Page = styled(Link)`
  font-size: 1rem;
  color: blue;
  text-decoration: underline;
`;

export default Profile;
