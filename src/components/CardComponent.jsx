import '../styles/CardComponent.css';
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../context/CartContext.js";

export const CardComponent = ({id, category, image, title, description, price, handleAdd, handleRemove}) => {

	const [button, setButton] = useState(false);
	const {shoppingList} = useContext(CartContext);

	const addProduct = () => {
		handleAdd();
		setButton(true);
	}
	const removeProduct = () => {
		handleRemove();
		setButton(false);
	}


	useEffect(() => {
		const checkAdded = () => {
			const added = shoppingList.some(prod => prod.id === id)
			setButton(added);
		}
		checkAdded();
	}, []);

	return (
		<>
			<div className="card mt-5">
				<h5 className="card-header">{category}</h5>
				<div className="card-body">
					<img src={image} className="card-img" alt={title}/>
					<div className="card-content">
						<h5 className="card-title">{title}</h5>
						<p className="card-text">{description}</p>
					</div>
				</div>
				<div className={'card-footer'}>
					<h6 className={'card-price'}>${price}</h6>
					{
						button ? (
							<a className="btn btn-danger remove-button"
							   onClick={removeProduct}>Remove</a>
						) : (
							<a className="btn btn-success add-button"
							   onClick={addProduct}>Add</a>
						)
					}
				</div>
			</div>
		</>
	)
}
