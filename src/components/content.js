import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './content.scss';

const Content = ({ children }) => (
  <div
    className="content"
  >
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
