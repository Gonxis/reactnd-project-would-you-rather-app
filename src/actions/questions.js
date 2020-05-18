import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { addAnswerToUser, addQuestionToUser } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION"

export const ADD_QUESTION = 'ADD_QUESTION'

function addAnswerToQuestion({ authedUser, id, answer }) {
    return {
        type: ADD_ANSWER_TO_QUESTION,
        authedUser,
        id,
        answer
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

export function handleSaveQuestionAnswer(question, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        const id = question.id

        dispatch(showLoading());
        console.log("Value of Answer from handleSaveQuestionAnswer: ", answer)
        console.log("Type of Answer from handleSaveQuestionAnswer: ", typeof(answer))
        return saveQuestionAnswer({
                authedUser,
                id,
                answer
            })
            .then(() => {
                dispatch(addAnswerToUser(authedUser, id, answer))
                dispatch(addAnswerToQuestion(authedUser, id, answer))
            })
            .then(() => dispatch(hideLoading()))
    }
}

export function handleSaveQuestion(textOne, textTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        dispatch(showLoading())

        return saveQuestion({
                author: authedUser,
                optionOneText: textOne,
                optionTwoText: textTwo
            })
            .then((question) => {
                dispatch(addQuestion(question))
                dispatch(addQuestionToUser(question))
            })
            .then(() => dispatch(hideLoading()))
    }
}