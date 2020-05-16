import { css } from 'styled-components/macro';
import React from 'react';
import Img from 'gatsby-image';

const styles = {
    pageContainer: css`
        min-height: 100vh;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `,
    contentContainer: css`
        max-width: 900px;
    `,
    imageContainer: css`
        width: 100%;
        max-height: 80vh;
        max-width: 900px;
        background-color: ${({ theme }) => theme.colors.light};
    `,
};
const GraphicDesignComponent = ({ graphicDesign }) => {
    return (
        <div css={styles.pageContainer}>
            <div css={styles.contentContainer}>
                <div css={styles.imageContainer}>
                    <Img
                        css={styles.image}
                        fluid={graphicDesign.media[0].fluid}
                    />
                </div>
                <h2>{graphicDesign.title}</h2>
                <p>{graphicDesign.description.internal.content}</p>
            </div>
        </div>
    );
};

export default GraphicDesignComponent;
