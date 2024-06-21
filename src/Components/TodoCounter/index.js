import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
	if (total == completed) {
		return (
			<h1 className="TodoCounterCompleted">
				Filicidades, has completado <span>{completed}</span> de{" "}
				<span>{total}</span> todos{" "}
			</h1>
		);
	} else {
		return (
			<h1 className="TodoCounter">
				Has completado <span>{completed}</span> de <span>{total}</span> todos{" "}
			</h1>
		);
	}
}

export { TodoCounter };
