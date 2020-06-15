import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
import { CubeGrid } from "styled-loaders-react"
import { Block } from "styled-loaders-react"
import { Provider } from "../Context.jsx"
const Layout = ({ children }) => {
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen)
  }
  const [navbarOpen, setnavbarOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  return (
    <Provider>
      {loading ? (
        <Block color="green" size="60px" duration="5s" />
      ) : (
        <>
          <Nav navbarState={navbarOpen} handleNavbar={handleNavbar} />
          <main> {children} </main>
        </>
      )}
    </Provider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
