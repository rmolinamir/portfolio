import BokehBackground from 'components/UI/BokehBackground';
import WavesBackground from 'components/UI/WavesBackground';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Name from '../Name';

const browser = (agent => {
  switch (true) {
    case agent.indexOf('edge') > -1:
      return 'edge';
    case agent.indexOf('opr') > -1 && !!window.opr:
      return 'opera';
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      return 'chrome';
    case agent.indexOf('trident') > -1:
      return 'ie';
    case agent.indexOf('firefox') > -1:
      return 'firefox';
    case agent.indexOf('safari') > -1:
      return 'safari';
    default:
      return 'other';
  }
})(window.navigator.userAgent.toLowerCase());

function Front(props) {
  const { children, className } = props;
  const card = (
    <BokehBackground
      randomColor
      settings={{
        backgroundSize: 90,
        sizeToBallRatio: 1.2,
        overlayOpacity: 0,
        animationDuration: 12,
        ballOpacity: 0.33,
        randomColor: true,
        randomDelay: true
      }}
    >
      <div className={className}>
        <Name>{children}</Name>
      </div>
    </BokehBackground>
  );

  /**
   * WavesBackground doesn't looks too good on Firefox. So, if of Firefox we will return the children
   * without it.
   */
  return (
    browser !== 'firefox' ? (
      <WavesBackground
        className={className}
        wavesOpacity={0.33}
        style={{
          backgroundColor: 'transparent'
        }}
      >
        {card}
      </WavesBackground>
    ) : card
  );
}

Front.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const CardFront = styled(Front)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0 9px;
`;

export default CardFront;
