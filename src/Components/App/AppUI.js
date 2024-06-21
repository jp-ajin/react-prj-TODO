import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItems";
import { CreateTodoBtn } from "../CreateTodoBtn";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

function AppUI({
	completedTodos,
	totalTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	completeTodo,
	deleteTodo,
	loading,
	error,
	openModal,
	setOpenModal,
	createTodo,
}) {
	return (
		<React.Fragment>
			<TodoCounter completed={completedTodos} total={totalTodos} />
			<TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
			<TodoList>
				{loading && <TodosLoading />}
				{error && <TodosError />}
				{!loading && searchedTodos.length === 0 && <EmptyTodos />}

				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => completeTodo(todo.text)} // llamada de la funcion, encapsulando dentro en una arrow function
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoBtn setOpenModal={setOpenModal} />
			{openModal && (
				<Modal>
					<TodoForm setOpenModal={setOpenModal} createTodo={createTodo} />
				</Modal>
			)}
		</React.Fragment>
	);
}

export { AppUI };
