// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

// Components
import RoutesWrapper from 'layout/UI/RoutesWrapper';

import Homepage from 'containers/Homepage';

// Icons
import ContactIcon from '@material-ui/icons/Mail';

const links = [
  {
    key: 'contact',
    type: 'button',
    color: 'inherit',
    title: 'Contact',
    caption: 'Say hello, get in touch!',
    icon: <ContactIcon />,
    wrapper: props => (
      // {props.children} will contain the content of the anchor.
      // eslint-disable-next-line
      <a
        {...props}
        role="button"
        href="mailto:rmolinamir@gmail.com"
      />
    )
  }
];

const Routes = props => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <RoutesWrapper
      // Navbar props
      links={links}
      linkComponent={Link}
      logoWrapperProps={{
        to: '/'
      }}
    >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/licenses" render={() => <div>lICENSES</div>} />
      </Switch>
    </RoutesWrapper>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

// const StyledRoutesWrapper = styled.section`
//   display: flex;
//   flex-flow: column;
//   width: 100%;
//   min-height: 100%;
//   animation: fade-in 300ms ease 0ms;

//   @keyframes fade-in {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

export default withRouter(Routes);
