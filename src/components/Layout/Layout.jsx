import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
import { CubeGrid } from "styled-loaders-react"
import { Provider, IdentityContext } from "../Context.jsx"
const Layout = ({ children }) => {
  const handleNavbar = () => {
    setnavbarOpen(!navbarOpen)
  }
  const [navbarOpen, setnavbarOpen] = useState(false)
  const [loading, setloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    }, 1500)
  }, [])

  return (
    <Provider>
      {loading ? (
        <div
          style={{
            marginTop:"310px"
          }}
        >
          <CubeGrid color="#fdcb6e" />
        </div>
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
