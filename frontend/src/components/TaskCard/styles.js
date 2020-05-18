import styled from "styled-components";

export const Card = styled.div`
  width: 18%;
  height: 220px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  border-radius: 10px;
  margin: 10px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    opacity: 0.85;
  }
`;

export const TopCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 70px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    padding: 25px 0;
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  span,
  strong {
    font-size: 0.825rem;
  }
  strong {
    color: #ee6b26;
    font-weight: bold;
  }
  span {
    color: #707070;
  }
`;
