import './BokehBackground.css';

import PropTypes from 'prop-types';
import getRandomColor from 'utils/getRandomColor';

const bokehSizes = [
  5.0584339767,
  9.9476437847,
  9.9280821187,
  12.9354933279,
  13.0438930631,
  7.2284753955,
  8.7301327174,
  14.2688250746,
  7.6739022424,
  5.357814429
];

/**
 * Based on:
 * **`Bokeh effect (CSS)](https://codepen.io/Mamboleoo/pen/BxMQYQ)`**
 * **`A PEN BY Louis Hoebregts](https://codepen.io/Mamboleoo/)`**
 */
export default function BokehBackground(props) {
  const {
    className,
    backgroundColor,
    settings,
    children,
  } = props;

  const styles = {
    backgroundSize: undefined,
    backgroundColor: undefined,
    overlayOpacity: undefined,
    animationDuration: undefined,
    relativeSize: false,
    randomColor: false,
    randomDelay: false,
    sizeToBallRatio: 1.4,
    pastelIndex: 2.5,
    ballOpacity: 1,
    ...settings
  };

  const bokehSpans = bokehSizes.map((size, index) => (
    <span
      key={size}
      // CSS Vars, faster performance than styled-components for this particular case.
      style={{
        [`--ball-${index + 1}-size`]: styles.relativeSize && `${(styles.backgroundSize * (size / 100))}px`,
        [`--ball-${index + 1}-color`]: styles.randomColor && getRandomColor(styles.pastelIndex),
        [`--ball-${index + 1}-animation-duration`]: styles.animationDuration && (
          `${((styles.animationDuration / 20) * Math.random() * 10 + styles.animationDuration).toFixed(2)}s`
        ),
        [`--ball-${index + 1}-animation-delay`]: styles.randomDelay && `${((Math.random() * -2) * 10).toFixed(2)}s`,
      }}
    />
  ));

  const bokehClasses = ['rm-bokeh'];
  if (className) bokehClasses.push(className);

  return (
    <div className={bokehClasses.join(' ')}>
      <div
      // CSS Vars, faster performance than styled-components for this particular case.
        style={{
          '--background-size': styles.backgroundSize && `${styles.backgroundSize}px`,
          '--background-color': backgroundColor || styles.backgroundColor,
          '--overlay-opacity': styles.overlayOpacity,
          '--animation-duration': `${styles.animationDuration}s`,
          '--ball-size': styles.backgroundSize && `${styles.backgroundSize * (styles.sizeToBallRatio)}px`,
          '--ball-opacity': styles.ballOpacity
        }}
        className="rm-bokeh-wrapper"
      >
        {bokehSpans}
      </div>
      {children && (
        <div className="rm-bokeh-container">
          {children}
        </div>
      )}
    </div>
  );
}

BokehBackground.propTypes = {
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  settings: PropTypes.instanceOf(Object),
  children: PropTypes.node,
};

BokehBackground.defaultProps = {
  className: undefined,
  backgroundColor: undefined,
  settings: undefined,
  children: undefined,
};
