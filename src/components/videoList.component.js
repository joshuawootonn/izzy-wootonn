import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from 'styled-components/macro';
import { navigate } from 'gatsby';
import slugify from 'slugify';
import Img from 'gatsby-image';

const styles = {
    root: css`
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

const query = graphql`
    {
        allVimeoVideo {
            nodes {
                url
                title
                thumbnail {
                    large
                }
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
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
