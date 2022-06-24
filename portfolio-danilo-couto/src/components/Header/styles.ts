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
    gap: 2rem;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;

    span {
      font-size: 28px;
    }

    label {
      position: relative;
      display: inline-block;
      height: 34px;
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
      height: 26px;
      left: 4px;
      position: absolute;
      transition: 0.4s;
      width: 26px;
    }

    input:checked + .slider:before {
      transform: translateX(26px);
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
