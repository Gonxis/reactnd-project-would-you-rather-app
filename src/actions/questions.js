import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addAnswerToQuestion({ id, authedUser, yourVote }) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        id,
        authedUser,
        yourVote
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
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

export function handleAddQuestion(textOne, textTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
                optionOneText: textOne,
                optionTwoText: textTwo,
                author: authedUser
            })
            .then((question) => dispatch(addQuestion(question)))
            .then(() => dispatch(hideLoading()))
    }
}