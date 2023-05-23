import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import { Col, Row } from 'components/Layout';
import { Animations, Container, Fab } from 'components/UI';
import { H3 } from 'components/UI/Text';
import styled from 'styled-components';
import pdfDownloadLink from 'utils/pdfDownloadLink';

import SectionCaption from '../SectionCaption';

export default function Resume() {
  return (
    <Container id="resume">
      <H3 color="primary"><strong>Resume</strong></H3>
      <SectionCaption>
        Feel free to download my resume by clicking the button below.
        It provides an overview of the information available on my personal website.
        The resume is in PDF format, but if you need it in any other format, please let me know.
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
