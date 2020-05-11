import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled, { css } from 'styled-components/macro';
import { Video } from '../constants/types';

import { Link, navigate } from 'gatsby';
import slugify from 'slugify';
const styles = {
    root: css`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
    `,
    videoRoot: css``,
    image: css`
        width: 100%;
        height: auto;
    `,
};

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

interface VideoProps {
    video: Video;
}

const VideoComponent: FC<VideoProps> = ({ video }) => (
    <div
        css={styles.videoRoot}
        key={video.date}
        onClick={() => navigate(`/film/${slugify(video.title)}`)}
    >
        <img css={styles.image} src={video.thumbnail.large} />

        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

const VideoList = () => {
    const data = useStaticQuery(query);
    const videos: Video[] = data.allVimeoVideo.nodes;

    return (
        <div css={styles.root}>
            {videos.map((video: Video) => (
                <VideoComponent key={video.date} video={video} />
            ))}
        </div>
    );
};

export default VideoList;
