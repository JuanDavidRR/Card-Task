import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

export const ToDoAdd = ({ handeToDoAdd }) => {
	//Le pasamos los valores, el función de cuando cambia nuestro formulario y la función para resetearlo
	const [
		{ task, importance, duration, category, description },
		handleInputChange,
		reset,
	] = useForm({
		task: "",
		importance: "",
		duration: 1,
		category: "",
		description: "",
	});

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	//Función para leer el objeto del formulario en onSubmit()
	const handleSubmit = (e) => {
		e.preventDefault();
		//Validamos que en el formulario hayan valores básicos
		if (task.trim().length < 2 && category.length < 1) {
			Swal.fire({
				icon: "error",
				title: "Fill out the form",
				text: "You must fill out the both fields, please",
			});
			return;
		} else {
			Swal.fire(
				"Task added!",
				`You added ${task} with ${duration} hours  of duration`,
				"success"
			);
		}
		//Definimos el objeto que se añadirá al arreglo de objetos con los valores de nuestro form
		const newTask = {
			id: new Date().getTime(),
			task: task,
			importance: importance,
			duration: duration,
			category: category,
			description: description,
			done: false,
		};
		//Añadimos nuestro objeto, lógica en ToDoApp.js
		handeToDoAdd(newTask);
		reset();
	};

	return (
		<>
			<Button
				className="add-task"
				variant="primary"
				onClick={handleShow}
			>
				<i className="fa fa-plus"></i>
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Body>
					<form onSubmit={handleSubmit}>
						<h4>Add Task</h4>

						<hr />
						<div className="row">
							<div className="col">
								<input
									autoComplete="off"
									placeholder="Read Notebook"
									name="task"
									type="text"
									className="form-control"
									onChange={handleInputChange}
									value={task}
								/>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									Name the task that you want to add
								</small>
							</div>
							<div className="col">
								<select
									autoComplete="off"
									placeholder="YouTube, Web Design..."
									name="importance"
									type="text"
									className="form-control"
									onChange={handleInputChange}
									value={importance}
								>
									<option value="None">Priority</option>
									<option value="BAJO">Bajo</option>
									<option value="MEDIO">Medio</option>
									<option value="ALTO">Alto</option>
								</select>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									Priority of the task
								</small>
							</div>
						</div>

						<div className="row">
							<div className="col">
								<input
									autoComplete="off"
									placeholder="Duration in hours (Ej. 1 hour)"
									name="duration"
									type="number"
									className="form-control mt-2"
									onChange={handleInputChange}
									value={duration}
								/>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									Duration (minutes) that the task takes
								</small>
							</div>

							<div className="col">
								<select
									autoComplete="off"
									placeholder="YouTube, Web Design..."
									name="category"
									type="text"
									className="form-control mt-2"
									onChange={handleInputChange}
									value={category}
								>
									<option value="Uncategorized">
										Select Category
									</option>
									<option value="YouTube">YouTube</option>
									<option value="Website">Website</option>
									<option value="Develop">Develop</option>
									<option value="Marketing">Marketing</option>
									<option value="English">English</option>
									<option value="University">University</option>
								</select>
								<small
									id="emailHelp"
									className="form-text text-muted"
								>
									Category of the task
								</small>
							</div>
							<div>
								<textarea
									className="form-control mt-3"
									id="exampleFormControlTextarea1"
									rows="3"
									placeholder="Complete de third module of the course..."
									name="description"
									type="text"
									onChange={handleInputChange}
									value={description}
									cols="20"
								></textarea>
							</div>
							<small id="emailHelp" className="form-text text-muted">
								Description of the task
							</small>
						</div>

						<div className="d-grid gap-2">
							<button
								type="submit"
								className="btn btn-primary submit btn-block m-2 animate__animated animate__bounce"
							>
								Add Task
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
};
