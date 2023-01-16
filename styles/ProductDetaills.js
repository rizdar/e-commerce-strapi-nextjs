import styled from 'styled-components';

export const DetailStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  img {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 50%;
    }
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 2rem;
    img {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0rem;

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.5rem;
  }
  p {
    width: 1rem;
    text-align: center;
  }
  span {
    color: var(--secondary);
  }
  svg {
    color: #494949;
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--primary);
  color: white;
  font-weight: 500;
`;
