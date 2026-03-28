import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { productsData } from "./productData";
import userEvent from "@testing-library/user-event";
import { removeFromCart } from "../../redux/Cart/cart-slice";

const mockDispatch = jest.fn()

jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
    useSelector: () => {
      return {
        cart: [] //Simulando um mock do useSelector
      }
    }
  }
});

const cart = productsData.slice(0, 2);

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} onClose={() => {}} />);

    const titleElement = screen.getByRole('heading', { level: 1 });
    const totalElement = screen.getByTestId('cart-total');
    const cartListElement = screen.getByRole('list');

    expect(titleElement).toHaveTextContent('Carrinho');
    expect(totalElement).toHaveTextContent('Total: R$ 0.00');
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it('should render a cart with two products', () => {
    render(<Cart showCart={true} cart={cart} onClose={() => {}} />);

    const productsItemElements = screen.getAllByRole('listitem');
    const firstProductTitleElement = screen.getByText(cart[0].title);
    const secondProductTitleElement = screen.getByText(cart[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitleElement).toBeInTheDocument();
    expect(secondProductTitleElement).toBeInTheDocument();
  });

  it('should remove product when remove button is clicked', () => {
    render(<Cart showCart={true} cart={[productsData[0]]} onClose={() => {}} />);

    const removeProductButton = screen.getByTestId('cart-remove')

    userEvent.click(removeProductButton)

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeFromCart(productsData[0]));
  })
});
