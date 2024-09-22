import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.js";
import '../styles/NavBarComponent.css';

export const NavBarComponent = () => {

	const {shoppingList} = useContext(CartContext);
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<NavLink to={'/'} className="navbar-brand" href="#">MarketApp</NavLink>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
					        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
					        aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item-product">
								<NavLink to={'/'} className="nav-link active" aria-current="page">Productos</NavLink>
							</li>
						</ul>
						<ul className="navbar-nav carrito">
							<li className="nav-item">
								<NavLink to={'/'} className="nav-link active" aria-current="page">Carrito</NavLink>
							</li>
						</ul>
					</div>
					<NavLink className={'carrito-mobile'} to={'/carrito'}>
						<Badge badgeContent={shoppingList.length} color="primary">
							<ShoppingCartIcon/>
						</Badge>
					</NavLink>
				</div>
			</nav>
		</>
	)
}