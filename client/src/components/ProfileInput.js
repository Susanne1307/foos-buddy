import styled from '@emotion/styled';
import Input from '../components/Input';

const ProfileInput = styled(Input)`
  text-align: left;
  background: none;
  color: ${(props) => props.theme.colors.textPrimary};
  border: none;
  border-bottom: 3px ${(props) => props.theme.colors.quaternary} solid;
  font-size: 18px;
  padding: 0px 0px 10px 10px;
  ::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
  &:focus {
    background-color: #4d5665;
  }
`;

export default ProfileInput;
