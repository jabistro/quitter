const GET_CONVERSATIONS = '/conversations/GET_CONVERSATIONS';
const REMOVE_CONVERSATIONS = '/conversations/REMOVE_CONVERSATIONS';

export const clearConversations = () => ({
    type: REMOVE_CONVERSATIONS
})

const retrieveAll = (conversations) => ({
    type: GET_CONVERSATIONS,
    conversations
});

export const createConversation = (payload) => async (dispatch) => {
    const response = await fetch('/api/conversations', {
        method: "POST",
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            throw (data);
        }
        return data
    }
    else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            throw (data);
        }
    }
}

export const getAllConversations = () => async (dispatch) => {
    const response = await fetch(`/api/conversations`)

    if (response.ok) {
        const conversationList = await response.json();
        // if (data.errors) {
        //     return data.errors
        // }
        dispatch(retrieveAll(conversationList));
        return conversationList;
    }
}

// export const getAllConversations = (id) => async (dispatch) => {
//     const response = await fetch(`/api/users/${id}/conversations`)

//     if (response.ok) {
//         const data = await response.json();
//         if (data.errors) {
//             return data.errors
//         }
//         dispatch(retrieveAll(data));
//     }
// }


const conversationReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_CONVERSATIONS:
            const allConversations = {};
            action.conversations.conversations.forEach(conversation => {
                allConversations[conversation.id] = conversation;
            })
            return allConversations;
        case REMOVE_CONVERSATIONS:
            return {}
        default:
            return state;
    }
}

export default conversationReducer

//what the state looks like initially
// const initialState = {};

// export default function conversationReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_CONVERSATIONS:
//             const conversations = action.conversations;
//             return { ...state, ...conversations }
//         case REMOVE_CONVERSATIONS:
//             return {}
//         default:
//             return state;
//     }
// }
