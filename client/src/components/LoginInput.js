import styled from '@emotion/styled';

const LoginInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: white;
  color: white;
  border: 3px #5ce0b9 solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  font-size: 22px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  ::-webkit-input-placeholder {
    text-align: center;
    color: #b7b7b7;
  }
  &:focus {
    background-color: #ebfff9;
    color: #7c7c7c;
  }
`;

export default LoginInput;
