import React, { useContext } from "react"
import { IdentityContext } from "../Context.jsx"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../images/animal.png"
import CollapseMenu from "../Nav/CollapseMenu"
import BurgerMenu from "../Nav/BurgerMenu"

const Nav = props => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <>
      <NavBar>
        <FlexContainer>
          <Link className="logoLinkStyles" to="/">
            {" "}
            <img className="logoStyles" src={logo} alt="logo" />{" "}
          </Link>
          <NavLinks>
            <Link to="/">Home</Link>
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
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
    </>
  )
}

export default Nav

const NavBar = styled.div`
  position: absolute;
  background: transparent;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 1.4rem;
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`
const Button = styled.button`
  color: #fff;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 18px;
  border-bottom: 1px solid transparent;
  transition: all 300ms linear 0s;
  text-decoration: none;
  font-family: Muli, sans-serif;
  background: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #fdcb6e;
  }
  @media (max-width: 768px) {
    display: none;
  }
`
const NavLinks = styled.div`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #fff;
    text-transform: capitalize;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    font-size: 18px;
    font-family: Muli, sans-serif;
    &:hover {
      color: #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`
