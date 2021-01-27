import styled from 'styled-components';

const StyledContainer = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: var(--color-glass);
  backdrop-filter: blur(2rem);
  display: flex;
  flex-direction: ${(props) => props.flexDir};
  align-items: center;
  justify-content: space-between;
  border-radius: 2.5rem;
  padding: 1rem 0.8rem;
`;

export default function GlassPanel({ height, width, flexDir, children }) {
  return (
    <StyledContainer height={height} width={width} flexDir={flexDir}>
      {children}
    </StyledContainer>
  );
}
