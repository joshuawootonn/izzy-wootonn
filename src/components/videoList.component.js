import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from 'styled-components/macro';
import { navigate } from 'gatsby';
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
        height: 0;
        padding-top: 56.25%;
        background-image: url("${({ url }) => url}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
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

const VideoComponent = ({ video }) => (
    <div
        css={styles.videoRoot}
        key={video.date}
        onClick={() => navigate(`/film/${slugify(video.title)}`)}
    >
        <div css={styles.image} url={video.thumbnail.large} />

        <h2>{video.title}</h2>
        <p>{video.description}</p>
    </div>
);

const VideoList = () => {
    const data = useStaticQuery(query);
    console.log(data);
    return (
        <div css={styles.root}>
            {data.allVimeoVideo.nodes.map(video => (
                <VideoComponent key={video.date} video={video} />
            ))}
        </div>
    );
};

export default VideoList;
