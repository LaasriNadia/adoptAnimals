import React, { useContext } from "react"
import { IdentityContext } from "../Context.jsx"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/compass-logo.svg"
import "./navStyles.css"
const Nav = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  const handleClick = () => {
    console.log(user)
  }
  return (
    <nav>
      <div className="nav__items">
        <a className="nav__item--left" href="/">
          <img src={logo} className="nav__item--logo" alt="Logo" />
        </a>
        <Link
          to="/animals/all"
          className={
            window.location.href.indexOf("animals/all") > 0 ||
            window.location.href.indexOf("category") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Home
        </Link>
        <Link
          to="/addpet/"
          className={
            window.location.href.indexOf("AddPet") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Add Pet
        </Link>
        <Link
          to="/aboutus/"
          className={
            window.location.href.indexOf("aboutus") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          About Us
        </Link>
        <Link
          to="/contact/"
          className={
            window.location.href.indexOf("Contact") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
        >
          Contact
        </Link>
        <button onClick={() => handleClick()}>test if the user is there</button>

        {!user ? (
          <button
            onClick={() => {
              netlifyIdentity.open()
            }}
          >
            Log in{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              netlifyIdentity.logout()
            }}
          >
            Log out{" "}
          </button>
        )}
      </div>
    </nav>
  )
}

export default Nav
