import React from 'react';
import { css } from 'styled-components/macro';
import slugify from 'slugify';
import Img from 'gatsby-image';
import moment from 'moment';
import { typography } from './typography';
import { mobile } from './styles';
import { Link } from 'gatsby';
import LinkFade from './linkFade.component';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;

        padding: 0;
        & > div {
            margin-bottom: 67px;
        }

        margin: 0 auto;
        max-width: 933px;
        width: 100%;
    `,
    videoRoot: css``,
    row: css`
        display: flex;
        flex-direction: row;
        padding: 0 20px;
        ${mobile(css`
            padding: 0;
        `)};
        justify-content: space-between;
        align-items: center;
    `,
    imageContainer: css`
        cursor: pointer;
        transition: all 200ms ease;
        background: ${({ theme }) => theme.colors.dark};
        margin-bottom: 30px;

        ${mobile(css`
            margin-bottom: 4px;
        `)}

        & > div {
            transition: all 0.5s ease;
            opacity: 1;
            filter: blur(0.01px);
        }
        &:hover > div {
            opacity: 0.6;
            filter: blur(4px);
        }
    `,
};

const VideoComponent = ({ video }) => (
    <div css={styles.videoRoot} key={video.date}>
        <Link to={`/film/${slugify(video.title)}`}>
            <div css={styles.imageContainer}>
                <Img fluid={video.img.childImageSharp.fluid} />
            </div>
        </Link>
        <div css={styles.row}>
            <h2 css={typography.largeText}>
                <LinkFade to={`/film/${slugify(video.title)}`}>
                    {video.title}
                </LinkFade>
            </h2>
            <p css={typography.smallText}>
                {moment(video.date).format('MMM YYYY')}
            </p>
        </div>
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
