import React from 'react';
import { css } from 'styled-components/macro';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import slugify from 'slugify';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    pageContainer: css`
        min-height: 100vh;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    `,
    imageContainer: css`
        width: 100%;
        max-height: 80vh;
        max-width: 900px;
        background-color: ${({ theme }) => theme.colors.light};
    `,
    image: css`
        transition: all 0.5s ease;
        width: auto;
        max-height: 100%;

        cursor: pointer;

        filter: blur(0px);

        &:hover {
            opacity: 0.6;
            filter: blur(1px);
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
}) => (
    <div css={styles.pageContainer}>
        <div
            css={styles.imageContainer}
            onClick={() => navigate(`/graphic-design/${slugify(title)}`)}
        >
            <Img css={styles.image} fluid={media[0].fluid} />
        </div>
    </div>
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GraphicDesignList = ({ graphicDesigns }) => (
    <div css={styles.root}>
        {graphicDesigns.map(graphicDesign => (
            <GraphicDesignComponent
                key={graphicDesign.id}
                graphicDesign={graphicDesign}
            />
        ))}
    </div>
);

export default GraphicDesignList;
