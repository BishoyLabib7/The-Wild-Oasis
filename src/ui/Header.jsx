import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import MobileMenuIcon from "./MobileMenuIcon";
import { useMobileSidebar } from "../context/MobileSidebarContext";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.2rem 2.4rem;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    gap: 1.2rem;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

function Header() {
  const { openMobileSidebar } = useMobileSidebar();

  return (
    <StyledHeader>
      <MobileMenuIcon onClick={openMobileSidebar} />
      <HeaderRight>
        <UserAvatar />
        <HeaderMenu />
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;
