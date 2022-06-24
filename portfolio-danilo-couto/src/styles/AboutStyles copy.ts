import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;
  background-color: red;

  > main {
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 100rem;
    gap: 2rem;

    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;
    }
  }
`;

export const ItemCard = styled.div`
  background-color: blue;
  margin: 0 16px;
  padding: 16px;
  width: 40rem;
  height: 10rem;
`;
