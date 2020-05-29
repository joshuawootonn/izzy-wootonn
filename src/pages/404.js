import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql } from 'gatsby';
import { css } from 'styled-components/macro';
import Link from '../components/linkFade.component';
import slugify from 'slugify';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;

        align-items: center;

        margin: 0 auto;
        max-width: 645px;
        width: 100%;
    `,
    title: css`
        margin-bottom: 15px;
    `,
    link: css`
        font-size: 30px;
        display: inline;
    `,
};

export const query = graphql`
    {
        allVimeoVideo {
            nodes {
                title
            }
        }
    }
`;

const NotFoundPage = ({
    data: {
        allVimeoVideo: { nodes: videos },
    },
}) => (
    <LayoutComponent>
        <SeoComponent title="404: Not found" />
        <div css={styles.root}>
            <div>
                <h1 css={styles.title}>404</h1>
                {videos.length > 0 && (
                    <p>
                        while you are here, check out my latest{' '}
                        <Link
                            css={styles.link}
                            to={`/film/${slugify(
                                videos[videos.length - 1].title
                            )}`}
                        >
                            film
                        </Link>{' '}
                    </p>
                )}
            </div>
        </div>
    </LayoutComponent>
);

export default NotFoundPage;
