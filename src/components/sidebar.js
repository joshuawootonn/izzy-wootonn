import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './sidebar.scss';

const Sidebar = ({ siteTitle }) => (
  <sidebar
    className="sidebar"
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </h1>
  </sidebar>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
