

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = ({ children, ...rest }) => (
  <Typography variant="h1" {...rest}>
    {children}
  </Typography>
);

const H2 = ({ children, ...rest }) => (
  <Typography variant="h2" {...rest}>
    {children}
  </Typography>
);

const H3 = ({ children, ...rest }) => (
  <Typography variant="h3" {...rest}>
    {children}
  </Typography>
);

const H4 = ({ children, ...rest }) => (
  <Typography variant="h4" {...rest}>
    {children}
  </Typography>
);

const H6 = ({ children, ...rest }) => (
  <Typography variant="h6" {...rest}>
    {children}
  </Typography>
);

const P = ({ children, ...rest }) => (
  <Typography variant="body1" {...rest}>
    {children}
  </Typography>
);

const Caption = ({ children, ...rest }) => (
  <Typography variant="caption" {...rest}>
    {children}
  </Typography>
);

const Subtitle = ({ children, ...rest }) => (
  <Typography variant="subtitle1" {...rest}>
    {children}
  </Typography>
);

const StyledH1 = styled(H1)`
  &&& {
    font-size: 52px;
    line-height: 1.8;
    font-weight: 600;
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 46px;
    }
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 38px;
    }
    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 34px;
    }
    ${({ css }) => css};
    * {
      font-size: inherit;
      font-weight: inherit;
    }
  }
`;

const StyledH2 = styled(H2)`
  &&& {
    font-size: 34px;
    line-height: 1.7;
    font-weight: 400;
    color: ${({ theme, color }) => (color ? theme[color] : undefined)};
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 28px;
    }
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 22px;
    }
    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 18px;
    }
    ${({ css }) => css};
    * {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    font-size: 22px;
    line-height: 1.6;
    font-weight: 300;
    color: ${({ theme, color }) => (color ? theme[color] : undefined)};
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 19px;
    }
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 17px;
    }
    ${({ css }) => css};
    * {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }
`;

const StyledH4 = styled(H4)`
  &&& {
    font-size: 17px;
    line-height: 1.6;
    font-weight: 300;
    color: ${({ theme, color }) => (color ? theme[color] : undefined)};
    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 16px;
    }
    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 15px;
    }
    ${({ css }) => css};
    * {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
  }
`;

const StyledH6 = styled(H6)`
  &&& {
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    font-weight: 300;
    * {
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
    }
    /* TODO: screen size changes */
  }
`;

const StyledP = styled(P)`
  &&& {
    font-size: 15px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledCaption = styled(Caption)`
  &&& {
    font-size: 15px;
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    /* TODO: screen size changes */
  }
`;

const StyledSubtitle = styled(Subtitle)`
  &&& {
    font-size: 18px;
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    /* TODO: screen size changes */
  }
`;

const StyledSpan = styled.span`
  font-size: inherit;
  ${({ css }) => css};
`;

const propTypes = {
  children: PropTypes.node.isRequired
};

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
H4.propTypes = propTypes;
H6.propTypes = propTypes;
P.propTypes = propTypes;
Caption.propTypes = propTypes;
Subtitle.propTypes = propTypes;

export {
  StyledH1 as H1,
  StyledH2 as H2,
  StyledH3 as H3,
  StyledH4 as H4,
  StyledH6 as H6,
  StyledP as P,
  StyledSpan as Span,
  StyledCaption as Caption,
  StyledSubtitle as Subtitle,
};
