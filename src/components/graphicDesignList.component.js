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

const GraphicDesignComponent = ({
    graphicDesign: {
        title,
        description: {
            internal: { content },
        },
        media,
    },
}) => {
    console.log(media, content);
    return (
        <div css={styles.videoRoot}>
            <div
                // onClick={() => navigate(`/film/${slugify(video.title)}`)}
                css={styles.imageContainer}
            >
                <Img fluid={media[0].fluid} />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GraphicDesignList = ({ graphicDesigns }) => {
    return (
        <div css={styles.root}>
            {graphicDesigns.map(graphicDesign => (
                <GraphicDesignComponent
                    key={graphicDesign.id}
                    graphicDesign={graphicDesign}
                />
            ))}
        </div>
    );
};

export default GraphicDesignList;
