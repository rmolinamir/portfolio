
import PropTypes from 'prop-types';
import React, { lazy, useCallback } from 'react';

/**
 * After the lazy imported component loads, delay the promise to increase smoothness.
 */
const LazyImport = props => {
  const {
    importedComponent,
    resolvedCallback,
    resolvedCallbackDelay,
    delay,
    devDelay,
    shouldRender
  } = props;

  // It will only be fetched once.
  const Component = useCallback(
    lazy(() => Promise.all([
      importedComponent,
      new Promise(resolve => {
        if (resolvedCallback) {
          setTimeout(() => {
            resolvedCallback('It works.');
          }, resolvedCallbackDelay);
        }
        setTimeout(resolve, process.env.NODE_ENV === 'development' ? devDelay : delay);
      })
    ]).then(([moduleExports]) => moduleExports)),
    [],
  );

  return shouldRender ? <Component /> : null;
};

LazyImport.propTypes = {
  importedComponent: PropTypes.instanceOf(Object).isRequired,
  resolvedCallback: PropTypes.func,
  resolvedCallbackDelay: PropTypes.number,
  devDelay: PropTypes.number,
  delay: PropTypes.number,
  shouldRender: PropTypes.bool
};

LazyImport.defaultProps = {
  resolvedCallback: undefined,
  resolvedCallbackDelay: 0,
  devDelay: 1500,
  delay: 1000,
  shouldRender: true
};

export default LazyImport;
