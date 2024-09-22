import {CartContext} from "./CartContext.js";
import {useReducer} from "react";

export const CartProvider = ({children}) => {

	const initialState = [];
	const shoppingReducer = (state = initialState, action = {}) => {
		switch (action.type) {

			case '[CART] Add Product':
				return [...state, action.payload];

			case '[CART] Remove Product':
				return state.filter(product => product.id !== action.payload);

			case '[CART] Increment Quantity': // TODO: Falta la logica de Increment
				return state.map(product => {
					if (product.id === action.payload) {
						return {...product, quantity: product.quantity + 1}
					}
					return product
				})

			case '[CART] Decrement Quantity': // TODO: Falta la logica de Decrement
				return state.map(product => {
					if (product.id === action.payload && product.quantity > 1) {
						return {...product, quantity: product.quantity - 1}
					}
					return product
				})
			case '[CART] Clear':
				return [];
			default:
				return state;
		}
	}

	const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState);

	const addProduct = (product) => {
		product.quantity = 1;
		const action = {
			type: '[CART] Add Product',
			payload: product
		}
		dispatch(action)
	}

	const removeProduct = (id) => {
		const action = {
			type: '[CART] Remove Product',
			payload: id
		}
		dispatch(action);
	}

	const incrementQuantity = (id) => {
		const action = {
			type: '[CART] Increment Quantity',
			payload: id
		}
		dispatch(action);
	}

	const decrementQuantity = (id) => {
		const action = {
			type: '[CART] Decrement Quantity',
			payload: id
		}
		dispatch(action);
	}

	const clearShoppingList = () => {
		dispatch({type: '[CART] Clear'});
	};


	return (
		<CartContext.Provider
			value={{shoppingList, addProduct, removeProduct, incrementQuantity, decrementQuantity, clearShoppingList}}>
			{children}
		</CartContext.Provider>
	)
}