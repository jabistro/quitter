const GET_ALL_QUEETS = "/queets/getAllQueets";
const GET_QUEET = "/queets/getQueet";
const CREATE_QUEET = "/queets/create";
const EDIT_QUEET = "/queets/edit";
const DELETE_QUEET = "/queets/delete";

const loadQueets = (queets) => ({
	type: GET_ALL_QUEETS,
	queets,
});

const loadQueet = (queet) => ({
	type: GET_QUEET,
	queet,
});

const createQueet = (queet) => ({
	type: CREATE_QUEET,
	queet,
});

const editQueet = (queet) => ({
	type: EDIT_QUEET,
	queet,
});

const deleteQueet = (queet) => ({
	type: DELETE_QUEET,
	queet,
});

export const getQueets = () => async (dispatch) => {
	const response = await fetch("/api/queets");

	if (response.ok) {
		const queetList = await response.json();
		dispatch(loadQueets(queetList));
		return queetList;
	}
};

export const getQueet = (id) => async (dispatch) => {
	const response = await fetch(`/api/queets/${id}`);

	if (response.ok) {
		const queet = await response.json();
		dispatch(loadQueet(queet));
		return queet;
	}
};

export const addQueet = (data) => async (dispatch) => {
	const response = await fetch("/api/queets/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createQueet(data));

		return data;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const modifyQueet = (data) => async (dispatch) => {
	const response = await fetch(`/api/queets/${data.queetId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(editQueet(data));
		return data;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const eraseQueet = (id) => async (dispatch) => {
	const response = await fetch(`/api/queets/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(deleteQueet(id));
	}
};

const queetsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_QUEETS:
			const allQueets = action.queets;
			return allQueets;
		case GET_QUEET:
			const singleQueet = action.queet;
			return singleQueet;
		case CREATE_QUEET:
			return { ...state, [action.queet.id]: action.queet };
		case EDIT_QUEET:
			return { ...state, [action.queet.id]: action.queet };
		case DELETE_QUEET:
			const newState = { ...state };
			delete newState[action.queet.id];
			return newState;
		default:
			return state;
	}
};

export default queetsReducer;
