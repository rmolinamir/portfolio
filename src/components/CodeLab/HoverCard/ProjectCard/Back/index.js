import BokehBackground from 'components/UI/BokehBackground';
import { P } from 'components/UI/Text';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'react-svg-library';
import styled from 'styled-components';
import getRandomColor from 'utils/getRandomColor';

const Wrapper = styled.div`
  &&& {
    position: relative;
    display: flex;
    width: 100%;
    align-items: space-evenly;
    justify-content: space-evenly;
    flex-flow: column;
    text-align: center;
    background-color: inherit;
    color: #fff;
    padding: 12px;

    .container {
      font-weight: bold;
    }

    .text {
      font-size: 17px;
    }

    .links {
      position: relative;
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-evenly;
      font-weight: bold;
    }

    .link {
      color: inherit;
      cursor: pointer;
      transform: scale(0.95);
      transition: transform ease 200ms;
    }
  }
`;

const StyledBokehBackground = styled(BokehBackground)`
  .rm-bokeh-container {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function Back(props) {
  const {
    children,
    documentationHref,
    github,
  } = props;
  const backgroundColor = getRandomColor(4);

  return (
    <Wrapper>
      <StyledBokehBackground
        settings={{
          backgroundSize: 90,
          sizeToBallRatio: 1.2,
          overlayOpacity: 0.25,
          animationDuration: 12,
          ballOpacity: 0.66,
          randomColor: true,
          randomDelay: true
        }}
        overlayOpacity={0.2}
        backgroundColor={backgroundColor}
      >
        <div className="container">
          <P className="text">
            {children}
          </P>
        </div>
        <br />
        <div className="links">
          <Link
            to={documentationHref}
            className="link"
          >
            <div>
              <code>showcase</code>
            </div>
            <Icon
              size="52px"
              icon="share-two"
            />
          </Link>
          <a
            className="link"
            href={github}
            target="blank"
            rel="noopener noreferrer"
          >
            <div><code>repository</code></div>
            <Icon
              size="52px"
              icon="github"
            />
          </a>
        </div>
      </StyledBokehBackground>
    </Wrapper>
  );
}

Back.propTypes = {
  children: PropTypes.string.isRequired,
  documentationHref: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired
};
