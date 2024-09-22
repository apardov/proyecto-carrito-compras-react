import {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {ProductContext} from "./ProductContext.js";


export const ProductProvider = ({children}) => {

	const urlBase = 'https://fakestoreapi.com/products';

// const [products, setProducts] = useState('');
	const [productData, setProductData] = useState([]);

	useEffect(() => {
		const fetchStoreProducts = async () => {
			try {
				const response = await fetch(urlBase);
				const data = await response.json();
				setProductData(data)
			} catch (e) {
				Swal.fire(
					{
						icon: "error",
						title: 'Error!',
						text: 'Hubo un problema al cargar los productos'
					}
				)
				console.error(e);
			}
		}
		fetchStoreProducts();
	}, [productData]);
	return (

		<ProductContext.Provider value={{productData}}>
			{children}
		</ProductContext.Provider>

	)
}