export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

type State = { products: Product[] };

type Action =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; id: string };

export const initialState: State = {
  products: [
    { id: "1", name: "Phone", price: 1500, quantity: 5 },
    { id: "2", name: "Laptop", price: 1000, quantity: 2 },
    { id: "3", name: "Headphones", price: 100, quantity: 10 },
    { id: "4", name: "Tablet", price: 800, quantity: 3 },
    { id: "5", name: "Keyboard", price: 200, quantity: 4 },
  ],
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { products: [...state.products, action.payload] };
    case "REMOVE_PRODUCT":
      return {
        products: state.products.filter((p) => p.id !== action.id),
      };
    default:
      return state;
  }
}
