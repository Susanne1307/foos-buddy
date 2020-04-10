import styled from '@emotion/styled';

const Input = styled.input`
  outline: none;
  cursor: pointer;
`;

export const LoginInput = styled(Input)`
  text-align: center;
  width: 274px;
  height: 60px;
  background: white;
  color: white;
  border: 3px #5ce0b9 solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  font-size: 22px;
  padding: 0px 0px;
  ::-webkit-input-placeholder {
    text-align: center;
    color: #b7b7b7;
  }
  &:focus {
    background-color: #ebfff9;
    color: #7c7c7c;
  }
`;

export default Input;
