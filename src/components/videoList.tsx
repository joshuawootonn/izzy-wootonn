import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Video } from '../constants/types';
import styled from 'styled-components';

const query = graphql`
  {
    allVimeoVideo {
      nodes {
        url
        title
        thumbnail {
          large
        }
        duration
        description
        date
        iframe
      }
    }
  }
`;

const EmbeddedVideo = styled.iframe`
  height: 540px;
  width: 960px;
  border: 0px;
`;

const VideoComponent = () => {
  const data = useStaticQuery(query);
  const videos: Video[] = data.allVimeoVideo.nodes;

  return (
    <div>
      {videos.map((video: Video) => {
        console.log(
          video.url.replace('https://', 'https://player.').replace('.com/', '.com/video/')
        );
        return (
          <div key={video.date}>
            <EmbeddedVideo
              title={video.title}
              allow="autoplay; fullscreen"
              src={video.url.replace('https://', 'https://player.').replace('.com/', '.com/video/')}
            />

            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoComponent;
