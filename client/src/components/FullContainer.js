import styled from '@emotion/styled';

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  background: ${(props) => {
    if (props.page === 'start') {
      return `${props.theme.colors.basic}`;
    }
    return `${props.theme.colors.secondary}`;
  }};
`;

export default FullContainer;
