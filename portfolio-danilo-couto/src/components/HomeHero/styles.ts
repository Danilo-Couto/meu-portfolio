import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin-top: 5rem;
  border-bottom: 3px solid ${({ theme }) => theme.primary};

  > div {
    /* flex: 4; */
  }

  > div > img {
    /* margin-top: -5rem; */
    object-fit: cover;
    height: 28rem;
    width: 70rem;
  }

  > div > p {
    color: white;
  }

  button {
    margin: 0.3rem;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 4rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;
