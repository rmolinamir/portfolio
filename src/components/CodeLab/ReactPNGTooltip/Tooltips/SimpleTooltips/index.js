// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

// Components
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { H4 } from 'components/UI/Text';
import { Animations } from 'components/UI';

const StyledRow = styled(Row)`
  .rm-indianred-tooltip {
    background-color: #cd5c5c;
    color: #FFF;
    fill: #FFF;
  }
  .rm-gold-tooltip {
    background-color: goldenrod;
    color: #FFF;
    fill: #FFF;
  }
  .rm-orange-tooltip {
    background-color: #ff7043;
    color: #FFF;
    fill: #FFF;
  }
  .rm-dark-tooltip {
    background-color: #333;
    color: #FFF;
    fill: #FFF;
  }
  .rm-tooltip {
    background-color: ${({ theme }) => theme.terciary};
    color: ${({ theme }) => theme.whiteColor};
  }
`;

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin: -6px 0;
    .rm-tooltips-tooltip {
      margin: 12px 0 3px;
    }
    .rm-tooltips-caption {
      margin: 3px 0 12px;
      code {
        font-weight: bold;
      }
    }
  }
`;

const SimpleTooltips = withTheme(props => {
  const { theme } = props;
  return (
    <StyledRow
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={4}
    >
      {[
        {
          key: 'default',
          tooltip: (
            <Tooltip>
              Absolutely positioned in the center. The tooltip will always render to wherever it has more space.
              If on mobile it&apos;ll tend to be centered inside the viewport.
            </Tooltip>
          ),
          caption: (
            <>
              This is the default tooltip.
            </>
          )
        },
        {
          key: 'indianred',
          tooltip: (
            <Tooltip
              shouldDisableClick
              background="indianred"
              className="rm-indianred-tooltip"
            >
              With the clicking functionality disabled!
            </Tooltip>
          ),
          caption: (
            <>
              An indianred tooltip with <code>shouldDisableClick</code> active.
            </>
          )
        },
        {
          key: 'darkblue',
          tooltip: (
            <Tooltip
              shouldDisableHover
              background="darkblue"
              className="rm-gold-tooltip"
            >
              The icon and the windows can have different colours too!
            </Tooltip>
          ),
          caption: (
            <>
              This tooltip has <code>shouldDisableHover</code> active. You can also press the
              ESC key to close tooltips!
            </>
          )
        },
        {
          key: 'image',
          tooltip: (
            <Tooltip>
              <img
                src="https://media0.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif?cid=3640f6095c64ef4962526264678e1c1c"
                alt=""
              />
              Somewhat accurate representation of me while programming.
              <br />
              <strong>Anything goes inside the tooltips!</strong>
            </Tooltip>
          ),
          caption: (
            <>
              Images and other similar components can also be placed inside the tooltips.
            </>
          )
        },
        {
          key: 'rick_roll',
          tooltip: (
              <Tooltip
                className="rm-orange-tooltip"
                background="#ff7043"
              >
                <iframe
                  title="rickroll"
                  type="text/html"
                  width="100%"
                  height="400px"
                  src="https://www.youtube.com/embed/DLzxrzFCyOs?autoplay=1"
                  frameBorder="0"
                />
              </Tooltip>
          ),
          caption: (
            <>
              You can also place <code>iframe</code> elements to display videos inside tooltips. Pretty much
              anything goes.
            </>
          )
        },
        {
          key: 'dark',
          tooltip: (
            <Tooltip
              background="black"
              fill="white"
              className="rm-dark-tooltip"
            >
              They are super easy to set up.
            </Tooltip>
          ),
          caption: (
            <>
              This tooltip is a dark themed tooltip.
            </>
          )
        },
        {
          key: 'hello_there',
          tooltip: (
            <Tooltip
              background={theme.primary}
              fill={theme.whiteColor}
              className="rm-tooltip"
            >
              <strong>Hello there!</strong>
              <Animations.PopIn>
                <img
                  src="https://i.redd.it/xmlmfyyx9e611.jpg"
                  alt=""
                />
              </Animations.PopIn>
            </Tooltip>
          ),
          caption: (
            <>
              You can also animate content inside the tooltips!
            </>
          )
        },
      ].map(({ key, tooltip, caption }) => (
        <StyledCol
          key={key}
          lg={3}
          md={6}
          sm={12}
        >
          <div className="rm-tooltips-tooltip">
            {tooltip}
          </div>
          <div className="rm-tooltips-caption">
            <H4 align="center">
              {caption}
            </H4>
          </div>
        </StyledCol>
      ))}
    </StyledRow>
  );
});

SimpleTooltips.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired,
};

export default SimpleTooltips;
