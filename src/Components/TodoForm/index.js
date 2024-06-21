import React from "react";
import "./TodoForm.css";

function TodoForm({ setOpenModal, createTodo }) {
	const [newTodoValue, setNewTodoValue] = React.useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		createTodo(newTodoValue);
		setOpenModal(false);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	const onChange = (event) => {
		setNewTodoValue(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<label>Crear nuevo TODO</label>
			<textarea
				placeholder="Escribir TODO"
				value={newTodoValue}
				onChange={onChange}
			/>
			<div className="TodoForm-buttonContainer">
				<button
					type="button"
					onClick={onCancel}
					className="TodoForm-button TodoForm-button--cancel"
				>
					Cancelar
				</button>
				<button type="submit" className="TodoForm-button TodoForm-button--add">
					Crear
				</button>
			</div>
		</form>
	);
}

export { TodoForm };
