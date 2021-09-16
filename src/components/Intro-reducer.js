const initialState = [
	{
		id: 1,
		toDo: "Dormir",
		done: false,
	},
];

const toDoReducer = (state = initialState, action) => {
	if (action?.type === "add") {
		return [...state, action.payload];
	}

	return state;
};

let allToDo = toDoReducer();

const newToDo = {
	id: 1,
	toDo: "Comer",
	done: false,
};

const action = {
	type: "add",
	payload: newToDo,
};

allToDo = toDoReducer(allToDo, action);

console.log(allToDo);
