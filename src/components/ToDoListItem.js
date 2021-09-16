import React, { useState } from "react";
import { Modal } from "react-bootstrap";

//Llamamos las dependencias
export const ToDoListItem = ({
	toDo,
	i,
	handleDelete,
	handleToggle,
	handleProcess,
}) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="col text-center">
			<div
				onClick={handleShow}
				className={`card animate__animated animate__bounceIn ${
					toDo.done && "text-white bg-primary mb-3"
				}`}
			>
				<h6 className="card-header pt-2">
					<b>{toDo.task} </b>
					<span className="badge bg-danger mt-1">
						{toDo.importance}
					</span>
				</h6>
				<div className="card-body">
					<p
						style={{ padding: "0px 25px", fontSize: "13px" }}
						className="card-text mt-2 mb-2"
					>
						{toDo.description}
					</p>
				</div>
				{/* <div style={{margin: "0px 10px"}} className="row mb-3">
					<div className="col">
						<button
							className={
								toDo.done
									? "btn btn-outline-light"
									: "btn btn-primary"
							}
							onClick={() => handleToggle(toDo.id)}
						>
							<i className="fa fa-check"></i>
						</button>
					</div>
					
					<div className="col ">
						<button
							className={
								toDo.done ? "btn btn-outline-light" : "btn btn-outline-primary"
							}
							onClick={() => handleProcess(toDo.id)}
						>
							<i className="fa fa-clock"></i>
						</button>
						
					</div>
					<div className="col ">
						<button
							className={
								toDo.done ? "btn btn-outline-light" : "btn btn-danger"
							}
							onClick={() => handleDelete(toDo.id)}
						>
							<i className="fa fa-times"></i>
						</button>
					</div>
				</div> */}
			</div>
			<Modal className="text-center" show={show} onHide={handleClose}>
				<Modal.Body>
					<div>
						<div className="card-header ">
							<b>
								{i + 1}) {toDo.task}
							</b>
						</div>

						<div>
							<p className="card-text">
								<b>Prioridad</b>:{" "}
								<span className="badge bg-danger mt-3">
									{toDo.importance}
								</span>
							</p>
							<hr />
							<h6 className="card-title">
								<b>Description</b>
							</h6>
							<p className="card-text mt-3">{toDo.description}</p>
							<hr />
							<p className="card-text">
								<b>Duration: </b>
								{toDo.duration}hr
							</p>
							<hr />
						</div>
						<div style={{ padding: "0px 20px" }} className="row mb-3">
							<div className="col">
								<button
									className="btn btn-outline-primary"
									onClick={() => handleToggle(toDo.id)}
								>
									<i className="fa fa-check"></i> Done
								</button>
							</div>

							<div className="col ">
								<button
									className="btn btn-outline-danger"
									onClick={() => handleDelete(toDo.id)}
								>
									<i className="fa fa-times"></i> Delete
								</button>
							</div>
						</div>
						<div className="card-footer">
							<small>
								<b>
									<em>{toDo.category}</em>
								</b>
							</small>
						</div>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
};
