import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;
  height: 4.375rem;
  background-color: #20295f;
  border-bottom: 3px solid #ee6b26;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBrand = styled.div`
  img {
    width: 85px;
  }
`;

export const Navbar = styled.nav`
  .menu {
    display: flex;
    align-items: center;
    .item {
      padding: 0 0.875rem;
    }
    .divider {
      background-color: #ffffff;
      width: 1px;
      height: 20px;
    }
    .link {
      text-decoration: none;
      color: #ffffff;
    }
    #notification {
      position: relative;
      text-decoration: none;
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      &:hover svg,
      &:hover span {
        opacity: 0.85;
      }
      svg {
        position: absolute;
        top: -3px;
        left: 0;
      }
      span {
        position: relative;
        top: -8px;
        left: 15px;
        color: #ee6b26;
        font-size: 0.7rem;
        background: #ffffff;
        border-radius: 50%;
        font-weight: 700;
        text-align: center;
        width: 20px;
        height: 20px;
        display: block;
        line-height: 21px;
      }
    }
  }
`;
