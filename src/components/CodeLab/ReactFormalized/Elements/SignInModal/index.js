// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import {
  Form,
  Input,
} from 'react-formalized';
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const onChangeHandler = formState => {
    // eslint-disable-next-line no-console
    console.log('app onChangeHandler formState', formState);
  };

  const onSubmitHandler = (event, formState) => {
    event.preventDefault();
    // eslint-disable-next-line no-alert
    window.alert(JSON.stringify(formState, null, 3));
  };

  return (
    <>
    <Modal
      open={isOpen}
      closeModal={handleCloseModal}
    >
      <Form
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      >
        <Input
          required
          identifier="email"
          type="email"
          validation={{
            required: true,
            minLength: 3
          }}
          placeholder="Email"
        />
        <Input
          required
          identifier="password"
          type="password"
          validation={{
            required: true,
            minLength: 4
          }}
          placeholder="Password"
        />
        <StyledButton type="submit">
          Sign in
        </StyledButton>
      </Form>
    </Modal>
      <StyledButton onClick={handleOpenModal}>
        Sign in
      </StyledButton>
    </>
  );
}
