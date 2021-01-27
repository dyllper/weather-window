import Head from 'next/head';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-image: url('/images/${(props) => props.image || 'main'}.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ bgImage, title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledContainer image={bgImage}>{children}</StyledContainer>
    </>
  );
}
