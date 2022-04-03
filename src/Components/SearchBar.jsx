import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
	const [search, setSearch] = React.useState("");
	return (
		<div className="SearchBar">
			<svg
				className="SearchBar__icon"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
			<input
				className="SearchBar__input"
				type="text"
				value={search}
				placeholder="Search..."
				onChange={(event) => {
					setSearch(event.target.value);
					onSearch(event.target.value);
				}}
			/>
			<svg
				style={{
					display: search.length ? "block" : "none",
				}}
				className="ClearSearch__icon"
				onClick={() => {
					setSearch("");
					onSearch("");
				}}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
					clipRule="evenodd"
				/>
			</svg>
		</div>
	);
};

export default SearchBar;
