// const GET_USERS = "/queets/getUsers";


// const loadUsers = (users) => ({
// 	type: GET_USERS,
// 	users,
// });

// export const getUsers = () => async (dispatch) => {
// 	const response = await fetch("/api/users");

// 	if (response.ok) {
// 		const userList = await response.json();
// 		dispatch(loadUsers(userList));
// 		return userList;
// 	}
// };

// const usersReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case GET_USERS:
// 			const allUsers = action.users;
// 			return allUsers;
// 		default:
// 			return state;
// 	}
// };

// export default usersReducer;
