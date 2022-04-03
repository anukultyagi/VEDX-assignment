import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ onFilter }) => {
	const options = useMemo(() => {
		return ["Completed", "Delivered", "Prepared", "All"];
	}, []);
	const [selected, setSelected] = useState(options.length - 1);
	const [isOpen, setIsOpen] = useState(false);

	const DropdownRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (DropdownRef.current && !DropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [DropdownRef]);

	const handelOpenDropdown = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (selected !== -1) {
			onFilter(options[selected] === "All" ? "" : options[selected]);
		}
	}, [options, selected, onFilter]);

	return (
		<div className="Dropdown">
			<div className="Dropdown__input" onClick={handelOpenDropdown}>
				<svg
					className="Dropdown__icon"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
					/>
				</svg>
				{options[selected]}
			</div>
			<div
				ref={DropdownRef}
				className="Dropdown__input-container"
				style={{
					display: isOpen ? "block" : "none",
				}}
			>
				{options.map((option, index) => (
					<div
						key={index}
						onClick={(event) => {
							setSelected(index);
							setIsOpen(false);
						}}
						className={`Dropdown__option ${index === selected && "selected"}`}
					>
						{option}
					</div>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
