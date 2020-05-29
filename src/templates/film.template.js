import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql } from 'gatsby';
import FilmComponent from '../components/film.component';

export const query = graphql`
    query($id: String!) {
        vimeoVideo(id: { eq: $id }) {
            url
            title
            thumbnail {
                large
            }

            img {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
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
        <SeoComponent
            title={vimeoVideo.title}
            description={vimeoVideo.description}
        />
        <FilmComponent
            video={vimeoVideo}
            onNext={pageContext.next}
            onPrevious={pageContext.previous}
        />
    </LayoutComponent>
);

export default FilmTemplate;
