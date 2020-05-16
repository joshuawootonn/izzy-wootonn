import React from 'react';

import LayoutComponent from '../components/layout.component';
import SeoComponent from '../components/seo.component';
import { graphql, Link } from 'gatsby';
import { css } from 'styled-components/macro';
import GraphicDesignComponent from '../components/graphicDesign.component.js';

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
        contentfulGraphicDesign(id: { eq: $id }) {
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
                fluid(maxWidth: 2000, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                }
            }
        }
    }
`;

const GraphicDesignTemplate = ({
    data: { contentfulGraphicDesign },
    pageContext,
}) => (
    <LayoutComponent>
        <SeoComponent
            title={`Graphic Design - ${contentfulGraphicDesign.title}`}
        />
        <div css={styles.root}>
            {pageContext.previous && (
                <Link to={pageContext.previous}>previous</Link>
            )}
            <GraphicDesignComponent graphicDesign={contentfulGraphicDesign} />

            {pageContext.next && <Link to={pageContext.next}>next</Link>}
        </div>
    </LayoutComponent>
);

export default GraphicDesignTemplate;
