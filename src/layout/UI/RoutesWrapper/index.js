import { Footer, Navbar, NavbarProvider } from 'layout/UI';
import PropTypes from 'prop-types';

function RoutesWrapper(props) {
  const { children, ...rest } = props;

  return (
    <NavbarProvider>
      <Navbar {...rest} />
      {children}
      <Footer />
    </NavbarProvider>
  );
}

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default RoutesWrapper;
