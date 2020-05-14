import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION_TO_USER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION_TO_USER:
            const { author, id } = action;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: [
                        ...state[author].questions,
                        id
                    ]
                }
            }
        default:
            return state
    }
}