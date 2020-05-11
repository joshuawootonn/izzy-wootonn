import styled from 'styled-components';
import React from 'react';

const EmbeddedVideo = styled.iframe`
    height: 405px;
    width: 720px;
    border: 0px;
`;

const VideoComponent = ({ video }) => (
    <div key={video.date}>
        <EmbeddedVideo
            title={video.title}
            allow="autoplay; fullscreen"
            src={video.url
                .replace('https://', 'https://player.')
                .replace('.com/', '.com/video/')}
        />

        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

export default VideoComponent;
