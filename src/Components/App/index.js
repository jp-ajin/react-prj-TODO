import React from "react";
import { AppUI } from "./AppUI";
import { useLocalStorage } from "../../Hooks/useLocalStorage";

function App() {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("TODOS_V1", []);
	const [searchValue, setSearchValue] = React.useState("");
	const [openModal, setOpenModal] = React.useState(false);

	const completedTodos = todos.filter((todo) => todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	const completeTodo = (text) => {
		// el (text) es un parametro que espera recibir la funcion
		const newTodos = [...todos]; //se crea una copia del array todos
		const todoIndex = newTodos.findIndex((todo) => todo.text === text); //obtiene la posicion del elemento con findIndex
		newTodos[todoIndex].completed = true; //se busca dentro del arreglo el elemento a cambiar completed = true
		saveTodos(newTodos); // recibe el array con los todos nuevos
	};

	const deleteTodo = (text) => {
		// el (text) es un parametro que espera recibir la funcion
		const newTodos = [...todos]; //se crea una copia del array todos
		const todoIndex = newTodos.findIndex((todo) => todo.text === text);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos); // recibe el array con los todos nuevos
	};

	const createTodo = (text) => {
		const newTodos = [...todos];
		newTodos.push({ text, completed: false });
		saveTodos(newTodos);
	};

	return (
		<AppUI
			loading={loading}
			error={error}
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
			openModal={openModal}
			setOpenModal={setOpenModal}
			createTodo={createTodo}
		/>
	);
}

export default App;
