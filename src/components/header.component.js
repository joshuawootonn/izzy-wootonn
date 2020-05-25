import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { css } from 'styled-components/macro';
import dimensions from '../constants/dimensions';
import zIndex from '../constants/zIndex';

const styles = {
    root: css`
        height: ${dimensions.header}px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: fixed;
        z-index: ${zIndex.header};
        width: 100vw;
    `,
};

const query = graphql`
    {
        file(relativePath: { eq: "thumbnail.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;

const HeaderComponent = () => {
    const data = useStaticQuery(query);
    return (
        <div css={styles.root}>
            <Link to="/">
                <Img
                    css={css`
                        width: 70px;
                        header: auto;
                    `}
                    fluid={data.file.childImageSharp.fluid}
                />
            </Link>
            <div>
                <Link to="/film">Film</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default HeaderComponent;
