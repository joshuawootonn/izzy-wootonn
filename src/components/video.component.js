import { css } from 'styled-components/macro';
import React from 'react';

const styles = {
    video: css`
        height: 720px;
        width: 1280px;
        border: 0px;
    `,
};
const VideoComponent = ({ video }) => {
    return (
        <div>
            <iframe
                css={styles.video}
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
};

export default VideoComponent;
