import styled from '@emotion/styled';

const FullContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  overflow: scroll;
  background: ${(props) => {
    if (props.page === 'start') {
      return `none`;
    }
    return `${props.theme.colors.background}`;
  }};
`;

export default FullContainer;
