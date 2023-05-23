export const underlines = `import React from 'react';
import styled from 'styled-components';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Underline } from 'react-svg-library';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

const StyledIcon = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
\`;

const StyledCode = styled.code\`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
\`;

const cabaretLiteral =
\`<Underline
  underline="cabaret"
/>\`;

const curiousBlueLiteral =
\`<Underline
  underline="curious-blue"
/>\`;

const indigoLiteral =
\`<Underline
  underline="indigo"
/>\`;

const mountainmeadowLiteral =
\`<Underline
  underline="mountainmeadow"
/>\`;

const porscheLiteral =
\`<Underline
  underline="porsche"
/>\`;

export default function Underlines() {
  const underlines = [
    {
      name: 'cabaret',
      underline: (
        <Underline
          underline="cabaret"
        />
      ),
      literal: cabaretLiteral,
    },
    {
      name: 'curious-blue',
      underline: (
        <Underline
          underline="curious-blue"
        />
      ),
      literal: curiousBlueLiteral,
    },
    {
      name: 'indigo',
      underline: (
        <Underline
          underline="indigo"
        />
      ),
      literal: indigoLiteral,
    },
    {
      name: 'mountainmeadow',
      underline: (
        <Underline
          underline="mountainmeadow"
        />
      ),
      literal: mountainmeadowLiteral,
    },
    {
      name: 'porsche',
      underline: (
        <Underline
          underline="porsche"
        />
      ),
      literal: porscheLiteral,
    },
  ];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
    >
      {underlines.map(({ name, underline, literal }) => (
        <StyledCol
          key={name}
          lg={3}
          md={6}
          sm={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>{underline}</StyledIcon>
              <StyledCode>{name}</StyledCode>
            </>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
            {literal}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
        </StyledCol>
      ))}
    </Row>
  );
}
`;

export const customizedUnderlines = `import React from 'react';
import styled from 'styled-components';


import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


import { Underline } from 'react-svg-library';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

const StyledIcon = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
\`;

const StyledCode = styled.code\`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
\`;

const cabaretLiteral =
\`<Underline
  underline="cabaret"
  color="currentColor"
/>\`;

const curiousBlueLiteral =
\`<Underline
  underline="curious-blue"
  color="cyan"
/>\`;

const indigoLiteral =
\`<Underline
  underline="indigo"
  color="crimson"
/>\`;

const mountainmeadowLiteral =
\`<Underline
  underline="mountainmeadow"
  color="darkblue"
/>\`;

const porscheLiteral =
\`<Underline
  underline="porsche"
  color="gold"
/>\`;

export default function CustomizedUnderlines() {
  const underlines = [
    {
      name: 'cabaret',
      underline: (
        <Underline
          underline="cabaret"
          color="currentColor"
        />
      ),
      literal: cabaretLiteral,
    },
    {
      name: 'curious-blue',
      underline: (
        <Underline
          underline="curious-blue"
          color="cyan"
        />
      ),
      literal: curiousBlueLiteral,
    },
    {
      name: 'indigo',
      underline: (
        <Underline
          underline="indigo"
          color="crimson"
        />
      ),
      literal: indigoLiteral,
    },
    {
      name: 'mountainmeadow',
      underline: (
        <Underline
          underline="mountainmeadow"
          color="darkblue"
        />
      ),
      literal: mountainmeadowLiteral,
    },
    {
      name: 'porsche',
      underline: (
        <Underline
          underline="porsche"
          color="gold"
        />
      ),
      literal: porscheLiteral,
    },
  ];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
    >
      {underlines.map(({ name, underline, literal }) => (
        <StyledCol
          key={name}
          lg={3}
          md={6}
          sm={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>{underline}</StyledIcon>
              <StyledCode>{name}</StyledCode>
            </>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
            {literal}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
        </StyledCol>
      ))}
    </Row>
  );
}
`;

export const randomUnderlines = `import React from 'react';
import styled from 'styled-components';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Underline } from 'react-svg-library';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

const StyledIcon = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
\`;

const StyledCode = styled.code\`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
\`;

const literal = '<Underline />';

export default function CustomizedUnderlines() {
  const underlines = [...Array(10).keys()];

  return (
    <Row
      alignItems="center"
      alignContent="center"
      justify="center"
      spacing={3}
    >
      {underlines.map((key => (
        <StyledCol
          key={key}
          lg={3}
          md={6}
          sm={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>
                {/* Underlines are randomly generated when no props are passed */}
                <Underline />
              </StyledIcon>
              <StyledCode>{+key + 1}</StyledCode>
            </>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
            {literal}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
        </StyledCol>
      )))}
    </Row>
  );
}
`;

