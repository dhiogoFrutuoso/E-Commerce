import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { Product } from "../ProductsList/ProductsList";
import { addToCart, removeFromCart } from "../../redux/Cart/cart-slice";

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );
  const dispatch = useDispatch();

  const isProductOnCart = cart.find((productOnCart) => productOnCart.id === product.id);

  function handleAddProductToCart() {
    const isInCart = cart.some((item) => item.id === product.id);

    if (!isInCart) {
      dispatch(addToCart(product))
    }
  }

  function handleRemoveProductFromCart() {
    dispatch(removeFromCart(product));
  }

  return (
    <S.Card key={product.id}>
      <S.ProductImage src={product.image} alt={product.title} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }, (_, i) =>
            i < Math.floor(product.rating.rate)
              ? <AiFillStar key={i} />
              : <AiOutlineStar key={i} />
          )}
          {product.rating.rate.toFixed(1)}
        </S.Review>
        <S.Price>R$ {product.price.toFixed(2)}</S.Price>
      </S.ReviewPriceContainer>
      {isProductOnCart ? 
        (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) 
        : 
        (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho
            <FiShoppingCart />
          </S.AddToCartButton>
        )
      }

    </S.Card>
  );
};