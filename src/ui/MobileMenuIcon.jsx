import styled from "styled-components";
import { HiBars3 } from "react-icons/hi2";

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.8rem;
  border-radius: var(--border-radius-sm);
  color: var(--color-grey-600);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
    color: var(--color-grey-700);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

function MobileMenuIcon({ onClick }) {
  return (
    <MobileMenuButton onClick={onClick} aria-label="Open menu">
      <HiBars3 />
    </MobileMenuButton>
  );
}

export default MobileMenuIcon;
