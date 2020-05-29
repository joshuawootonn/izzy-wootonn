import { css } from 'styled-components/macro';

import React from 'react';
import { typography, font } from './typography';
import Img from 'gatsby-image';
import { mobile } from './styles';
import Link from './linkRoll.component';

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
        flex-direction: column;
    `,
    titleContainer: css`
        margin-top: 100px;
        margin-bottom: 32px;

        ${mobile(css`
            margin-top: 64px;
            margin-bottom: 12px;
        `)};
    `,
    highlight: css`
        color: ${({ theme }) => theme.colors.dark};
    `,
    description: css`
        ${typography.about};
        ${font.secondary};
        margin-bottom: 145px;
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
                <Link href={resume.file.url}>Resume</Link>
                <Link href={vimeo}>Vimeo</Link>
                <Link href={linkedIn}>Linked In</Link>
                <Link href={insta}>Insta</Link>
            </div>
        </div>
    </div>
);

export default AboutComponent;
