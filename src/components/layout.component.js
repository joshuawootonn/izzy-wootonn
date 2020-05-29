import React from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';
import HeaderComponent from './header/header.component';
import dimensions from '../constants/dimensions';
import { desktop, mobile } from './styles';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: themegrayscale;
  }
`;

export const theme = {
    colors: {
        light: '#FFD6CC',
        dark: '#d18d82',
        black: '#2D232E',
        white: '#ffffff',
        grey: '#C49799',
    },
};

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow-x: hidden;
    `,
    contentContainer: css`
        display: flex;
        width: auto;
        padding: 0 20px;

        ${mobile(css`
            margin-top: ${dimensions.mobile.header}px;
            height: calc(100vh - ${dimensions.mobile.header}px);
        `)};
        ${desktop(css`
            margin-top: ${dimensions.header}px;
            height: calc(100vh -${dimensions.header}px);
        `)};
    `,
};

const query = graphql`
    {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

const LayoutComponent = ({ children }) => {
    const data = useStaticQuery(query);

    return (
        <ThemeProvider theme={theme}>
            <div css={styles.root}>
                <GlobalStyles />
                <HeaderComponent />
                <div css={styles.contentContainer}>{children}</div>
            </div>
        </ThemeProvider>
    );
};

export default LayoutComponent;
