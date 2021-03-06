import styled from '@emotion/styled';

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  background-image: url(${(props) => props.src});
  background-size: cover;

  @media only screen and (min-device-width: 480px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (min-device-width: 768px) {
    max-width: 230px;
    max-height: 230px;
  }
`;

export default ProfileImage;
