export const simpleTooltips = theme => `import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { H4 } from 'components/UI/Text';
import { Animations } from 'components/UI';

const StyledRow = styled(Row)\`
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
    background-color: ${theme.terciary};
    color: ${theme.whiteColor};
  }
\`;

const StyledCol = styled(Col)\`
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
\`;

const SimpleTooltips = withTheme(props => {
  const { theme } = props;
  return (
    <StyledRow
      alignItems="center"
      alignContent="center"
      justifyContent="center"
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
`;

export const customTooltips = theme => `import React from 'react';
import styled from 'styled-components';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { H4 } from 'components/UI/Text';
import { Animations } from 'components/UI';
import Button from '@material-ui/core/Button';

const StyledRow = styled(Row)\`
  .rm-primary-tooltip {
    background-color: ${theme.primary};
    color: ${theme.whiteColor};
    fill: ${theme.whiteColor};
  }
  .rm-tooltips-cat-tooltip {
    cursor: pointer;
    width: 124px;
    border-radius: 50%;
  }
\`;

const StyledCol = styled(Col)\`
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
\`;

export default function CustomTooltips() {
  return (
    <StyledRow
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      spacing={4}
    >
      {[
        {
          key: 'button_custom',
          tooltip: (
            <Tooltip
              className="rm-primary-tooltip"
              tooltip={(
                <Button
                  variant="contained"
                  color="secondary"
                >
                  You can use your own components!.
                </Button>
              )}
            >
              And it still works as you&apos;d expect!
            </Tooltip>
          ),
          caption: (
            <>
              You can use your own components as tooltips.
            </>
          )
        },
        {
          key: 'cat_custom',
          tooltip: (
            <Tooltip
              tooltip={(
                <img
                  alt=""
                  className="rm-tooltips-cat-tooltip"
                  src="https://i.chzbgr.com/full/9112752128/h94C6655E/"
                />
              )}
            >
              <Animations.PopIn>
                <img
                  alt=""
                  src="https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg?quality=98&strip=all&w=782"
                />
              </Animations.PopIn>
            </Tooltip>
          ),
          caption: (
            <>
              Another custom tooltip.
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
}
`;
