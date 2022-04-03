import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import ProductItems from "./ProductItems";
import "./ProductsContainer.scss";

const sortByDate = (data, sortBy) => {
	return data.sort((a, b) => {
		return sortBy
			? new Date(a.date.split("/").reverse().join("/")) -
					new Date(b.date.split("/").reverse().join("/"))
			: new Date(b.date.split("/").reverse().join("/")) -
					new Date(a.date.split("/").reverse().join("/"));
	});
};
const ProductsContainer = ({ data, filter, search, loading }) => {
	const tableHeader = [
		"Order ID",
		"Customer",
		"Address",
		"Product",
		"Date Order",
		"Status",
	];
	const [sortDateByAscending, setSortDateByAscending] = useState(true);
	const [productData, setProductData] = useState(
		sortByDate(data, sortDateByAscending)
	);

	useEffect(() => {
		setProductData(sortByDate(data, sortDateByAscending));
	}, [data, sortDateByAscending, filter, search]);

	return (
		<div className="ProductsContainer">
			<div className="ProductsContainer__Header">
				{tableHeader.map((header, index) => (
					<div key={index} className="Header__title">
						{header === "Date Order" ? (
							<span
								onClick={() => {
									setSortDateByAscending(!sortDateByAscending);
								}}
							>
								{header}
								{sortDateByAscending ? (
									<svg
										className="Header__icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								) : (
									<svg
										className="Header__icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
											clipRule="evenodd"
										/>
									</svg>
								)}
							</span>
						) : (
							<span>{header}</span>
						)}
					</div>
				))}
			</div>
			<div className="ProductsContainer__items-container">
				{loading ? (
					<Loader />
				) : (
					productData
						.filter(
							(product) =>
								(filter.length === 0 || product.status === filter) &&
								(search.length === 0 ||
									product.customer.toLowerCase().includes(search.toLowerCase()))
						)
						.map((product, index) => (
							<div style={{ width: "100%" }} key={index}>
								<ProductItems data={product} />
								<hr />
							</div>
						))
				)}
			</div>
		</div>
	);
};

export default ProductsContainer;
