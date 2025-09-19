import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { useMobileSidebar } from "../context/MobileSidebarContext";
import { HiXMark } from "react-icons/hi2";

const SidebarContainer = styled.div`
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    display: ${(props) => (props.$isOpen ? "block" : "none")};
  }

  @media (min-width: 901px) {
    display: none;
  }
`;

const Overlay = styled.div`
  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

const StyledMobileSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 26rem;
    height: 100vh;
    z-index: 1001;
    transform: ${(props) =>
      props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.3s ease-in-out;
    border-right: 1px solid var(--color-grey-100);
    box-shadow: var(--shadow-lg);
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

 
`;

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
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
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

function MobileSidebar() {
  const { isMobileSidebarOpen, closeMobileSidebar } = useMobileSidebar();

  return (
    <SidebarContainer $isOpen={isMobileSidebarOpen}>
      <Overlay onClick={closeMobileSidebar} />
      <StyledMobileSidebar $isOpen={isMobileSidebarOpen}>
        <CloseButton onClick={closeMobileSidebar} aria-label="Close menu">
          <HiXMark />
        </CloseButton>
        <Logo />
        <MainNav />
      </StyledMobileSidebar>
    </SidebarContainer>
  );
}

export default MobileSidebar;
