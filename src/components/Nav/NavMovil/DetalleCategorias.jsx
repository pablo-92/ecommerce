import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  position: absolute;
  left: ${({ currentNav }) => (currentNav == "detalle" ? "0px" : "100%")};
  transition: var(--transition);
  overflow: hidden;
  color: black;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  align-items: center;
  box-shadow: 1px 1px 50px 1px var(--color-gris-secundario);
`;
const BtnAtras = styled.button`
  width: 50px;
  height: 100%;
  svg {
    stroke-width: 0.6;
    width: 22px;
    height: 22px;
  }
`;

const Titulo = styled.h3`
  flex: 1 1 auto;
  height: auto;
  text-align: center;
  position: absolute;
  left: 0px;
  width: 100%;
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 1px;
`;

const MiniCategoria = styled.ul`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 30px;
`;

const TituloItem = styled.h4`
  width: 100%;
  padding: 25px 0px;
  background: var(--color-gris);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const ListaItems = styled.ul`
  padding: 20px;
`;

/*APLICAR EXTENDING STYLES DE STYLED COMPONENTS CUANDO YA TENGA LOS DATOS DEL FECTH */
const ItemSimple = styled.li`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid var(--color-gris);
  position: relative;
  div {
    width: 40px;
    min-width: 40px;
    height: 40px;
    background: var(--color-gris);
    margin-right: 15px;
    border-radius: 50%;
    img {
      border-radius: 50%;
    }
  }
  span {
    text-transform: capitalize;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

const DetalleCategorias = ({ currentNav, setCurrentNav }) => {
  const handleClick = () => {
    setCurrentNav("categorias");
  };
  return (
    <Nav currentNav={currentNav}>
      <Header onClick={handleClick}>
        <BtnAtras>
          <BsArrowLeft></BsArrowLeft>
        </BtnAtras>
        <Titulo>novedades</Titulo>
      </Header>
      <MiniCategoria>
        <li>
          <TituloItem>novedades</TituloItem>
          <ListaItems>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
          </ListaItems>
        </li>
        <li>
          <TituloItem>novedades</TituloItem>
          <ListaItems>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
          </ListaItems>
        </li>
        <li>
          <TituloItem>novedades</TituloItem>
          <ListaItems>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
            <ItemSimple>
              <div>
                <img src="" alt="" />
              </div>
              <span>nombre item</span>
            </ItemSimple>
          </ListaItems>
        </li>
      </MiniCategoria>
    </Nav>
  );
};

export default DetalleCategorias;
