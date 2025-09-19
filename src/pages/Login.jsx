import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 40rem;
    gap: 2.4rem;
    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    gap: 2rem;
    padding: 1.2rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
