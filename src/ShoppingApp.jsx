import {NavBarComponent} from "./components/NavBarComponent.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {ProductsPage} from "./pages/ProductsPage.jsx";
import {ShoppingCartPage} from "./pages/ShoppingCartPage.jsx";
import {ProductProvider} from "./context/ProductProvider.jsx";
import {CartProvider} from "./context/CartProvider.jsx";

export const ShoppingApp = () => {
	return (
		<ProductProvider>
			<CartProvider>
				<NavBarComponent/>
				<div className="container">
					<Routes>
						<Route path={'/'} element={<ProductsPage/>}/>
						<Route path={'/carrito'} element={<ShoppingCartPage/>}/>
						<Route path={'/*'} element={<Navigate to='/'/>}/>
					</Routes>
				</div>
			</CartProvider>
		</ProductProvider>
	)
}