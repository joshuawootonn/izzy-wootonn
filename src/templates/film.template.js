import React from 'react';

import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql, Link } from 'gatsby';
import VideoComponent from '../components/video.component';
import { css } from 'styled-components/macro';

const styles = {
    root: css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        height: 100vh;
    `,
};

export const query = graphql`
    query($id: String!) {
        vimeoVideo(id: { eq: $id }) {
            url
            title
            thumbnail {
                large
            }
            duration
            description
            date
            iframe
            id
        }
    }
`;

const FilmTemplate = ({ data: { vimeoVideo }, pageContext }) => (
    <LayoutComponent>
        <SeoComponent title="Work" />
        <div css={styles.root}>
            {pageContext.previous && (
                <Link to={pageContext.previous}>previous</Link>
            )}
            <VideoComponent video={vimeoVideo} />

            {pageContext.next && <Link to={pageContext.next}>next</Link>}
        </div>
    </LayoutComponent>
);

export default FilmTemplate;
