import React from 'react';
import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql } from 'gatsby';
import GraphicDesignList from '../components/graphicDesignList.component';

export const query = graphql`
    {
        allContentfulGraphicDesign {
            nodes {
                id
                title
                description {
                    id
                    internal {
                        content
                    }
                }
                media {
                    id
                    fluid {
                        ...GatsbyContentfulFluid_withWebp
                    }
                }
            }
        }
    }
`;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const GraphicDesign = ({
    data: {
        allContentfulGraphicDesign: { nodes },
    },
}) => (
    <LayoutComponent>
        <SeoComponent title="Work" />

        <GraphicDesignList graphicDesigns={nodes} />
    </LayoutComponent>
);

export default GraphicDesign;
