import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  ul {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1px;

    span {
      font-size: 16px;
    }

    label {
      position: relative;
      display: inline-block;
      height: 24px;
      width: 60px;

      input {
        display: none;
      }
    }

    .slider {
      background-color: ${({ theme }) => theme.backgroundLight};
      position: absolute;
      cursor: pointer;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      transition: 0.2s;
    }

    .slider:before {
      background-color: ${({ theme }) => theme.primary};
      bottom: 4px;
      content: '';
      height: 16px;
      width: 16px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
    }

    input:checked + .slider:before {
      transform: translateX(36px);
    }

    input:checked + .slider {
      background-color: ${({ theme }) => theme.inputBackground};
    }

    .slider.round {
      border-radius: 34px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
  }

  @media (max-width: 410px) {
    height: 100%;
    width: 90%;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(0.2, props.theme.textHighlight)};
    }
  }
`;
