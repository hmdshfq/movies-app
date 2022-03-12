import React from 'react';
import SignIn from './SignInScreen';
import styled from 'styled-components';

const Nav = ({ setAccessToken, userType, setUserType }) => {
  return (
    <Wrapper>
      <div>
        <Logo  href={ window.origin }>Swagger Flix</Logo>
      </div>
      <nav>
        <SignIn setAccessToken={setAccessToken} userType={userType} setUserType={setUserType} />
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
