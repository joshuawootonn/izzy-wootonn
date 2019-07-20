import React from "react"
import PropTypes from "prop-types"

import * as gatsby from "gatsby"
import styled from "styled-components"

import ProfileImage from "./image"

const Sidebar = styled.div`
  background: ${props => props.theme.color};
  margin-bottom: 1.45rem;
  width: 160px;
  height: 100vh;
  position: fixed;
`

const Link = styled(gatsby.Link)`
  display: block;
  color: 'pink';
  text-decoration: none;

`

const SidebarComponent = ({ siteTitle }) => (
  <Sidebar className="sidebar">
    <h1>
      <Link
        to="/cool image integrationscool image integrations"
      >
        {siteTitle}
        <ProfileImage />
      </Link>
    </h1>
    <Link
      to="/about/"
    >
      About
    </Link>
    <Link
      to="/contact/"
    >
      Contact
    </Link>
  </Sidebar>
)

SidebarComponent.propTypes = {
  siteTitle: PropTypes.string,
}

SidebarComponent.defaultProps = {
  siteTitle: ``,
}

export default SidebarComponent
