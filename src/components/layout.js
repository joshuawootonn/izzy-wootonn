import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import Content from './content'

const Wrapper = styled.div`

display: flex;
margin: 0;
padding: 0;
flex-direction: row;
min-height: 100vh;

`

const Layout = ({ children }) => (
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
      <Wrapper>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <Content children={children} /> 
      </Wrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
