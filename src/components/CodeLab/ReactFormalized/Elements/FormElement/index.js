
import Button from '@material-ui/core/Button';
import { Form, Input, Select } from 'react-formalized';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.primary};
  }
`;

const StyledDiv = styled.div`
  padding: 16px 0px 9px;
`;

export default function FormElements() {
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
      <StyledDiv>Form:</StyledDiv>
      <Form
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
      >
        <Input
          identifier="username"
          required
          validation={{
            minLength: 3
          }}
          placeholder="Username"
        />
        <Input
          identifier="email"
          required
          type="email"
          validation={{
            minLength: 3
          }}
          placeholder="Email"
        />
        <Input
          identifier="password"
          required
          type="password"
          validation={{
            required: true,
            minLength: 4,
            maxLength: 10
          }}
          placeholder="Password"
        />
        <Select
          identifier="select"
          required
          placeholder="Select (Required, has validity)"
          datalist={[
            {
              value: '',
              displayValue: '(Clear)'
            },
            'Option A',
            {
              value: '35193BB0sk2F',
              displayValue: 'Option B (custom value)'
            }
          ]}
        />
        <Input
          identifier="first_name"
          placeholder="First Name (Optional)"
        />
        <Select
          identifier="select_optional"
          placeholder="Select (Optional)"
          datalist={[
            {
              value: '',
              displayValue: '(Clear)'
            },
            'Option A',
            {
              value: '35193BB0sk2F',
              displayValue: 'Option B (custom value)'
            }
          ]}
        />
        <StyledButton type="submit">
          Sign up
        </StyledButton>
      </Form>
    </>
  );
}
