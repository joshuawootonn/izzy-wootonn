import React from 'react';

import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import Sidebar from './sidebar.component';
import ContentComponent from './content.component';
import { Theme } from '../constants/types';

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

const theme: Theme = {
    colors: {
        light: '#D9B8C4',
        medium: '#957186',
        dark: '#703D57',
        black: '#2D232E',
        white: '#ffffff',
        grey: '#C49799',
    },
};

const Wrapper = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    flex-direction: row;
    min-height: 100vh;
`;

export interface Props {
    children: React.ReactElement | React.ReactElement[];
}

const LayoutComponent = ({ children }: Props) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <ThemeProvider theme={theme}>
                <Wrapper>
                    <GlobalStyles />
                    <Sidebar siteTitle={data.site.siteMetadata.title} />
                    <ContentComponent children={children} />
                </Wrapper>
            </ThemeProvider>
        )}
    />
);

export default LayoutComponent;
