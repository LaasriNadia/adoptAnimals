import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import Nav from '../Nav/index'
const Layout = ({ children }) => {
  return (
    <>
       <Nav />
      <main> {children} </main>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
