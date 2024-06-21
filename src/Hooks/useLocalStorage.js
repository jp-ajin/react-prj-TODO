import React from "react";

function useLocalStorage(itemName, initialValue) {
	const [item, setItem] = React.useState(initialValue);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			try {
				const localStorageTodos = localStorage.getItem(itemName);
				let parsedItem;

				// validación si el local storage viene vacio
				if (!localStorageTodos) {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				} else {
					parsedItem = JSON.parse(localStorageTodos);
					setItem(parsedItem);
				}

				setLoading(false);
			} catch (error) {
				setError(true); // enviar error o true
				setLoading(false);
			}
		}, 3000);
	}, []);

	//función que actualiza el estado y el local storage
	const saveItem = (newItem) => {
		localStorage.setItem(itemName, JSON.stringify(newItem));
		setItem(newItem);
	};

	return {
		item,
		saveItem,
		loading,
		error,
	};
}

export { useLocalStorage };
