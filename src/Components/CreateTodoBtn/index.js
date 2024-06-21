import "./CreateTodoBtn.css";

function CreateTodoBtn({ setOpenModal }) {
	return (
		<button
			className="CreateTodoBtn"
			onClick={() => {
				setOpenModal((state) => !state);
			}}
		>
			<span>+</span>
		</button>
	);
}

export { CreateTodoBtn };
