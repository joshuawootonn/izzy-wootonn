import React from 'react';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components/macro';
import { graphql, useStaticQuery } from 'gatsby';
import HeaderComponent from './header/header.component';
import dimensions from '../constants/dimensions';
import { desktop, mobile } from './styles';
import Scrollbar from './Scrollbar';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: themegrayscale;
    }    
    *:focus {
        outline-color:${({ theme }) => theme.colors.dark} !important;        
    }
    *:hover, *:active { 
        outline: none; 
    }
    ::-moz-selection { /* Code for Firefox */
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.dark};
    }    
    ::selection {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.dark};
    }    
`;

export const theme = {
    colors: {
        light: '#FFD6CC',
        dark: '#d18d82',
        darkActive: '#D8A097',
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
    scrollbarContainer: css`
        display: flex;
        width: auto;

        ${mobile(css`
            margin-top: ${dimensions.mobile.header}px;
            height: calc(100vh - ${dimensions.mobile.header}px);
        `)};
        ${desktop(css`
            margin-top: ${dimensions.header}px;
            height: calc(100vh - ${dimensions.header}px);
        `)};
    `,
    contentContainer: css`
        padding: 0 20px;
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

                <div css={styles.scrollbarContainer}>
                    <Scrollbar>{children}</Scrollbar>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default LayoutComponent;
