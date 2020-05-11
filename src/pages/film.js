import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import VideoList from '../components/videoList.component';
import { graphql } from 'gatsby';

export const query = graphql`
    {
        allVimeoVideo {
            nodes {
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
            }
        }
    }
`;

const Film = ({
    data: {
        allVimeoVideo: { nodes: videos },
    },
}) => {
    return (
        <LayoutComponent>
            <SeoComponent title="Work" />

            <VideoList videos={videos} />
        </LayoutComponent>
    );
};

export default Film;
