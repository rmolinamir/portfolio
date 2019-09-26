// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import {
  Checkbox,
  CheckboxGroup,
} from 'react-formalized';

const StyledDiv = styled.div`
  padding: 16px 0px 9px;
`;

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
