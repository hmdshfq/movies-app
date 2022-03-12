import React, { useState } from 'react';
import api from '../api/swagger';
import styled from 'styled-components';
import { Dialog, DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

const SignInScreen = ({ setAccessToken, setUserType }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const registeredUser = [
    {
      Username: 'test@bsgroup.eu',
      Password: 'Test12!@',
      Device: {
        PlatformCode: 'WEB',
        Name: '7a6a86e5-356f-4795-8998-305e1b205531',
      },
    },
  ];

  const errors = {
    uname: 'Invalid Username',
    pass: 'Invalid Password',
  };

  const handleSubmit = event => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = registeredUser.find(user => user.Username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.Password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else {
        handleLogin();
      }
    } else {
      // Invalid username
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  const handleLogin = () => {
    const authenticate = async () => {
      try {   
        let response = await api.post('/Authorization/SignIn', registeredUser[0])
        setAccessToken(response.data.AuthorizationToken.Token);
        setUserType('MAIN');
        console.log('Signed in as registered user')
      } catch (error) {
        console.log(error);
      }
    }
    authenticate();
    close();
  };

  // Generate JSX code for error message
  const renderErrorMessage = name =>
    name === errorMessages.name && (
      <ErrorMessage className='error'>{errorMessages.message}</ErrorMessage>
    );

  return (
    <Wrapper>
      <SignInButton onClick={open}>Sign In</SignInButton>
      <DialogWrapper isOpen={showDialog} onDismiss={close}>
        <Form onSubmit={handleSubmit}>
          <InputField>
            <Label>Username </Label>
            <input type='text' name='uname' required />
          </InputField>
          {renderErrorMessage('uname')}
          <InputField>
            <Label>Password </Label>
            <input type='password' name='pass' required />
          </InputField>
          {renderErrorMessage('pass')}
          <Submit type='submit' />
        </Form>
        <CloseButton onClick={close}>X</CloseButton>
      </DialogWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  
`;

const SignInButton = styled.button`
  padding: 10px 20px;
  background: var(--primary-500);
  color: var(--gray-900);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 600;
`;

const DialogWrapper = styled(Dialog)`
  position: absolute;
  inset: 0;
  background: var(--gray-300);
  width: 375px;
  height: min-content;
  margin: auto;
`;

const Form = styled.form``;

const InputField = styled.div`
  display: flex;
  margin: 10px 0;
`;

const Label = styled.label`
  color: var(--gray-900);
  flex: 0 0 10ch;
`;

const ErrorMessage = styled.div`
  text-align: center;
`;

const Submit = styled.input`
  background: var(--primary-500);
  border: none;
  padding: 8px 16px;
  color: var(--gray-900);
  border-radius: var(--border-radius);
  cursor: pointer;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  margin-top: 15px;
  margin-right: 15px;
  font-size: 1.3125rem;
  color: var(--gray-900);
`;

export default SignInScreen;
