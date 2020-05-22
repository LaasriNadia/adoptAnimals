import React from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
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
