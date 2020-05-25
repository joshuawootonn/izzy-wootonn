import { css } from 'styled-components/macro';
import React from 'react';

const styles = {
    video: css`
        height: 720px;
        width: 1280px;
        border: 0px;
    `,
};
const VideoComponent = ({ video }) => (
    <div>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

export default VideoComponent;
