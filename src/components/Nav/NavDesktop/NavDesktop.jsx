import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Contenedor = styled.div`
  width: 100%;
  height: 50px;
  background: var(--gradiente-principal);
  padding: 0px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Categoria = styled.button`
  color: black;
  padding: 10px;
  text-transform: capitalize;
`;

const NavDesktop = () => {
  return (
    <>
      <Contenedor>
        <Categoria>ropa</Categoria>
        <Categoria>novedades</Categoria>
        <Categoria>rebajas</Categoria>
      </Contenedor>
      <Dropdown />
    </>
  );
};

export default NavDesktop;
