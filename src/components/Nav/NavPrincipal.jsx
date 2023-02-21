import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import NavMovil from "./NavMovil/NavMovil";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0px 15px;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 768px) {
    height: 60px;
    padding: 0px 32px;
    .icono-busqueda {
      display: none;
    }
  }
`;

const BtnNavMovil = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  span {
    width: 20px;
    height: 2px;
    background: white;
    margin: 2px;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const LogoNav = styled.p`
  padding: 0px 20px;
  font-size: 2rem;
  margin-right: auto;
  @media (min-width: 1024px) {
    padding-left: 0px;
  }
`;
const IconoNav = styled.button`
  height: 100%;
  color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  svg {
    stroke-width: 3;
    width: 22px;
    height: 22px;
  }
  @media (min-width: 768px) {
    padding: 15px;
  }
`;

const BusquedaNavPrincipal = styled.form`
  flex: 1 1 auto;
  height: 100%;
  padding: 10px 15px;
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
  div {
    background: white;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    display: flex;
    color: black;
    input {
      flex: 1 1 auto;
      height: 100%;
      margin-left: 20px;
    }
    button {
      width: 50px;
      height: 100%;
    }
    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
const BotonGenero = styled.button`
  width: 115px;
  height: 100%;
  display: none;
  color: white;
  font-weight: 700;
  a {
    text-transform: uppercase;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <BtnNavMovil onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </BtnNavMovil>
      <LogoNav>asos</LogoNav>
      <BotonGenero>
        <a href="/">mujer</a>
      </BotonGenero>
      <BotonGenero>
        <a href="/">hombre</a>
      </BotonGenero>
      <BusquedaNavPrincipal>
        <div>
          <input type="search" name="" id="" />
          <button>
            <FiSearch />
          </button>
        </div>
      </BusquedaNavPrincipal>
      <IconoNav className="icono-busqueda">
        <FiSearch />
      </IconoNav>
      <IconoNav>
        <FiUser />
      </IconoNav>
      <IconoNav>
        <FiHeart />
      </IconoNav>
      <IconoNav>
        <FiShoppingBag />
      </IconoNav>
      <NavMovil isOpen={isOpen} setIsOpen={setIsOpen} />
    </Nav>
  );
};

export default NavPrincipal;
