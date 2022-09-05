const GET_MESSAGES = '/messages/GET_MESSAGES';
const REMOVE_MESSAGES = '/messages/REMOVE_MESSAGES';

export const clearMessages = () => ({
    type: REMOVE_MESSAGES
})

const retrieveAll = (messages) => ({
    type: GET_MESSAGES,
    messages
})

export const getAllMessages = () => async (dispatch) => {
    const response = await fetch(`/api/conversations/messages`)

    if (response.ok) {
        const messageList = await response.json();
        // if (data.errors) {
        //     return data.errors
        // }
        dispatch(retrieveAll(messageList));
        return messageList;
    }
}


const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            const allMessages = {};
            action.messages.messages.forEach(message => {
                allMessages[message.id] = message;
            })
            return allMessages;
        case REMOVE_MESSAGES:
            return {};
        default:
            return state
    }
}

export default messageReducer

// const initialState = {}

// export default function messageReducer(state = initialState, action) {
//     switch (action.type) {
//         case GET_MESSAGES:
//             const messages = action.messages;
//             return { ...messages }
//         case REMOVE_MESSAGES:
//             return {};
//         default:
//             return state
//     }
// }
