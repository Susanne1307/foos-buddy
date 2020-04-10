import styled from '@emotion/styled';

const Button = styled.button`
  text-align: center;
  background: #3f4859;
  color: #fafafa;
  font-size: 26px;
  padding: 15px 20px;
  margin: 20px 0px;
  border: 3px #28afb0 solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #293141;
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

export default Button;
