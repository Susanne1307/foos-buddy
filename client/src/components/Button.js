import styled from '@emotion/styled';

const Button = styled.button`
  text-align: center;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 26px;
  padding: 15px 20px;
  margin: 20px 0px;
  border: 3px ${(props) => props.theme.colors.primary} solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px grey;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: ${(props) => props.theme.colors.secondaryHover};
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

export default Button;
