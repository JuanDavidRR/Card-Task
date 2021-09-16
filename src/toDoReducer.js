export const reducer = (state = [], action) => {
	switch (action.type) {
		//Devolvemos el state original + la informaciónd del payload (el objeto del formulario)
		case "Add":
			return [...state, action.payload];
		//Traemos los objetos cuyo id sea diferente al que seleccionamos ya que el seleccionado se va
		case "Delete":
			return state.filter((toDo) => toDo.id !== action.payload);

		//Recorremos el objeto y si el id de la tarea es igual al id cargado (y este es true) setea el done a false
		case "Complete":
			return state.map((toDo) =>
				toDo.id === action.payload
					? { ...toDo, done: !toDo.done }
					: toDo
			);

		case "Clear":
			return [];

		default:
			return state;
	}
};
