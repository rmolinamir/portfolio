
import Button from '@material-ui/core/Button';
import { Col, Row } from 'components/Layout';
import { Animations } from 'components/UI';
import { H4 } from 'components/UI/Text';
import Tooltip from 'react-png-tooltip';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  .rm-primary-tooltip {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.whiteColor};
    fill: ${({ theme }) => theme.whiteColor};
  }
  .rm-tooltips-cat-tooltip {
    cursor: pointer;
    width: 124px;
    border-radius: 50%;
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

export default function CustomTooltips() {
  return (
    <StyledRow
      alignItems="center"
      alignContent="center"
      justify="center"
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
