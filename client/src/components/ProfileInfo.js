import styled from '@emotion/styled';

export const ProfileInfo = styled.p`
  text-align: left;
  background: none;
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  border-bottom: 3px ${(props) => props.theme.colors.tertiary} solid;
  font-size: 18px;
  padding: 0px 0px 10px 10px;
`;

export default ProfileInfo;
