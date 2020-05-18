import styled from "styled-components";

export const Container = styled.div`
  padding: 0 3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: 1px solid #20295f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.5rem;
  h3 {
    color: #20295f;
    position: relative;
    top: 10px;
    text-align: center;
    background-color: #f5f5f5;
    padding: 0 50px;
  }
`;

export const Button = styled.button`
  width: calc(100% / 5);
  height: 100px;

  background-color: #20295f;
  margin: 1rem 0.75rem;
  padding: 7px 10px;
  border-radius: 8px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
  &:hover,
  &.active {
    background-color: #ee6b26;
  }
  svg {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 50px;
  }
  span {
    display: flex;
    font-weight: bold;
    justify-content: flex-end;
  }
  @media (max-width: 991px) {
    width: 48%;
    margin-right: 1%;
    margin-left: 1%;
    &:first-child {
      margin-left: 1%;
    }
    &:last-child {
      margin-right: 1%;
    }
  }
  @media (max-width: 667px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;
