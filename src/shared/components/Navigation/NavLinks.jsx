import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../";
const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <UL className="nav-links">
      <li>
        <NavLink to="/" exact>
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>Logout</button>
        </li>
      )}
    </UL>
  );
};

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    margin: 1rem;
  }

  a {
    border: 1px solid transparent;
    color: #292929;
    text-decoration: none;
    padding: 0.5rem;
  }

  a:hover,
  a:active,
  a.active {
    background: #f8df00;
    border-color: #292929;
    color: #292929;
  }

  button {
    cursor: pointer;
    border: 1px solid #292929;
    color: #292929;
    background: transparent;
    padding: 0.5rem;
    font: inherit;
  }

  button:focus {
    outline: none;
  }

  button:hover,
  button:active {
    background: #292929;
    color: white;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    li {
      margin: 0 0.5rem;
    }

    a {
      color: white;
      text-decoration: none;
    }

    button {
      border: 1px solid white;
      color: white;
      background: transparent;
    }

    button:hover,
    button:active {
      background: #f8df00;
      color: #292929;
    }
  }
`;
export default NavLinks;
