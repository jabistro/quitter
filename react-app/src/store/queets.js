const GET_ALL_QUEETS = "/queets/GET_ALL_QUEETS";
const CREATE_QUEET = "/queets/CREATE_QUEET";
const DELETE_QUEET = "/queets/DELETE_QUEET";

const loadQueets = (queets) => ({
	type: GET_ALL_QUEETS,
	queets,
});

const createQueet = (queet) => ({
	type: CREATE_QUEET,
	queet,
});

const deleteQueet = (queetId) => ({
	type: DELETE_QUEET,
	queetId,
});

export const getQueets = () => async (dispatch) => {
	const response = await fetch("/api/queets");

	if (response.ok) {
		const queetList = await response.json();
		dispatch(loadQueets(queetList));
		return queetList;
	}
};

export const addQueet = (queet) => async (dispatch) => {
	const response = await fetch("/api/queets/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(queet),
	});

	if (response.ok) {
		const queet = await response.json();
		dispatch(createQueet(queet));

		return queet;

	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const modifyQueet = (editQueet) => async (dispatch) => {
	const response = await fetch(`/api/queets/edit/${editQueet.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(editQueet),
	});

	if (response.ok) {
		const editedQueet = await response.json();
		dispatch(createQueet(editedQueet));
		return editedQueet;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const eraseQueet = (destroyedQueet) => async (dispatch) => {
	const response = await fetch(`/api/queets/${destroyedQueet.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(destroyedQueet)
	});

	if (response.ok) {
		dispatch(deleteQueet(destroyedQueet.id));
	}
};

const queetsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_QUEETS:
			const allQueets = action.queets;
			return allQueets;
		case CREATE_QUEET:
			return { ...state, [action.queet.id]: action.queet };
		case DELETE_QUEET:
			const newState = { ...state };
			delete newState[action.queetId];
			return newState;
		default:
			return state;
	}
};

export default queetsReducer;
