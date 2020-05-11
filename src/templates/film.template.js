import React from 'react';

import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql, Link } from 'gatsby';
import VideoComponent from '../components/video.component';

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
        <h1>Film</h1>
        <VideoComponent video={vimeoVideo} />
        {pageContext.previous && (
            <Link to={pageContext.previous}>previous</Link>
        )}
        {pageContext.next && <Link to={pageContext.next}>next</Link>}
    </LayoutComponent>
);

export default FilmTemplate;
