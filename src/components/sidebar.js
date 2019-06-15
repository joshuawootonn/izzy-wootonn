import React from "react"
import PropTypes from "prop-types"

import { Link} from "gatsby"
import styled from "styled-components"

import ProfileImage from "./image"

const StyledSidebar = styled.div`
  background: ${props => props.theme.color};
  margin-bottom: 1.45rem;
  width: 300px;
  height: 100vh;
  position: fixed;
`

const Sidebar = ({ siteTitle }) => (
  <StyledSidebar className="sidebar">
    <h1>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
        <ProfileImage />
      </Link>
    </h1>
    <Link
      to="/about/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      About
    </Link>
    <Link
      to="/contact/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      Contact
    </Link>
  </StyledSidebar>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
