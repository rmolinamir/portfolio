// Libraries
import React from 'react';
import styled from 'styled-components';

// Assets
import pdfDownloadLink from 'utils/pdfDownloadLink';

// Components
import { Container, Fab, Animations } from 'components/UI';
import { Row, Col } from 'components/Layout';
import { H3 } from 'components/UI/Text';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import SectionCaption from '../SectionCaption';

export default function Resume() {
  return (
    <Container id="resume">
      <H3 color="primary"><strong>Resume</strong></H3>
      <SectionCaption>
        By clicking the button below, you may download my Resume which is an overview of the information in my personal
        website. Keep in mind that it&apos;s in PDF format, if you need it in any other format(s), do let me know.
      </SectionCaption>
      <br />
      <Animations.PopIn>
        <FabContainer>
          <a
            href={pdfDownloadLink}
            target="blank"
            rel="noopener noreferrer"
          >
            <Fab
              color="whiteColor"
              backgroundColor="primary"
            >
              <div className="fab-text">
                <Row
                  alignItems="center"
                  alignContent="center"
                >
                  <Col
                    xs={3}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <DownloadIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </Col>
                  <Col
                    xs={9}
                  >
                    <ListItemText
                      primary={(
                        <strong>Preview &  Download</strong>
                      )}
                    />
                  </Col>
                </Row>
              </div>
            </Fab>
          </a>
        </FabContainer>
      </Animations.PopIn>
    </Container>
  );
}

const FabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .MuiAvatar-colorDefault {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.whiteColor};
  }
  .fab-text {
    text-transform: initial;
  }
`;
