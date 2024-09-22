import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/main.css'
import {ShoppingApp} from "./ShoppingApp.jsx";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<ShoppingApp/>
		</StrictMode>,
	</BrowserRouter>
)
