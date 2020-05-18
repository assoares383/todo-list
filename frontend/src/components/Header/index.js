import React, { useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";

import { Container, NavBrand, Navbar } from "./styles";

import logo from "../../assets/images/logo.png";

export default function Header({ lateCount, clickNotification }) {
  return (
    <Container>
      <NavBrand>
        <img src={logo} alt="TodoList" />
      </NavBrand>
      <Navbar>
        <ul className="menu">
          <li className="item">
            <a href="#" className="link">
              Início
            </a>
          </li>
          <li className="divider"></li>
          <li className="item">
            <a href="#" className="link">
              Nova Tarefa
            </a>
          </li>
          <li className="divider"></li>
          <li className="item">
            <a href="#" className="link">
              Sincronizar Celular
            </a>
          </li>
          <li className="divider"></li>
          <li className="item">
            <button id="notification" onClick={clickNotification}>
              <BsBellFill color="#ee6b26" size={24} />
              <span>{lateCount}</span>
            </button>
          </li>
        </ul>
      </Navbar>
    </Container>
  );
}
