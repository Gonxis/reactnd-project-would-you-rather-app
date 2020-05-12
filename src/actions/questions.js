import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addAnswerToQuestion({ id, authedUser, yourVote }) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        id,
        authedUser,
        yourVote
    }
}

export function handleAddAnswerToQuestion(info) {
    return dispatch => {
        dispatch(addAnswerToQuestion(info))

        return saveQuestionAnswer(info)
            .catch((err) => {
                console.warn("Error in handleAddAnswerToQuestion: ", err)
                    //dispatch()
                alert("There was an error submitting your answer. Please, try again...")
            })
    }
}