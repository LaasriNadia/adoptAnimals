import React, { useContext } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { IdentityContext } from "../Context.jsx"

import { useSpring, animated } from "react-spring"

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)
  if (props.navbarState === true) {
    return (
      <CollapseWrapper
       
      >
        <NavLinks>
          <Link to="/animals/all">Home</Link>
          <Link to="/addpet/">Add Pet</Link>
          <Link to="/aboutus/">About Us</Link>
          <Link to="/contact/">Contact</Link>
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
  @media (min-width: 768px) {
    display: none;
  }
`
const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 300ms linear 0s;
  text-decoration: none;
  background: transparent;
  font-size: 18px;
  font-family: Muli, sans-serif;
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
    text-transform: uppercase;
    text-decoration: none;
    font-weight: 600;
    font-family: Muli, sans-serif;
    &:hover {
      color: #fdcb6e;
    }
  }
`
