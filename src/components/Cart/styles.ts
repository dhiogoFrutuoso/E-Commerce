import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${props => props.showCart ? '0' : '-500px'};

  width: 500px;
  height: 100vw;
  background-color: white;

  padding: 2rem;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.3s ease-in-out;
`

export const returnButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  font-size: 1.2rem;
  cursor: pointer;
`

export const Title = styled.h1`
  color: black;
`

export const Cart = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  height: 78vh;
  overflow-y: auto;
`

export const Total = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: black;
  margin-top: 1rem;
`

export const CartItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 1rem;

  box-shadow: 0 0  5px rgba(0, 0, 0, 0.15);
`

export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
`

export const ProductTitleAndPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductTitle = styled.p`
  font-size: 0.9rem;
  color: black;
  font-weight: 600;
`

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  color: black;
`

export const RemoveFromCartButton = styled.button`
  background-color: transparent;
  height: 45px;
  font-size: 2rem;
  border-radius: 1rem;
  color: violet;
  border: none;
  padding: 0.5rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0 0 0 auto;
`