const GET_USERS = "/users/GET_USERS";
const CREATE_USER = '/users/CREATE_USER';


const loadUsers = (users) => ({
    type: GET_USERS,
    users,
});

const createUser = (user) => ({
    type: CREATE_USER,
    user
})

export const getUsers = () => async (dispatch) => {
    const response = await fetch("/api/users");

    if (response.ok) {
        const userList = await response.json();
        dispatch(loadUsers(userList));
        return userList;
    }
};

export const addUser = (user) => async (dispatch) => {
    const response = await fetch("/api/users/signup", {

        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (response.ok) {
        const user = await response.json();
        dispatch(createUser(user));

        return user;

    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

export const modifyUser = (editUser) => async (dispatch) => {
    console.log("THIS HITS NUMBER 6!!!!!!")
    const response = await fetch(`/api/users/edit/${editUser.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser),
    });
    console.log("THIS HITS NUMBER 7!!!!!!")
    if (response.ok) {
        const editedUser = await response.json();
        dispatch(createUser(editedUser));
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    } else {
        return ["An error occurred. Please try again."];
    }
};

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS:
            const allUsers = {};
            action.users.users.forEach(user => {
                allUsers[user.id] = user;
            })
            return allUsers;
        case CREATE_USER:
            return { ...state, [action.user.id]: action.user };
        default:
            return state;
    }
};

export default usersReducer;