export const ratingsAPI = `import React from 'react';
import styled from 'styled-components';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Icon } from 'react-svg-library';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
  }
\`;

const StyledIcon = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
  /* NOTE: The font-size is used to scale up the icons */
  font-size: 48px;
\`;

const StyledCode = styled.code\`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
\`;

const dollarIconLiteral = fill => \`<Icon
  icon="dollar-icon"
  fill="#007791"
  clipPathFill={\${fill}}
/>\`;

const starIconLiteral = fill => \`<Icon
  icon="star-icon"
  fill="gold"
  clipPathFill={\${fill}}
/>\`;

const starIconTwoLiteral = fill => \`<Icon
  icon="star-icon-two"
  fill="gold"
  clipPathFill={\${fill}}
/>\`;

export default function RatingsAPI() {
  const ratings = [
    {
      name: 'dollar-icon (0.33)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={0.33}
        />
      ),
      literal: dollarIconLiteral(0.33),
    },
    {
      name: 'dollar-icon (0.66)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={0.66}
        />
      ),
      literal: dollarIconLiteral(0.66),
    },
    {
      name: 'dollar-icon (1)',
      underline: (
        <Icon
          icon="dollar-icon"
          fill="#007791"
          clipPathFill={1}
        />
      ),
      literal: dollarIconLiteral(1),
    },
    {
      name: 'star-icon (0.33)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={0.33}
        />
      ),
      literal: starIconLiteral(0.33),
    },
    {
      name: 'star-icon (0.66)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={0.66}
        />
      ),
      literal: starIconLiteral(0.66),
    },
    {
      name: 'star-icon (1)',
      underline: (
        <Icon
          icon="star-icon"
          fill="gold"
          clipPathFill={1}
        />
      ),
      literal: starIconLiteral(1),
    },
    {
      name: 'star-icon-two (0.33)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={0.33}
        />
      ),
      literal: starIconTwoLiteral(0.33),
    },
    {
      name: 'star-icon-two (0.66)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={0.66}
        />
      ),
      literal: starIconTwoLiteral(0.66),
    },
    {
      name: 'star-icon-two (1)',
      underline: (
        <Icon
          icon="star-icon-two"
          fill="gold"
          clipPathFill={1}
        />
      ),
      literal: starIconTwoLiteral(1),
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
      {ratings.map(({ name, underline, literal }) => (
        <StyledCol
          key={name}
          md={4}
          sm={6}
          xs={12}
        >
        <AtomDarkTooltip
          tooltip={(
            <>
              <StyledIcon>{underline}</StyledIcon>
              <StyledCode>{name}</StyledCode>
            </>
          )}
        >
          <SyntaxHighlighter
            language="jsx"
            style={atomDark}
          >
            {literal}
          </SyntaxHighlighter>
        </AtomDarkTooltip>
        </StyledCol>
      ))}
    </Row>
  );
}
`;

export const icons = `import React from 'react';
import styled from 'styled-components';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Icon } from 'react-svg-library';
import Tooltip from 'react-png-tooltip';
import { Row, Col } from 'components/Layout';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const AtomDarkTooltip = styled(Tooltip)\`
  background: rgb(29, 31, 33);
  color: rgb(255, 255, 255);
\`;

const StyledCol = styled(Col)\`
  &&& {
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      overflow: visible !important;
    }
  }
\`;

const StyledIcon = styled.div\`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 6px;
  /* NOTE: The font-size is used to scale up the icons */
  font-size: 48px;
\`;

const StyledCode = styled.code\`
  display: block;
  color: inherit;
  font-weight: bold;
  text-transform: lowercase;
  text-align: center;
  width: 150px;
  margin: 0 auto;
  font-size: 16px;
\`;

const literal = name => \`<Icon
  icon="\${name}"
/>\`;

const calendarGradientLiteralTwo = () => \`<Icon
  icon="calendar-gradient"
  gradient={[
    'lightyellow',
    'crimson',
  ]}
/>\`;

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
`;
