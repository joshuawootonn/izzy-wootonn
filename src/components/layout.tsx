import React from "react"

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import Content from "./content"

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
    -moz-osx-font-smoothing: grayscale;
  }
`

const Theme = {
  color: "pink",
}

const Wrapper = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  flex-direction: row;
  min-height: 100vh;
`

export interface Props {
  children: React.ReactChild
}

const Layout = ({ children }: Props) => (
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
      <ThemeProvider theme={Theme}>
        <Wrapper>
          <GlobalStyles />
          <Sidebar siteTitle={data.site.siteMetadata.title} />
          <Content children={children} />
        </Wrapper>
      </ThemeProvider>
    )}
  />
)

export default Layout
