import styled from '@emotion/styled';

const FullContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: scroll;
  background: ${(props) => {
    if (props.page === 'start') {
      return `none`;
    }
    return `${props.theme.colors.secondary}`;
  }};
`;

export default FullContainer;
