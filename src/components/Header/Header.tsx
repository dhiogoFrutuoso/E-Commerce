import React, { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer,
  );
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer,
  );
  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLoggedIn = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch(login({ name: "Dhiogo Frutuoso", email: "dhiogo@example.com" }));
    } else {
      dispatch(logout());
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.HeaderLoginButton isLoggedIn={isLoggedIn} onClick={handleUserAuth}>
            {isLoggedIn ? "Logout" : "Login"}
            {isLoggedIn ? <FiLogOut /> : <FiLogIn />}
          </S.HeaderLoginButton>
          <S.HeaderCartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.HeaderCartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} onClose={() => setShowCart(false)} cart={cart}/>
    </S.StyledHeader>
  );
};
