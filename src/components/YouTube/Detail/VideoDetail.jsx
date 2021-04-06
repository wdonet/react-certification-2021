import React from 'react';
import { useHistory, useParams } from 'react-router';

import {
  Container,
  Row,
  VideoPlayer,
  Col,
  VideoInfo,
  Title,
  Description,
  ColGrow,
  Overlay,
  FavoritesButtonWrapper,
} from './VideoDetail.styled';
import useVideo from '../useVideo';
import RelatedVideos from './RelatedVideos';
import FavoritesButton from '../../FavoritesButton/FavoritesButton';
import { useAuth } from '../../../providers/Auth';

const VideoDetail = () => {
  const { id } = useParams();
  const { video } = useVideo(id);
  const history = useHistory();
  const { authenticated } = useAuth();

  return (
    <Overlay
      onClick={() =>
        history.push(
          history.location.pathname.startsWith('/favorites') ? '/favorites' : '/'
        )
      }
    >
      <Container onClick={(event) => event.stopPropagation()}>
        <Row>
          <Col>
            <VideoPlayer
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
            {authenticated && (
              <FavoritesButtonWrapper>
                <FavoritesButton videoId={id} />
              </FavoritesButtonWrapper>
            )}
            <VideoInfo>
              <Title>{video?.snippet?.title}</Title>
              <Description>{video?.snippet?.description}</Description>
            </VideoInfo>
          </Col>
          <ColGrow>
            <RelatedVideos relatedTo={video} />
          </ColGrow>
        </Row>
      </Container>
    </Overlay>
  );
};

export default VideoDetail;
