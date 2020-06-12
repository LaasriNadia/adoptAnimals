import React,{useState} from "react"
import PropTypes from "prop-types"
import "./layoutStyles.css"
import Nav from "../Nav/IndexNav.jsx"
import { Provider, IdentityContext } from "../Context.jsx"
const Layout = ({ children }) => {
 const handleNavbar = () => {
    setnavbarOpen(!navbarOpen);
  }
  const [navbarOpen, setnavbarOpen] = useState(false)
  return (
    <Provider>
      <Nav 
       navbarState={navbarOpen} 
       handleNavbar={handleNavbar}
      />
      <main> {children} </main>
    </Provider>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout
