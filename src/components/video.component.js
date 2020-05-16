import { css } from 'styled-components/macro';
import React from 'react';

const styles = {
    video: css`
        height: 720px;
        width: 1280px;
        border: 0px;
    `,
};
const VideoComponent = ({ graphicDesign }) => {
    return (
        <div>
            <h2>{graphicDesign.title}</h2>
            <p>{graphicDesign.description.internal.content}</p>
        </div>
    );
};

export default VideoComponent;
