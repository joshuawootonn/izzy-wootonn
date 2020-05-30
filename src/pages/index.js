import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import VideoList from '../components/filmList.component';
import { graphql } from 'gatsby';

export const query = graphql`
    {
        allContentfulFilm(sort: { fields: [date], order: DESC }) {
            nodes {
                id
                title
                description {
                    description
                }
                date
                vimeoId
                image {
                    fluid(maxWidth: 2000) {
                        ...GatsbyContentfulFluid_tracedSVG
                    }
                }
            }
        }
    }
`;

const Film = ({
    data: {
        allContentfulFilm: { nodes: videos },
    },
}) => {
    return (
        <LayoutComponent>
            <SeoComponent title="Film" />
            <VideoList videos={videos} />
        </LayoutComponent>
    );
};

export default Film;
