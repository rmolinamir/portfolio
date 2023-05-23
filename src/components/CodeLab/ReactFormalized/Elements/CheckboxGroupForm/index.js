import Button from '@material-ui/core/Button';
import { Checkbox, CheckboxGroup, Form } from 'react-formalized';
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

export default function CheckboxGroupForm() {
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
    <Form
        onChange={onChangeHandler}
        onSubmit={onSubmitHandler}
    >
        <StyledDiv>Which ice cream flavours do you like?</StyledDiv>
        <CheckboxGroup
          identifier="favoritePet"
          type="bubble"
          required
          name="favorite-ice-creams"
        >
          <Checkbox
            value="FLAV_01"
            label="Chocolate"
          />
          <Checkbox
            value="FLAV_02"
            label="Vanilla"
          />
          <Checkbox
            value="FLAV_03"
            label="Strawberry"
          />
        </CheckboxGroup>
        <StyledButton type="submit">
          Sign up
        </StyledButton>
    </Form>
  );
}
