import {CardComponent} from "../components/CardComponent.jsx";
import {ProductContext} from "../context/ProductContext.js";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.js";

export const ProductsPage = () => {

	const {productData} = useContext(ProductContext);
	const {addProduct, removeProduct} = useContext(CartContext);

	return (
		<>
			{productData.length > 0 && (
				productData.map((prod) => (
					<CardComponent
						key={prod.id}
						id={prod.id}
						category={prod.category}
						image={prod.image}
						title={prod.title}
						description={prod.description}
						price={prod.price}
						handleAdd={() => addProduct(prod)}
						handleRemove={() => removeProduct(prod.id)}
					/>
				)))}
		</>
	)
}