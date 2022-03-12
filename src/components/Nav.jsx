import React from 'react';
import styled from 'styled-components';

const Nav = ({ token }) => {
  return (
    <Wrapper>
      <div>
        <Logo  href={ window.origin }>Swagger Flix</Logo>
      </div>
      <nav>
        <SignIn token={token} />
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  color: var(--primary-500);
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
`;



export default Nav;
