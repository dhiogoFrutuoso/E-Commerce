import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  height: 60px;
  background-color: navy;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

interface HeaderLoginButtonProps {
  isLoggedIn: boolean;
}

export const HeaderLoginButton = styled.button<HeaderLoginButtonProps>`
  height: 30px;
  padding: 0 1rem;
  font-size: 0.75rem;
  background-color: ${props => props.isLoggedIn ? 'red' : 'green'};
  color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const HeaderCartButton = styled.button`
  height: 30px;
  padding: 0 1rem;
  font-size: 0.75rem;
  background-color: violet;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    font-size: 0.7rem;
  }
`;
