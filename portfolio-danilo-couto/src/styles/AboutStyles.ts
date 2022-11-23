import styled from 'styled-components';

export const AboutContainer = styled.section`
  width: 100%;

  .timeline-container {
    /* linha vertical */
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 3rem 0;
  }

  .timeline-container::after {
    background-color: ${({ theme }) => theme.primary};
    content: '';
    position: absolute;
    left: calc(50% - 0.16rem);
    width: 0.25rem;
    height: 100%;
  }

  .timeline-item {
    /* div da esquerda */
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    position: relative;
    margin: 1rem 0;
    width: 50%;

    time {
      /* data */
      color: ${({ theme }) => theme.textLight};
      font-size: 1.2rem;
    }

    h1 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
    }
  }

  .timeline-item:nth-child(odd) {
    /* div da direita*/
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 2rem;
  }

  .timeline-item-content {
    /* conteudo dos blocos da esquerda */
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
    position: relative;
    width: 35rem;
    text-align: right;

    &:hover {
      filter: brightness(1.3);
      transform: translateY(-1rem);
      z-index: 100;
    }
  }

  .timeline-item:nth-child(odd) .timeline-item-content {
    /* conteudo dos blocos da direita */
    text-align: left;
    align-items: flex-start;
  }

  .timeline-item-content::after {
    content: ' ';
    /* setinha dos blocos da esquerda*/
    background: ${({ theme }) => theme.gradient};
    box-shadow: 0.07rem -0.07rem 0.07rem rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -0.44rem;
    top: calc(50% - 0.44rempx);
    transform: rotate(45deg);
    width: 1rem;
    height: 1rem;
  }

  .timeline-item:nth-child(odd) .timeline-item-content::after {
    /* setinha dos blocos da direita*/
    right: auto;
    left: -0.44rem;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
  }

  .timeline-item-content .circle {
    /* bolinhas */
    background-color: ${({ theme }) => theme.background};
    border: 0.25rem solid ${({ theme }) => theme.primary};
    border-radius: 50%;
    position: absolute;
    right: -2.5rem;
    width: 1rem;
    height: 1rem;
    z-index: 100;
  }

  .timeline-item:nth-child(odd) .timeline-item-content .circle {
    /* bolinhas pares */
    right: auto;
    left: -2.5rem;
  }

  @media (max-width: 1000px) {
  }

  @media (max-width: 700px) {
  }
`;
