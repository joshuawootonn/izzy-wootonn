import React from "react"

import * as gatsby from "gatsby"
import styled from "styled-components"

import ProfileImage from "./image"
import { Theme } from "graphql-playground-html/dist/render-playground-page";
import { StyledThemeProp as STP } from "../constants/types";

const Sidebar = styled.div`
  background: ${(props: STP) => props.theme.colors.light};
  margin-bottom: 1.45rem;
  width: 160px;
  height: 100vh;
  padding: 0px 16px;
  position: fixed;
`

const Link = styled(gatsby.Link)`
  display: block;
  color: ${(props: STP) => props.theme.colors.white};
  text-decoration: none;


`

export interface Props {
  siteTitle: string;
}

const SidebarComponent = ({ siteTitle = '' }: Props) => (
  <Sidebar className="sidebar">
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
    <Link
      to="/"
    >
      Work
    </Link>
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


export default SidebarComponent
