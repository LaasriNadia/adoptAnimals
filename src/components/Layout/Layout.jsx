import React from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
// const { Provider } = require("../Context.jsx")
import { Provider, IdentityContext } from "../Context.jsx"

const Layout = ({ children }) => {
  return (
    <Provider>
      <Nav />
      <main> {children} </main>
    </Provider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
