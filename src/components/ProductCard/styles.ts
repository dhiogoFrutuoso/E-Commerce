import styled from "styled-components";

export const Card = styled.article`
  background-color: aliceblue;
  width: 100%;
  padding: 2rem;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 0 0  5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;

  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-family: 500;
  font-size: 1.2rem;

  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: auto
`;

export const Review = styled.span`
  display: flex;
  align-items: center;
  gap: 0.1rem;
`;

export const Price = styled.strong``;

export const AddToCartButton = styled.button`
  height: 30px;
  width: 100%;
  padding: 0 1rem;
  font-size: 0.75rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0 auto;
  margin-top: 1rem;

  svg {
    font-size: 0.7rem;
  }
`;

export const RemoveFromCartButton = styled.button`
  height: 30px;
  width: 100%;
  padding: 0 1rem;
  font-size: 0.75rem;
  background-color: violet;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin: 0 auto;
  margin-top: 1rem;

  svg {
    font-size: 0.7rem;
  }
`;