// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// Components
import Collapse from '@material-ui/core/Collapse';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Image } from 'components/UI';

export default function Card(props) {
  const { company, date, role, location, logo, importantResponsabilities, responsabilities } = props;
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <>
      <WorkExperience>
        <div className="logo">
          <Image
            src={logo}
          />
        </div>
        <div className="details">
          <SpacedBetween>
            <div><strong>{company}</strong></div>
            <div><strong>{date}</strong></div>
          </SpacedBetween>
          <SpacedBetween>
            <div><i>{role}</i></div>
            <div><i>{location}</i></div>
          </SpacedBetween>
        </div>
      </WorkExperience>
      <List>
        {importantResponsabilities.map((responsability, index) => <li key={index}>{responsability}</li>)}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          {responsabilities.map((responsability, index) => <li key={index}>{responsability}</li>)}
        </Collapse>
      </List>
      <CardActions
        disableSpacing
        style={{
          padding: 0,
          margin: '4px 0 0'
        }}
      >
        <StyledIconButton
          onClick={handleExpandClick}
          aria-label="see more"
          aria-expanded={expanded}
        >
          {expanded ? 'Collapse' : 'See more'}
          <ExpandMoreIcon
            className={`expand-button ${expanded ? 'expanded' : 'collapsed'}`}
          />
        </StyledIconButton>
      </CardActions>
    </>
  );
}

Card.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  importantResponsabilities: PropTypes.instanceOf(Array).isRequired,
  responsabilities: PropTypes.instanceOf(Array).isRequired,
};

const WorkExperience = styled.div`
  display: flex;
  margin: 8px 0px;
  .logo {
    width: 45px;
    height: 45px;
    margin-right: 1ch;
  }
  .details {
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

const StyledIconButton = styled(IconButton)`
  &&& {
    min-width: 120px;
    padding: 8px;
    padding-right: 0;
    border-radius: 8px;
    .MuiIconButton-label {
      color: ${({ theme }) => theme.primary};
      justify-content: space-between;
    }
    .expand-button {
      transform-origin: center;
      transition: transform ease 300ms;
      margin-right: 0.5rem;
      &.collapsed {
        transform: rotate(0deg);
      }
      &.expanded {
        transform: rotate(180deg);
      }
    }
  }
`;
