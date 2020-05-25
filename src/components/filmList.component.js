import React from 'react';
import { css } from 'styled-components/macro';
import { navigate } from 'gatsby';
import slugify from 'slugify';
import Img from 'gatsby-image';
import moment from 'moment';
import typography from './typography';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        padding: 20px;
        & > div {
            margin-bottom: 67px;
        }

        margin: 115px auto 0 auto;
        max-width: 645px;
        width: 100%;
    `,
    videoRoot: css``,
    row: css`
        display: flex;
        flex-direction: row;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    `,
    imageContainer: css`
        cursor: pointer;
        transition: all 200ms ease;
        background: ${({ theme }) => theme.colors.light};
        margin-bottom: 30px;
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

const VideoComponent = ({ video }) => {
    console.log(video);
    return (
        <div css={styles.videoRoot} key={video.date}>
            <div
                onClick={() => navigate(`/film/${slugify(video.title)}`)}
                css={styles.imageContainer}
            >
                <Img fluid={video.img.childImageSharp.fluid} />
            </div>
            <div css={styles.row}>
                <h2 css={typography.largeText}>{video.title}</h2>
                <p css={typography.smallText}>
                    {moment(video.date).format('MMM YYYY')}
                </p>
            </div>
        </div>
    );
};

const VideoList = ({ videos }) => (
    <div css={styles.root}>
        {videos.map(video => (
            <VideoComponent key={video.date} video={video} />
        ))}
    </div>
);

export default VideoList;
