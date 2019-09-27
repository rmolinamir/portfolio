export const inputElements = () => `// Libraries
import React from 'react';

// Components
import {
  Input,
} from 'react-formalized';

export default function InputElements() {
  return (
    <>
      {/* Default input */}
      <Input
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Username"
      />
      {/* Email input */}
      <Input
        type="email"
        validation={{
          minLength: 3
        }}
        placeholder="Email"
      />
      {/* Password input */}
      <Input
        type="password"
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Password"
      />
      {/* Password input with show/hide password toggle */}
      <Input
        passwordHandler
        type="password"
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        valueType="Password"
        placeholder="Password (with a show/hide toggle)"
      />
      {/* Text area inputs with max character lengths */}
      <Input
        type="textarea"
        placeholder="TextArea"
        elementConfig={{
          maxLength: 150
        }}
      />
      <Input
        type="textarea"
        placeholder="TextArea (2000 characters limit)"
        elementConfig={{
          maxLength: 2000
        }}
      />
      {/* Disabled text area inputs */}
      <Input
        disabled
        validation={{
          required: true,
          minLength: 4,
          maxLength: 10
        }}
        placeholder="Disabled"
      />
      <Input
        disabled
        type="textarea"
        placeholder="TextArea (Disabled)"
        elementConfig={{
          maxLength: 150
        }}
      />
    </>
  );
}
`;

export const rangeElement = () => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Range,
} from 'react-formalized';

const StyledIndicatorRange = styled(({ className, ...rest }) => <Range indicatorClassName={className} {...rest} />)\`
  text-align: center;
  width: 40px;
  margin: 12px;
  font-weight: bold;
\`;

export default function RangeElement() {
  return (
    <>
      {/* Default range input */}
      <Range
        minValue="100"
        maxValue="350"
      />
      {/*
        This element has uneven steps, but the element will calculate
        all of the possible steps regardless.
      */}
      <Range
        step={65}
        minValue="125"
        maxValue="350"
      />
      {/* Range inputs with a styled indicator */}
      <StyledIndicatorRange
        value="325"
        minValue="200"
        maxValue="350"
      />
      <StyledIndicatorRange
        step={25}
        value="99"
      />
    </>
  );
}
`;

export const selectElement = () => `// Libraries
import React from 'react';

// Components
import {
  Select,
} from 'react-formalized';

export default function SelectElement() {
  return (
    <>
      {/* Select input with a complex datalist */}
      <Select
        placeholder="Select"
        datalist={[
          'Option A',
          {
            value: '35193BB0sk2F',
            displayValue: 'Option B (custom value)'
          },
          'Option C',
          'Option D',
          {
            value: '192aaa3349130',
            displayValue: 'Option F (custom value)'
          },
        ]}
      />
      {/* Disabled Select input */}
      <Select
        disabled
        placeholder="Select (Disabled)"
        datalist={[
          'Option A',
          'Obtion B',
        ]}
      />
      {/* Required value Select input */}
      <Select
        required
        placeholder="Select (Required, has validity)"
        datalist={[
          {
            value: '',
            displayValue: '(Clear)'
          },
          'Option A',
          'Obtion B',
        ]}
      />
    </>
  );
}
`;

export const numericElement = () => `// Libraries
import React from 'react';

// Components
import {
  Numeric,
} from 'react-formalized';

export default function NumericElement() {
  return (
    <>
      {/* Default numeric elements */}
      <Numeric />
      <Numeric value={50} />
      <Numeric shouldNotType value={5} />
    </>
  );
}
`;

export const checkboxElements = () => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Checkbox,
  CheckboxGroup,
} from 'react-formalized';

const StyledDiv = styled.div\`
  padding: 16px 0px 9px;
\`;

export default function CheckboxElements() {
  return (
    <>
      {/* Default numeric elements */}
      <StyledDiv>Checkboxes:</StyledDiv>
      <Checkbox
        checked
        label="Checkbox A (checked)"
      />
      <Checkbox label="Checkbox B" />
      <Checkbox
        multiple
        checked
        type="radio"
        label="Checkbox C, radio as checkbox."
      />
      <Checkbox
        disabled
        label="Checkbox D (disabled)"
      />
      <StyledDiv>Radio inputs:</StyledDiv>
      <Checkbox
        checked
        type="radio"
        label="Radio A"
      />
      <Checkbox
        disabled
        single
        type="radio"
        label="Radio B (disabled)"
      />
      <Checkbox
        type="radio"
        label="Radio C"
      />
      <Checkbox
        type="radio"
        label="Radio D"
      />
      <StyledDiv>Inside a checkbox group:</StyledDiv>
      <CheckboxGroup name="checkbox-group">
        <Checkbox
          disabled
          type="radio"
          label="Radio E (disabled)"
        />
        <Checkbox
          type="radio"
          label="Radio F"
        />
        <Checkbox
          type="radio"
          label="Radio G"
        />
      </CheckboxGroup>
      <StyledDiv>Bubbles as checkboxes:</StyledDiv>
      <Checkbox
        type="bubble"
        label="Bubble A"
      />
      <Checkbox
        checked
        type="bubble"
        label="Bubble B"
      />
      <Checkbox
        type="bubble"
        label="Bubble C"
      />
      <StyledDiv>Bubbles as radio inputs:</StyledDiv>
      <CheckboxGroup type="bubble" single name="bubble-group">
        <Checkbox label="Bubble D" />
        <Checkbox label="Bubble F" />
        <Checkbox label="Bubble G" />
      </CheckboxGroup>
    </>
  );
}
`;

export const formElement = theme => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Form,
  Input,
  Select,
} from 'react-formalized';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledDiv = styled.div\`
  padding: 16px 0px 9px;
\`;

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
`;

export const checkboxGroupForm = theme => `// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Form,
  Checkbox,
  CheckboxGroup,
} from 'react-formalized';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

const StyledDiv = styled.div\`
  padding: 16px 0px 9px;
\`;

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
    <>
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
    </>
  );
}
`;

export const signInModal = theme => `// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import {
  Form,
  Input,
} from 'react-formalized';
import Modal from 'react-png-modal';
import Button from '@material-ui/core/Button';

const StyledButton = styled(Button)\`
  &&& {
    display: block;
    width: 100%;
    padding: 12px 18px;
    color: ${theme.whiteColor};
    background-color: ${theme.primary};
  }
\`;

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
`;
