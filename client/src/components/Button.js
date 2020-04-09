import styled from '@emotion/styled';

// Basic styling for all buttons ${(props) => getFontSize(props.size)};
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #3f4859;
  color: #fafafa;
  border: 3px #28afb0 solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  font-size: 26px;
  padding: 10px 20px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #6e7d9a;
  }
  &:active {
    background: #3f4859;
  }
`;

export default Button;
