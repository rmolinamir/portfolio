import { Col, Row } from 'components/Layout';
import Tooltip from 'react-png-tooltip';
import { Icon } from 'react-svg-library';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const AtomDarkTooltip = styled(Tooltip)`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
`;

const StyledCol = styled(Col)`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      overflow: visible !important;
    }
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
  /* NOTE: The font-size is used to scale up the icons */
  font-size: 48px;
`;

const StyledCode = styled.code`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
`;

const literal = name => `<Icon
  icon="${name}"
/>`;

const calendarGradientLiteralTwo = () => `<Icon
  icon="calendar-gradient"
  gradient={[
    'lightyellow',
    'crimson',
  ]}
/>`;

export default function Underlines() {
  const icons = [
    {
      name: 'account-delivery',
      icon: (
        <Icon
          icon="account-delivery"
        />
      ),
      literal,
    },
    {
      name: 'account-other',
      icon: (
        <Icon
          icon="account-other"
        />
      ),
      literal,
    },
    {
      name: 'account-security',
      icon: (
        <Icon
          icon="account-security"
        />
      ),
      literal,
    },
    {
      name: 'account-user-three',
      icon: (
        <Icon
          icon="account-user-three"
        />
      ),
      literal,
    },
    {
      name: 'account-user-two',
      icon: (
        <Icon
          icon="account-user-two"
        />
      ),
      literal,
    },
    {
      name: 'account-user',
      icon: (
        <Icon
          icon="account-user"
        />
      ),
      literal,
    },
    {
      name: 'location-pin',
      icon: (
        <Icon
          icon="location-pin"
        />
      ),
      literal,
    },
    {
      name: 'flag',
      icon: (
        <Icon
          icon="flag"
        />
      ),
      literal,
    },
    {
      name: 'bullet-checkmark-no-bg',
      icon: (
        <Icon
          icon="bullet-checkmark-no-bg"
        />
      ),
      literal,
    },
    {
      name: 'bullet-checkmark',
      icon: (
        <Icon
          icon="bullet-checkmark"
        />
      ),
      literal,
    },
    {
      name: 'bullet-star',
      icon: (
        <Icon
          icon="bullet-star"
        />
      ),
      literal,
    },
    {
      name: 'chat',
      icon: (
        <Icon
          icon="chat"
        />
      ),
      literal,
    },
    {
      name: 'envelope',
      icon: (
        <Icon
          icon="envelope"
        />
      ),
      literal,
    },
    {
      name: 'phone',
      icon: (
        <Icon
          icon="phone"
        />
      ),
      literal,
    },
    {
      name: 'sent-envelope',
      icon: (
        <Icon
          icon="sent-envelope"
        />
      ),
      literal,
    },
    {
      name: 'apple',
      icon: (
        <Icon
          icon="apple"
        />
      ),
      literal,
    },
    {
      name: 'google-playstore',
      icon: (
        <Icon
          icon="google-playstore"
        />
      ),
      literal,
    },
    {
      name: 'google',
      icon: (
        <Icon
          icon="google"
        />
      ),
      literal,
    },
    {
      name: 'linkedin-one',
      icon: (
        <Icon
          icon="linkedin-one"
        />
      ),
      literal,
    },
    {
      name: 'linkedin-two',
      icon: (
        <Icon
          icon="linkedin-two"
        />
      ),
      literal,
    },
    {
      name: 'calendar',
      icon: (
        <Icon
          icon="calendar"
        />
      ),
      literal,
    },
    {
      name: 'calendar-gradient',
      icon: (
        <Icon
          icon="calendar-gradient"
        />
      ),
      literal,
    },
    {
      name: 'calendar-gradient (with a custom gradient)',
      icon: (
        <Icon
          icon="calendar-gradient"
          gradient={[
            'lightyellow',
            'crimson',
          ]}
        />
      ),
      literal: calendarGradientLiteralTwo,
    },
    {
      name: 'bed',
      icon: (
        <Icon
          icon="bed"
        />
      ),
      literal,
    },
    {
      name: 'delivery-truck',
      icon: (
        <Icon
          icon="delivery-truck"
        />
      ),
      literal,
    },
    {
      name: 'more-info',
      icon: (
        <Icon
          icon="more-info"
        />
      ),
      literal,
    },
    {
      name: 'private',
      icon: (
        <Icon
          icon="private"
        />
      ),
      literal,
    },
    {
      name: 'tools',
      icon: (
        <Icon
          icon="tools"
        />
      ),
      literal,
    },
    {
      name: 'under-construction',
      icon: (
        <Icon
          icon="under-construction"
        />
      ),
      literal,
    },
    {
      name: 'website',
      icon: (
        <Icon
          icon="website"
        />
      ),
      literal,
    },
    {
      name: 'single-image',
      icon: (
        <Icon
          icon="single-image"
        />
      ),
      literal,
    },
    {
      name: 'multi-image',
      icon: (
        <Icon
          icon="multi-image"
        />
      ),
      literal,
    },
    {
      name: 'hide',
      icon: (
        <Icon
          icon="hide"
        />
      ),
      literal,
    },
    {
      name: 'show',
      icon: (
        <Icon
          icon="show"
        />
      ),
      literal,
    },
    {
      name: 'verification-checkmark',
      icon: (
        <Icon
          icon="verification-checkmark"
        />
      ),
      literal,
    },
    {
      name: 'warning-checkmark',
      icon: (
        <Icon
          icon="warning-checkmark"
        />
      ),
      literal,
    },
    {
      name: 'loading-one',
      icon: (
        <Icon
          icon="loading-one"
        />
      ),
      literal,
    },
    {
      name: 'loading-two',
      icon: (
        <Icon
          icon="loading-two"
        />
      ),
      literal,
    },
    {
      name: 'loading-blocks',
      icon: (
        <Icon
          icon="loading-blocks"
        />
      ),
      literal,
    },
    {
      name: 'minus-symbol',
      icon: (
        <Icon
          icon="minus-symbol"
        />
      ),
      literal,
    },
    {
      name: 'plus-symbol',
      icon: (
        <Icon
          icon="plus-symbol"
        />
      ),
      literal,
    },
    {
      name: 'arrow-down',
      icon: (
        <Icon
          icon="arrow-down"
        />
      ),
      literal,
    },
    {
      name: 'arrow-right',
      icon: (
        <Icon
          icon="arrow-right"
        />
      ),
      literal,
    },
    {
      name: 'menu',
      icon: (
        <Icon
          icon="menu"
        />
      ),
      literal,
    },
  ];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
      style={{
        marginBottom: '1ch',
      }}
    >
      {icons.map(({ name, icon, literal: iconLiteral }) => (
        <StyledCol
          key={name}
          xl={2}
          lg={3}
          md={4}
          sm={6}
          xs={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>{icon}</StyledIcon>
              <StyledCode>{name}</StyledCode>
            </>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
            {iconLiteral(name)}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
        </StyledCol>
      ))}
    </Row>
  );
}
