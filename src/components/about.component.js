import { css } from 'styled-components/macro';

import React from 'react';
import { typography, font } from './typography';
import Img from 'gatsby-image';
import { mobile } from './styles';
import Link from './linkFade.component';
import Tippy from '@tippyjs/react';
import { theme } from './layout.component';

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
        min-height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    `,
    titleContainer: css`
        margin-bottom: 32px;
    `,
    highlight: css`
        color: ${({ theme }) => theme.colors.dark};
    `,
    description: css`
        ${typography.about};
        ${font.secondary};
        margin-bottom: 32px;
    `,
    linkContainer: css`
        margin-bottom: 32px;
        a {
            ${[typography.about, font.primary]};
        }
    `,
    emailContainer: css`
        margin-bottom: 32px;
    `,
    email: css`
        ${[typography.about, font.secondary]};
        font-size: 18px;
        cursor: pointer;
        background-color: transparent;
        border: none;
        padding: 0;
    `,
    emailTag: css`
        ${[typography.about, font.primary]};
    `,
};

const AboutComponent = ({
    profilePicture,
    bio,
    vimeo,
    linkedIn,
    insta,
    resume,
    emailTagLine,
    email,
}) => {
    return (
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
                <div css={styles.emailContainer}>
                    <p css={styles.emailTag}>{emailTagLine}</p>

                    <Tippy
                        trigger="click"
                        placement="right"
                        content="Copied!"
                        style={{ color: theme.colors.darkActive }}
                    >
                        <button
                            onClick={() => {
                                const el = document.createElement('textarea');
                                el.value = email;
                                document.body.appendChild(el);
                                el.select();
                                document.execCommand('copy');
                                document.body.removeChild(el);
                            }}
                            data-select="email-button"
                            css={styles.email}
                        >
                            {email}
                        </button>
                    </Tippy>
                </div>
                <div css={styles.linkContainer}>
                    <div>
                        <Link
                            href={resume.file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={vimeo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Vimeo
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linked In
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={insta}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Insta
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
