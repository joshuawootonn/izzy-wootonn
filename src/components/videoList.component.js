import React from 'react';
import { css } from 'styled-components/macro';
import { navigate } from 'gatsby';
import slugify from 'slugify';
import Img from 'gatsby-image';
import dimensions from '../constants/dimensions';

const styles = {
    root: css`
        margin-top: ${dimensions.header}px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    `,
    videoRoot: css``,
    imageContainer: css`
        cursor: pointer;
        transition: all 200ms ease;
        background: ${({ theme }) => theme.colors.light};
        & > div {
            transition: all 0.5s ease;
            opacity: 1;
            filter: blur(0.01px);
        }
        &:hover > div {
            opacity: 0.6;
            filter: blur(2px);
        }
    `,
};

const VideoComponent = ({ video }) => (
    <div css={styles.videoRoot} key={video.date}>
        <div
            onClick={() => navigate(`/film/${slugify(video.title)}`)}
            css={styles.imageContainer}
        >
            <Img fluid={video.img.childImageSharp.fluid} />
        </div>
        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

const VideoList = ({ videos }) => (
    <div css={styles.root}>
        {videos.map(video => (
            <VideoComponent key={video.date} video={video} />
        ))}
    </div>
);

export default VideoList;
