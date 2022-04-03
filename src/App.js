import { useEffect, useState } from "react";
import "./App.scss";
import Dropdown from "./Components/Dropdown";
import ProductsContainer from "./Components/ProductsContainer";
import SearchBar from "./Components/SearchBar";

function App() {
	const [products, setProducts] = useState([]);
	const [filter, setFilter] = useState("");
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					"https://my-json-server.typicode.com/Ved-X/assignment/orders"
				);
				const data = await response.json();
				setProducts(data);
				setIsLoading(false);
			} catch (error) {
				console.log(error);
				setIsLoading(false);
			}
		};
		fetchProducts();
	}, []);

	const handleFilter = (event) => {
		setFilter(event);
	};
	const handleSearch = (event) => {
		setSearch(event);
	};

	return (
		<div className="App">
			<header>
				<SearchBar onSearch={handleSearch} />
				<Dropdown onFilter={handleFilter} />
			</header>
			<main>
				<ProductsContainer
					data={products}
					filter={filter}
					search={search}
					loading={isLoading}
				/>
			</main>
		</div>
	);
}

export default App;
