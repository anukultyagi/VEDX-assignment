import React from "react";
import "./ProductItems.scss";

const ProductItems = ({ data }) => {
	const {
		order_id,
		customer,
		country,
		address,
		product_title,
		product_description,
		date,
		status,
	} = data;
	return (
		<div className="ProductItems">
			<span className="Item__orderId">{`#${order_id}`}</span>
			<span className="Item__customer">{customer}</span>
			<span className="Item__address">
				<div>{country}</div>
				<div>{address}</div>
			</span>
			<span className="Item__details">
				<div>{product_title}</div>
				<div>{product_description}</div>
			</span>
			<span className="Item__date">{date}</span>
			<span>
				<div className={`Item__status Status__${status}`}>{status}</div>
			</span>
		</div>
	);
};
export default ProductItems;
