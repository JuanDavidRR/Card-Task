import React, { useEffect, useReducer } from "react";
import "./styles.css";
import { reducer } from "./toDoReducer";
import Swal from "sweetalert2";
import { ToDoList } from "./components/ToDoList";
import { ToDoAdd } from "./components/ToDoAdd";

//Init es una función que sirve para llamar el estado inicial del componente
//en este caso estamos obteniendo la información del locaStorage
const init = () => {
	return JSON.parse(localStorage.getItem("state")) || [];
};

//Use reducer para almacenar el estado y para disparar el dispatch que lo cambia
export const ToDoApp = () => {
	const [state, dispatch] = useReducer(reducer, [], init);

	//Renderizamos el componente cada vez que cambié el state (task) e insertamos la info en el localstorage
	useEffect(() => {
		localStorage.setItem("state", JSON.stringify(state));
	}, [state]);

	//Llamamos la acción para eliminar su tarea por el id
	const handleDelete = (toDoId) => {
		const action = {
			type: "Delete",
			payload: toDoId,
		};
		dispatch(action);
		Swal.fire({
			icon: "success",
			title: "Task eliminated",
			showConfirmButton: true,
			timer: 1500,
		});
	};

	//Aplicamos la acción cuando el id no coincida
	const handleToggle = (toDoId) => {
		dispatch({
			type: "Complete",
			payload: toDoId,
		});
	};

	const handleProcess = (toDoId) => {
		dispatch({
			type: "Process",
			payload: toDoId,
		});
	};

	//Ejecutamos el método de agregar, nuestro objeto el cuál es defindo en todoadd con los valores del form
	const handleAddToDo = (newToDo) => {
		dispatch({
			type: "Add",
			payload: newToDo,
		});
	};

	const handleClear = () => {
		Swal.fire({
			title: "Do you want to delete all tasks?",
			showDenyButton: true,
			confirmButtonText: "Yes, delete all",
			denyButtonText: `Cancel`,
			text: "This change can not be reversed",
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				dispatch({
					type: "Clear",
				});
				Swal.fire("Tasks deleted!", "", "success");
			}
		});
	};

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-7 text-right">
					<h1 className="app-title">
						{"   "}
						<i className="fa fa-tasks fa header"></i> TASK{" "}
						<span className="badge bg-primary m-t mb-2">APP</span>
					</h1>
				</div>
				<div className="col add-task ml-3 animate__animated animate__bounceInDown">
					<ToDoAdd handeToDoAdd={handleAddToDo} />
					<button
						className="btn btn-danger add-task"
						onClick={handleClear}
					>
						<i className="fas fa-trash"></i>
					</button>
				</div>
			</div>

			<div className="col mt-5">
				{/* Mostrar únicamente si hay 1 o más tareas */}
				{state.length > 0 ? (
					<ToDoList
						state={state}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
						handleProcess={handleProcess}
					/>
				) : (
					<div className="mb-4">
						<h4>There is no avaiable tasks!</h4>
						<p className="empty-task">
							Please click on <i className="fa fa-plus"></i> and Fill
							out the form to start to work and reach all your goals
						</p>
					</div>
				)}
			</div>
		</div>
	);
};
