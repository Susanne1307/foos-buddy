import styled from '@emotion/styled';
import check from '../assets/check.svg';

export const FooterButtonContainer = styled.div`
  width: 75px;
  height: 75px;
`;

export const FooterButton = styled.button`
  background: #28afb0;
  border: 1px white solid;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-shadow: 0px 15px 30px white;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background: #1f8e90;
  }
  &:active {
    transform: translateY(1px);
    filter: saturate(150%);
  }
`;

export const SafeButton = styled(FooterButton)`
  background-image: url(${check});
  &:hover {
    background-image: url(${check});
  }
`;

export default FooterButtonContainer;
