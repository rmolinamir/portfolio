// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Components
import { Image, Animations } from 'components/UI';

export default function Card(props) {
  const { university, date, degree, location, logo, logoRadius, accomplishments } = props;

  return (
    <>
      <Animations.PopIn>
        <WorkExperience>
          <div className="logo">
            <Image
              src={logo}
              draggable="false"
              style={{
                height: '100%',
                width: '100%',
                borderRadius: logoRadius || '15px',
              }}
            />
          </div>
          <div className="details">
            <SpacedBetween>
              <div><strong>{university}</strong></div>
              <div><strong>{date}</strong></div>
            </SpacedBetween>
            <SpacedBetween>
              <div><i>{degree}</i></div>
              <div><i>{location}</i></div>
            </SpacedBetween>
          </div>
        </WorkExperience>
      </Animations.PopIn>
      <Animations.PopIn
        animationDelayMultiplier={2}
      >
        <List>
          {accomplishments.map((({ caption, description, cite }, index) => (
            <li key={index}>
              <span>{caption}</span>
              <Animations.PopIn
                animationDelayMultiplier={3}
              >
                <StyledBlockquote cite={cite}>
                  {description}
                </StyledBlockquote>
              </Animations.PopIn>
            </li>
          )))}
        </List>
      </Animations.PopIn>
    </>
  );
}

Card.propTypes = {
  university: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  accomplishments: PropTypes.instanceOf(Array).isRequired,
  logoRadius: PropTypes.string,
};

Card.defaultProps = {
  logoRadius: undefined,
};

const WorkExperience = styled.div`
  display: flex;
  margin: 8px 0px;
  .logo {
    width: 45px;
    height: 45px;
    margin-right: 1ch;
    @media (max-width: ${({ theme }) => theme.screenSm}) {
    margin-right: 2ch;
    }
  }
  .details {
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      > div {
        flex-flow: column;
        align-items: flex-start;
      }
    }
    flex: 1;
  }
`;

const SpacedBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const List = styled.ul`
  &&& {
    list-style: none;
    li {
      margin-left: 1rem;
      animation: ${fadeIn} ease 300ms;
    }
    li::before {
      content: "•";
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
      display: inline-block;
      width: 1rem;
      margin-left: -1rem;
    }
  }
`;

const StyledBlockquote = styled.blockquote`
  && {
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 24px;
    padding-left: 16px;
    border-left: 3px solid ${({ theme }) => theme.primary};
    background-color: #FAFAFA;
  }
`;
