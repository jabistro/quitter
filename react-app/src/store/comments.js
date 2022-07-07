const GET_ALL_COMMENTS = "/comments/getAllComments";
const GET_COMMENT = "/comments/getComment";
const CREATE_COMMENT = "/comments/create";
const EDIT_COMMENT = "/comments/edit";
const DELETE_COMMENT = "/comments/delete";

const loadComments = (comments) => ({
	type: GET_ALL_COMMENTS,
	comments,
});

const loadComment = (comment) => ({
	type: GET_COMMENT,
	comment,
});

const createComment = (comment) => ({
	type: CREATE_COMMENT,
	comment,
});

const editComment = (comment) => ({
	type: EDIT_COMMENT,
	comment,
});

const deleteComment = (comment) => ({
	type: DELETE_COMMENT,
	comment,
});

export const getComments = () => async (dispatch) => {
	const response = await fetch("/api/comments");

	if (response.ok) {
		const commentList = await response.json();
		dispatch(loadComments(commentList));
		return commentList;
	}
};

export const getComment = (id) => async (dispatch) => {
	const response = await fetch(`/api/comments/${id}`);

	if (response.ok) {
		const comment = await response.json();
		dispatch(loadComment(comment));
		return comment;
	}
};

export const addComment = (data) => async (dispatch) => {
	const response = await fetch("/api/comments/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createComment(data));

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

export const modifyComment = (data) => async (dispatch) => {
	const response = await fetch(`/api/comments/${data.commentId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(editComment(data));
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

export const eraseComment = (id) => async (dispatch) => {
	const response = await fetch(`/api/comments/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		dispatch(deleteComment(id));
	}
};

const commentsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_COMMENTS:
			const allComments = action.comments;
			return allComments;
		case GET_COMMENT:
			const singleComment = action.comment;
			return singleComment;
		case CREATE_COMMENT:
			return { ...state, [action.comment.id]: action.comment };
		case EDIT_COMMENT:
			return { ...state, [action.comment.id]: action.comment };
		case DELETE_COMMENT:
			const newState = { ...state };
			delete newState[action.comment.id];
			return newState;
		default:
			return state;
	}
};

export default commentsReducer;
