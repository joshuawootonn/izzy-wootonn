import React from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';
import HeaderComponent from './header.component';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-family: 'Quicksand', sans-serif;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: themegrayscale;
  }
`;

const theme = {
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
        margin: 0;
        padding: 0;
        flex-direction: column;
        min-height: 100vh;
    `,
    contentRoot: css`
        width: auto;
        padding: 0 20px;
        position: relative;
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
                {/*<Sidebar siteTitle={data.site.siteMetadata.title} />*/}
                <HeaderComponent />
                <div css={styles.contentRoot}>{children}</div>
            </div>
        </ThemeProvider>
    );
};

export default LayoutComponent;
