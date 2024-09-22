import {CartContext} from "../context/CartContext.js";
import {useContext} from "react";
import Swal from "sweetalert2";

export const ShoppingCartPage = () => {

	const {
		shoppingList,
		removeProduct,
		incrementQuantity,
		decrementQuantity,
		clearShoppingList
	} = useContext(CartContext);

	const totalBuy = () => {
		return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
	}

	const handlePurchase = () => {
		const producPurchased = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n');
		Swal.fire({
				icon: 'success',
				title: 'La compra se ha realizado con éxito',
				html: `<p>Has comprado: </p> <pre>${producPurchased}</pre>`
			}
		)
		clearShoppingList();
	}

	return (
		<>
			<table className="table text-center">
				<thead>
				<tr>
					<th scope="col-4">Nombre</th>
					<th scope="col-2">Precio</th>
					<th scope="col-3">Cantidad</th>
					<th scope="col-3">Eliminar</th>
				</tr>
				</thead>
				<tbody>
				{
					shoppingList.map(product => (
						<tr key={product.id}>
							<th className={'pt-4'}>{product.title}</th>
							<td className={'pt-4'}>{product.price}</td>
							<td className={'pt-4'}>
								<button
									className={'btn btn-outline-danger me-2'}
									onClick={() => decrementQuantity(product.id)}
								>-
								</button>
								<button
									className={'btn btn-secondary me-2'}
								>{product.quantity}
								</button>
								<button className={'btn btn-outline-danger'}
								        onClick={() => incrementQuantity(product.id)}
								>+
								</button>
							</td>
							<td>
								<button
									className={'btn btn-danger'}
									onClick={() => removeProduct(product.id)}>
									Delete
								</button>
							</td>
						</tr>
					))}
				<tr>
					<th><b>TOTAL:</b></th>
					<td><b>${totalBuy()}</b></td>
					<td></td>
					<td></td>
				</tr>
				</tbody>
			</table>
			<div className="d-grid gap-2 col-6 mx-auto mt-4">
				<button
					className="btn btn-primary"
					type="button"
					onClick={handlePurchase}
				>Buy
				</button>
			</div>
		</>
	)
}