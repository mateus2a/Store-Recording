import styled from 'styled-components'

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue)
  }
  &:focus {
    outline: none; 
  }
`;

export const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize!important;
    
  }
`;