import styled from '@emotion/styled';
import example from '../assets/profile_example.jpg';

const ProfileImage = styled.div`
  width: 28vh;
  height: 28vh;
  border-radius: 50%;
  border: solid 1px ${(props) => props.theme.colors.shadow};
  cursor: pointer;
  position: absolute;
  background-image: url(${example});
  background-size: cover;
`;

export default ProfileImage;
