import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { IdentityContext } from "../Context.jsx"

import { useSpring } from "react-spring"

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  if (props.navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <Link onClick={props.handleNavbar} to="/">
            Home
          </Link>
          <Link onClick={props.handleNavbar} to="/addpet/">
            Add Pet
          </Link>
          <Link onClick={props.handleNavbar} to="/aboutus/">
            About Us
          </Link>
          <Link onClick={props.handleNavbar} to="/contact/">
            Contact
          </Link>
          {!user ? (
            <Button
              onClick={() => {
                netlifyIdentity.open()
              }}
            >
              Log in{" "}
            </Button>
          ) : (
            <Button
              onClick={() => {
                netlifyIdentity.logout()
              }}
            >
              Log out{" "}
            </Button>
          )}
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu

const CollapseWrapper = styled.div`
  background: #bac9c8;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 1;
  @media (min-width: 768px) {
    display: none;
  }
`
const Button = styled.button`
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 300ms linear 0s;
  text-decoration: none;
  background: transparent;
  font-size: 18px;
  padding-top: 5px;
  font-family: Muli, sans-serif;
  &:hover {
    color: #fdcb6e;
  }
`
const NavLinks = styled.div`
text-align: center;
display: flex;
flex-direction: column;
}
  & a {
    font-size: 18px;
    line-height: 2;
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: 600;
    transition: all 300ms linear 0s;
    font-family: Muli, sans-serif;
    &:hover {
      color: #fdcb6e;
    }
  }
`
