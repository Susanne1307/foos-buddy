import styled from '@emotion/styled';
import Input from '../components/Input';

const ProfileInput = styled(Input)`
  text-align: left;
  background: none;
  color: #fafafa;
  border: none;
  border-bottom: 3px #ce1c57 solid;
  font-size: 18px;
  padding: 0px 0px 10px 10px;
  ::-webkit-input-placeholder {
    color: #c7c7c7;
  }
  &:focus {
    background-color: #4d5665;
  }
`;

export default ProfileInput;
