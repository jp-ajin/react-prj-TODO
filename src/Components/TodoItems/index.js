import "./TodoItems.css";
import { FaCheck } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

function TodoItem(props) {
	return (
		<li className="TodoItem">
			<FaCheck
				className={`Icon Icon-check
				${props.completed && "Icon-check--active"}`}
				onClick={props.onComplete} // recibe como prop el atributo enviado desde App.js
			/>
			{/* <span
				className={`Icon Icon-check
				${props.completed && "Icon-check--active"}`}
				onClick={props.onComplete} // recibe como prop el atributo enviado desde App.js
			>
				V
			</span> */}
			<p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"} `}>
				{props.text}
			</p>
			<MdClose className="Icon Icon-delete" onClick={props.onDelete} />
			{/* <span
				className="Icon Icon-delete"
				onClick={props.onDelete} // recibe como prop el atributo enviado desde App.js
			>
				X
			</span> */}
		</li>
	);
}

export { TodoItem };
