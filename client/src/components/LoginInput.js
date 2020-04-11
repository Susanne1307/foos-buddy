import styled from '@emotion/styled';
import Input from '../components/Input';

const LoginInput = styled(Input)`
  text-align: center;
  background: white;
  color: white;
  font-size: 22px;
  padding: 17px 0px;
  margin: 20px 0px;
  border: 3px #5ce0b9 solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  ::placeholder {
    text-align: center;
    color: #b7b7b7;
  }
  &:focus {
    background-color: #ebfff9;
    color: #7c7c7c;
  }
`;

export default LoginInput;
