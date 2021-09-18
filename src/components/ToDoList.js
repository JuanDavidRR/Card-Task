import React from "react";
import { ToDoListItem } from "./ToDoListItem";

//Las dependencias del componente
export const ToDoList = ({
	state,
	handleDelete,
	handleToggle,
	handleProcess,
}) => {
	return (
		<div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 text-center">
			<div className="col card-container mt-2">
				<div className="col-12">
					<h4>
						<span className="header badge bg-secondary m-t mb-3">
							To Do
						</span>
						{"   "}
						<i
							style={{ color: "#6c757d" }}
							className="fa fa-clock fa-spin"
						></i>
					</h4>
					<hr />
				</div>

				<div className="row task-container row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 text-center">
					{state
						.filter(function (toDo) {
							return toDo.done === false;
						})
						.map((toDo, i) => {
							return (
								<ToDoListItem
									key={toDo.id}
									toDo={toDo}
									i={i}
									handleDelete={handleDelete}
									handleToggle={handleToggle}
									handleProcess={handleProcess}
									state={state}
								/>
							);
						})}
				</div>
			</div>
			<div className="col card-container mt-2 text-center">
				<div className="col-12">
					<h4>
						<span className="header badge bg-primary m-t mb-3 header">
							Done
						</span>
						{"   "}
						<i
							style={{ color: "#0d6efd" }}
							className="fa fa-check"
						></i>
					</h4>
					<hr />
				</div>
				<div className="row task-container row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 g-4 text-center">
					{state
						.filter(function (toDo) {
							return toDo.done === true;
						})
						.map((toDo, i) => {
							return (
								<ToDoListItem
									key={toDo.id}
									toDo={toDo}
									i={i}
									handleDelete={handleDelete}
									handleToggle={handleToggle}
									handleProcess={handleProcess}
									state={state}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
};
