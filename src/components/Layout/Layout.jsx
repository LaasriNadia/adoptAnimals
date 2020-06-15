import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
import Spinner from "../Spinner.jsx"
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
        <div className="loader_container">
          <Spinner />
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
