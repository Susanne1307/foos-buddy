import styled from '@emotion/styled';
import Input from './Input';

const AuthenticationInput = styled(Input)`
  text-align: center;
  background: ${(props) => props.theme.colors.textPrimaryHover};
  color: ${(props) => props.theme.colors.loginFocusText};
  font-size: 22px;
  font-family: 'Montserrat', sans-serif;
  padding: 17px 0px;
  border: 3px ${(props) => props.theme.colors.tertiary} solid;
  border-radius: 30px;
  box-shadow: 0px 15px 30px ${(props) => props.theme.colors.shadow};
  ::placeholder {
    text-align: center;
    color: ${(props) => props.theme.colors.textSecondary};
  }
  &:focus {
    background-color: ${(props) => props.theme.colors.loginFocus};
    color: ${(props) => props.theme.colors.loginFocusText};
  }
`;

export default AuthenticationInput;
