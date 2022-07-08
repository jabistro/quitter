const GET_ALL_COMMENTS = "/comments/GET_ALL_COMMENTS";
const CREATE_COMMENT = "/comments/CREATE_COMMENT";
const DELETE_COMMENT = "/comments/DELETE_COMMENT";

const loadComments = (comments) => ({
	type: GET_ALL_COMMENTS,
	comments,
});

const createComment = (comment) => ({
	type: CREATE_COMMENT,
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

export const addComment = (comment) => async (dispatch) => {
	const response = await fetch("/api/comments/new", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(comment),
	});

	if (response.ok) {
		const comment = await response.json();
		dispatch(createComment(comment));

		return comment;

	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const modifyComment = (editComment) => async (dispatch) => {
	const response = await fetch(`/api/comments/edit/${editComment.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(editComment),
	});

	if (response.ok) {
		const editedComment = await response.json();
		dispatch(createComment(editedComment));
		return editedComment;
	} else if (response.status < 500) {
		const data = await response.json();
		if (data.errors) {
			return data.errors;
		}
	} else {
		return ["An error occurred. Please try again."];
	}
};

export const eraseComment = (destroyedComment) => async (dispatch) => {
	const response = await fetch(`/api/comments/${destroyedComment.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(destroyedComment)
	});

	if (response.ok) {
		const deletedComment = await response.json();
		dispatch(deleteComment(deletedComment));
		return deletedComment
	}
};

const commentsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_COMMENTS:
			const allComments = action.comments;
			return allComments;
		case CREATE_COMMENT:
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
