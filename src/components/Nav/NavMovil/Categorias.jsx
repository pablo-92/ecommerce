import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: relative;
  left: ${({ currentNav }) => (currentNav == "categorias" ? "0px" : "-100%")};
  transition: var(--transition);
  overflow: hidden;
`;

const BotonesGenero = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--color-gris-secundario);
  box-shadow: 1px 1px 50px 1px var(--color-gris-secundario);
  button {
    flex: 1 1 auto;
    position: relative;
  }
  a {
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-mujer:after {
    content: "";
    width: 1px;
    height: 50%;
    background: var(--color-gris-secundario);
    position: absolute;
    top: 25%;
    right: 0px;
  }
`;

const ListaCategorias = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Categoria = styled.li`
  flex: 1 1 auto;
  height: 80px;
  background: aqua;
  margin: 20px;
  &.btn-inicio {
    height: 50px;
  }
`;

const Categorias = ({ currentNav, setCurrentNav }) => {
  const handleClick = () => {
    setCurrentNav("detalle");
  };
  return (
    /*Cambiar el handle click a cada item categoria al hacer el map*/
    <Nav onClick={handleClick} currentNav={currentNav}>
      <BotonesGenero>
        <button className="btn-mujer">
          <a href="/">mujer</a>
        </button>
        <button>
          <a href="/">hombre</a>
        </button>
      </BotonesGenero>
      <ListaCategorias>
        <Categoria className="btn-inicio"></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
        <Categoria></Categoria>
      </ListaCategorias>
    </Nav>
  );
};

export default Categorias;
