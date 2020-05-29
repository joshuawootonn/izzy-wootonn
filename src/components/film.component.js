import { css } from 'styled-components/macro';
import React from 'react';
import Link from './linkFade.component';
import { font, typography } from './typography';
import moment from 'moment';
import { desktop, mobile } from './styles';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        justify-content: center;

        margin: 0 auto;
        max-width: 933px;
        width: 100%;
    `,
    headerRow: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        ${mobile(css`
            padding: 10px 0;
        `)};
        width: 100%;
        margin: 0;
    `,
    descriptionRow: css`
        padding: 30px;

        ${mobile(css`
            padding: 10px 0;
        `)};
        ${desktop(css`
            min-height: 150px;
        `)};
    `,
    linkRow: css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        ${mobile(css`
            padding: 20px 0;
        `)};
        a {
            text-decoration: none;
            color: black;
        }
    `,
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
    iframeContainer: css`
        position: relative;
        width: 933px;
        ${mobile(css`
            width: 100%;
        `)};
        padding-bottom: 56.25%;
    `,
    iframe: css`
        position: absolute;
        width: 100%;
        height: 100%;
    `,
};
const FilmComponent = ({ video, onPrevious, onNext }) => {
    return (
        <div css={styles.root}>
            <div css={styles.headerRow}>
                <h2 css={typography.largeText}>{video.title}</h2>
                <p css={typography.smallText}>
                    {moment(video.date).format('MMM YYYY')}
                </p>
            </div>
            <div css={styles.iframeContainer}>
                <iframe
                    src={`https://player.vimeo.com/video/${video.id}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=152425`}
                    css={styles.iframe}
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="(dis)connect"
                />
            </div>
            <div css={styles.descriptionRow}>
                <p css={font.secondary}>{video.description}</p>
            </div>
            <div css={styles.linkRow}>
                {onPrevious ? <Link to={onPrevious}>previous</Link> : <span />}
                {onNext ? <Link to={onNext}>next</Link> : <span />}
            </div>
        </div>
    );
};

export default FilmComponent;
