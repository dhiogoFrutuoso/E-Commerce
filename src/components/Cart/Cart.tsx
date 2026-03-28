import * as S from "./styles";
import { useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";
import { removeFromCart } from "../../redux/Cart/cart-slice";
import { Product } from "../ProductsList/ProductsList";

interface CartProps {
  showCart: boolean;
  cart: Product[];
  onClose: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, cart, onClose }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.returnButton onClick={onClose}>
        ←
      </S.returnButton>
      <S.Title>Carrinho</S.Title>

      <S.Cart>
        {cart.map((product) => (
          <S.CartItem key={product.id}>
            <S.ProductImage src={product.image} alt={product.title} />
            <S.ProductTitleAndPriceWrapper>
              <S.ProductTitle>{product.title}</S.ProductTitle>
              <S.ProductPrice>R$ {product.price.toFixed(2)}</S.ProductPrice>
            </S.ProductTitleAndPriceWrapper>
            <S.RemoveFromCartButton data-testid='cart-remove'
              onClick={() =>
                dispatch(removeFromCart(product))
              }
            >
              <ImBin />
            </S.RemoveFromCartButton>
          </S.CartItem>
        ))}
      </S.Cart>

      <S.Total data-testid='cart-total'>Total: R$ {total.toFixed(2)}</S.Total>
    </S.Container>
  );
};
