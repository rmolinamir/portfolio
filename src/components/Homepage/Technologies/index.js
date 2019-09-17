// Libraries
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import { Container } from 'components/UI';
import { H3 } from 'components/UI/Text';
import CheckboxIcon from 'components/SVG/Icons/Checkbox';
import SectionCaption from '../SectionCaption';
import List, {
  PROFICIENCY_RECREATIONAL,
  PROFICIENCY_LIMITED_PRODUCTION,
  PROFICIENCY_ADVANCED_PRODUCTION,
  PROFICIENCY_EXPERT,
} from './List';

const proficiencies = [
  { proficiency: PROFICIENCY_RECREATIONAL, name: 'Recreational' },
  { proficiency: PROFICIENCY_LIMITED_PRODUCTION, name: 'Limited Production' },
  { proficiency: PROFICIENCY_ADVANCED_PRODUCTION, name: 'Advanced Production' },
  { proficiency: PROFICIENCY_EXPERT, name: 'Expert' },
];

const technologiesList = [
  {
    key: 'front-end',
    name: 'Front-end',
    list: [
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'Django Browsable Api', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'back-end',
    name: 'Back-end',
    list: [
      { name: 'Django Browsable API', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'JavaScript', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_RECREATIONAL },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
    ]
  },
  {
    key: 'design',
    name: 'Design',
    list: [
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_ADVANCED_PRODUCTION },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'Django Browsable Api', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
  {
    key: 'apis',
    name: 'APIs',
    list: [
      { name: 'JavaScript', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'React.js', proficiency: PROFICIENCY_EXPERT },
      { name: 'Django Browsable Api', proficiency: PROFICIENCY_LIMITED_PRODUCTION },
    ]
  },
];

export default function Technologies() {
  return (
    <Container id="technologies">
      <H3 color="primary"><strong>Technologies</strong></H3>
      <SectionCaption>
        I have used a considerable amount tools & technologies over the different companies and roles I&apos;ve had.
        These tools have helped me perform my responsabilities, build PWAs, native applications & APIs.
      </SectionCaption>
      <StyledCaption>
        <span>Proficiency or expertise:</span>
        {proficiencies.map(({ proficiency, name, }) => (
          <span
            key={name}
            className="caption"
          >
            <span className="checkbox">
              <CheckboxIcon
                className={`${proficiency}-checkbox`}
              />
            </span>
            <span className="item">{name}</span>
          </span>
        ))}
      </StyledCaption>
      <br />
      <GlobalList>
        {technologiesList.map(({ key, name, list }) => (
          <li
            key={key}
          >
            <div className="list-header"><strong>{name}</strong></div>
            <List
              list={list}
            />
          </li>
        ))}
      </GlobalList>
    </Container>
  );
}

const StyledCaption = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
  &, * {
    font-size: 12px;
  }
  .caption {
    display: flex;
    display: inline-flex;
    flex: 0;
    white-space: nowrap;
    .checkbox {
      display: inline-flex;
      align-items: center;
      margin: 0 0.435rem 0 0.735rem;
    }
    .item {
      display: inline-block;
      flex: 1;
    }
  }
  ${({ theme }) => proficiencies.map(({ proficiency }) => css`
    .${proficiency}-checkbox {
      fill: ${theme[proficiency]};
    }
  `)}
`;

const GlobalList = styled.ul`
  column-count: 5;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    column-count: 4;
  }
  @media (max-width: ${({ theme }) => theme.screenSm}) {
    column-count: 3;
  }
  @media (max-width: ${({ theme }) => theme.screenXs}) {
    column-count: 2;
  }
  list-style: none;
  > li {
    padding: 0;
    margin: 0 0 24px;
    break-inside: avoid;
    list-style: none;
    .list-header {
      margin-bottom: 0.235rem;
    }
  }
`;
