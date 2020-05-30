import { css } from 'styled-components/macro';

import React from 'react';
import { typography, font } from './typography';
import Img from 'gatsby-image';
import { mobile } from './styles';
import Link from './linkFade.component';

const styles = {
    root: css`
        width: 100%;
        align-items: flex-start;
        justify-content: center;
        display: flex;
        flex-direction: row;
    `,
    imageContainer: css`
        ${mobile(css`
            display: none;
        `)};
        min-width: 455px;
        margin-right: 10px;
    `,
    contentContainer: css`
        max-width: 455px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    `,
    titleContainer: css`
        margin-bottom: 32px;
        ${mobile(css`
            margin-bottom: 12px;
        `)};
    `,
    highlight: css`
        color: ${({ theme }) => theme.colors.dark};
    `,
    description: css`
        ${typography.about};
        ${font.secondary};
        margin-bottom: 45px;
        ${mobile(css`
            margin-bottom: 24px;
        `)};
    `,
    linkContainer: css`
        display: flex;
        flex-direction: column;

        ${mobile(css`
            margin-bottom: 50px;
        `)};

        a {
            ${[typography.about, font.primary]}
        }
    `,
};

const AboutComponent = ({
    profilePicture,
    bio,
    vimeo,
    linkedIn,
    insta,
    resume,
}) => (
    <div css={styles.root}>
        <div css={styles.imageContainer}>
            <Img fluid={profilePicture.fluid} />
        </div>
        <div css={styles.contentContainer}>
            <div css={styles.titleContainer}>
                <h1 css={[typography.title, styles.highlight]}>Izzy</h1>
                <h1 css={typography.title}>Wootonn</h1>
            </div>
            <p css={[styles.description]}>{bio}</p>
            <div css={styles.linkContainer}>
                <Link
                    href={resume.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </Link>
                <Link href={vimeo} target="_blank" rel="noopener noreferrer">
                    Vimeo
                </Link>
                <Link href={linkedIn} target="_blank" rel="noopener noreferrer">
                    Linked In
                </Link>
                <Link href={insta} target="_blank" rel="noopener noreferrer">
                    Insta
                </Link>
            </div>
        </div>
    </div>
);

export default AboutComponent;
