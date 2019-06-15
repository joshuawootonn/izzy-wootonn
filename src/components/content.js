import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const Wrapper = styled.div`
  margin-left: 300px;
  width: auto;
`

const Content = ({ children }) => <Wrapper>{children}</Wrapper>

Content.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Content
